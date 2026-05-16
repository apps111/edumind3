import { useState, useRef, useEffect } from "react";
import { LEVELS } from "../constants/levels";
import { SYS } from "../constants/prompts";

interface Message {
  role: "user" | "assistant";
  text: string;
}

interface Subject {
  id: string;
  label: string;
  icon: string;
  prompt: string;
}

export function useEduMind() {
  const [level, setLevel] = useState("smk");
  const [catIdx, setCatIdx] = useState(0);
  const [subject, setSubject] = useState<Subject>(LEVELS.smk.categories[0].subjects[0]);
  const [tool, setTool] = useState("modul");
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [generating, setGenerating] = useState(false);
  const [msgs, setMsgs] = useState<Message[]>([]);
  const [chatIn, setChatIn] = useState("");
  const [chatLoad, setChatLoad] = useState(false);
  const [tab, setTab] = useState("tools");
  const [copied, setCopied] = useState(false);

  const chatRef = useRef<HTMLDivElement>(null);
  const resRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [msgs, chatLoad]);

  useEffect(() => {
    if (result && resRef.current) {
      resRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [result]);

  const lvl = LEVELS[level];
  const sc = Math.min(catIdx, lvl.categories.length - 1);
  const cat = lvl.categories[sc];
  const c = cat?.color || lvl.color;

  const clean = (t: string) =>
    t
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/\*(.*?)\*/g, "$1")
      .replace(/^#{1,6}\s+/gm, "")
      .replace(/`{1,3}[a-z]*\n?/g, "")
      .replace(/^>\s/gm, "")
      .replace(/_{1,2}(.*?)_{1,2}/g, "$1")
      .replace(/~~(.*?)~~/g, "$1");

  const pickLvl = (l: string) => {
    setLevel(l);
    setCatIdx(0);
    setSubject(LEVELS[l].categories[0].subjects[0]);
    setResult("");
    setMsgs([]);
  };

  const pickCat = (i: number) => {
    setCatIdx(i);
    setSubject(lvl.categories[i].subjects[0]);
    setResult("");
  };

  const pickSub = (s: Subject) => {
    setSubject(s);
    setResult("");
    setMsgs([{
      role: "assistant",
      text: `Siap membantu Bapak/Ibu Guru ${s.label} (${lvl.label} - ${lvl.fase}). Pilih instrumen perangkat ajar atau gunakan Konsultasi AI.`,
    }]);
  };

  const doFetch = async (sys: string, userMsg: string, maxTok = 3500) => {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: maxTok,
        system: sys,
        messages: [{ role: "user", content: userMsg }],
      }),
    });
    const d = await r.json();
    return clean(d.content?.[0]?.text || "Gagal generate. Coba lagi!");
  };

  const generate = async () => {
    if (!input.trim() || generating) return;
    setGenerating(true);
    setResult("");
    try {
      setResult(await doFetch(SYS(tool, subject.prompt, lvl.label, lvl.fase), input));
    } catch {
      setResult("Koneksi bermasalah. Coba lagi!");
    }
    setGenerating(false);
  };

  const sendChat = async () => {
    if (!chatIn.trim() || chatLoad) return;
    const msg = chatIn.trim();
    setChatIn("");
    setMsgs(p => [...p, { role: "user", text: msg }]);
    setChatLoad(true);
    try {
      const hist = msgs.map(m => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: m.text,
      }));
      const sys =
        subject.prompt +
        ` Kamu konsultan pendidikan profesional guru ${lvl.label} Indonesia. ` +
        `Bantu guru: strategi mengajar, analisis materi, solusi masalah kelas, pengembangan profesi. ` +
        `Bahasa Indonesia profesional dan hangat. Tidak ada simbol markdown.`;
      const r = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1200,
          system: sys,
          messages: [...hist, { role: "user", content: msg }],
        }),
      });
      const d = await r.json();
      setMsgs(p => [
        ...p,
        { role: "assistant", text: clean(d.content?.[0]?.text || "Maaf, coba lagi!") },
      ]);
    } catch {
      setMsgs(p => [...p, { role: "assistant", text: "Koneksi bermasalah!" }]);
    }
    setChatLoad(false);
  };

  const doCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return {
    level, setLevel,
    catIdx, setCatIdx,
    subject, setSubject,
    tool, setTool,
    input, setInput,
    result, setResult,
    generating,
    msgs, setMsgs,
    chatIn, setChatIn,
    chatLoad,
    tab, setTab,
    copied, setCopied,
    chatRef, resRef,
    lvl, sc, cat, c,
    generate, sendChat, doCopy,
    pickLvl, pickCat, pickSub,
  };
}
