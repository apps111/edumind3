import { useState, useRef, useEffect } from "react";
import { LEVELS } from "../constants/levels";
import { TOOLS } from "../constants/tools";
import { SYS } from "../constants/prompts";
import { useEduMind } from "../hooks/useEduMind";
import Header from "./Header";
import LevelSelector from "./LevelSelector";
import CategorySelector from "./CategorySelector";
import SubjectSelector from "./SubjectSelector";
import TabBar from "./TabBar";
import ToolsPanel from "./ToolsPanel";
import ChatPanel from "./ChatPanel";

export default function EduMindAI() {
  const {
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
  } = useEduMind();

  return (
    <div style={{
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      maxWidth: 960,
      margin: "0 auto",
      padding: "1rem 1rem 3rem",
      background: "#f9f9fb",
      minHeight: "100vh",
    }}>
      <Header lvl={lvl} level={level} />

      <LevelSelector
        levels={LEVELS}
        level={level}
        onPick={pickLvl}
      />

      <CategorySelector
        lvl={lvl}
        sc={sc}
        onPick={pickCat}
      />

      <SubjectSelector
        cat={cat}
        subject={subject}
        c={c}
        onPick={pickSub}
      />

      <TabBar tab={tab} setTab={setTab} c={c} />

      {tab === "tools" && (
        <ToolsPanel
          tools={TOOLS}
          tool={tool}
          setTool={setTool}
          c={c}
          subject={subject}
          lvl={lvl}
          cat={cat}
          input={input}
          setInput={setInput}
          generate={generate}
          generating={generating}
          result={result}
          setResult={setResult}
          setInput={setInput}
          copied={copied}
          doCopy={doCopy}
          resRef={resRef}
        />
      )}

      {tab === "chat" && (
        <ChatPanel
          c={c}
          subject={subject}
          lvl={lvl}
          msgs={msgs}
          chatLoad={chatLoad}
          chatIn={chatIn}
          setChatIn={setChatIn}
          sendChat={sendChat}
          chatRef={chatRef}
        />
      )}

      <style>{`
        @keyframes bounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-8px)} }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        button:hover { filter: brightness(0.94); }
        button:active { transform: scale(0.97); }
        textarea:focus, input:focus { outline: none; box-shadow: 0 0 0 3px ${c}20 !important; }
        ::-webkit-scrollbar { width: 5px; height: 5px; }
        ::-webkit-scrollbar-track { background: #f5f5f5; border-radius: 10px; }
        ::-webkit-scrollbar-thumb { background: #d8d8d8; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #bbb; }
      `}</style>
    </div>
  );
}
