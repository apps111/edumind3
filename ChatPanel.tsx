import { RefObject } from "react";

interface Message {
  role: "user" | "assistant";
  text: string;
}

interface Subject { label: string; icon: string; }
interface Lvl { label: string; fase: string; color: string; }

interface ChatPanelProps {
  c: string;
  subject: Subject;
  lvl: Lvl;
  msgs: Message[];
  chatLoad: boolean;
  chatIn: string;
  setChatIn: (v: string) => void;
  sendChat: () => void;
  chatRef: RefObject<HTMLDivElement>;
}

export default function ChatPanel({
  c, subject, lvl, msgs, chatLoad, chatIn, setChatIn, sendChat, chatRef,
}: ChatPanelProps) {
  return (
    <div style={{
      border: `1.5px solid ${c}25`,
      borderRadius: 19,
      overflow: "hidden",
      boxShadow: `0 4px 22px ${c}12`,
      background: "#fff",
    }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(90deg,${c}15,${c}06)`,
        padding: "12px 17px",
        borderBottom: `1px solid ${c}18`,
        display: "flex", alignItems: "center", gap: 10,
      }}>
        <span style={{ fontSize: 19 }}>{subject.icon}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, color: c, fontSize: 13 }}>
            {subject.label} — {lvl.label} ({lvl.fase})
          </div>
          <div style={{ fontSize: 11, color: "#aaa" }}>
            Konsultasi Deep Learning 2025/2026 · PPA Kemdikbudristek
          </div>
        </div>
        <div style={{
          fontSize: 11, background: "#fff", color: "#1D9E75",
          padding: "3px 12px", borderRadius: 20,
          border: "1.5px solid #1D9E7530", fontWeight: 700,
        }}>
          ● AI Online
        </div>
      </div>

      {/* Messages */}
      <div
        ref={chatRef}
        style={{
          height: 400, overflowY: "auto",
          padding: 16,
          display: "flex", flexDirection: "column", gap: 10,
          background: "#f9f9fb",
        }}
      >
        {msgs.length === 0 && (
          <div style={{ textAlign: "center", color: "#ccc", marginTop: 110, fontSize: 13 }}>
            <div style={{ fontSize: 42, marginBottom: 12 }}>💬</div>
            <div style={{ fontWeight: 600, color: "#ddd", marginBottom: 5 }}>
              Konsultasi Pembelajaran Mendalam
            </div>
            <div style={{ fontSize: 12 }}>
              Tanya strategi mengajar, analisis materi, solusi masalah kelas, atau pengembangan profesional guru
            </div>
          </div>
        )}

        {msgs.map((m, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 8,
              flexDirection: m.role === "user" ? "row-reverse" : "row",
            }}
          >
            <div style={{
              width: 32, height: 32, borderRadius: "50%",
              background: m.role === "user" ? "#e4e4e4" : c,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 15, flexShrink: 0,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}>
              {m.role === "user" ? "👨‍🏫" : "🤖"}
            </div>
            <div style={{
              maxWidth: "80%",
              padding: "11px 15px",
              borderRadius: m.role === "user"
                ? "18px 18px 4px 18px"
                : "18px 18px 18px 4px",
              background: m.role === "user" ? c : "#fff",
              color: m.role === "user" ? "#fff" : "#1e1e2e",
              fontSize: 13.5, lineHeight: 1.75,
              boxShadow: m.role === "user"
                ? `0 2px 10px ${c}44`
                : "0 2px 8px rgba(0,0,0,0.07)",
              border: m.role === "user" ? "none" : `1px solid ${c}18`,
            }}>
              {m.text}
            </div>
          </div>
        ))}

        {chatLoad && (
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
            <div style={{
              width: 32, height: 32, borderRadius: "50%",
              background: c, display: "flex",
              alignItems: "center", justifyContent: "center",
              fontSize: 15, boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}>🤖</div>
            <div style={{
              padding: "13px 18px",
              borderRadius: "18px 18px 18px 4px",
              background: "#fff",
              display: "flex", gap: 5, alignItems: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            }}>
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  style={{
                    width: 7, height: 7, borderRadius: "50%",
                    background: c, display: "inline-block",
                    animation: `bounce 1s ${i * 0.2}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div style={{
        display: "flex",
        borderTop: `1px solid ${c}18`,
        padding: 12, gap: 8,
        background: "#fafafa",
        alignItems: "center",
      }}>
        <input
          value={chatIn}
          onChange={e => setChatIn(e.target.value)}
          onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendChat()}
          placeholder="Tanya strategi mengajar, analisis materi, solusi kelas, pengembangan profesi..."
          style={{
            flex: 1,
            border: `1.5px solid ${c}38`,
            borderRadius: 24,
            padding: "11px 19px",
            fontSize: 13.5,
            outline: "none",
            background: "#fff",
            fontFamily: "inherit",
            color: "#333",
          }}
        />
        <button
          onClick={sendChat}
          disabled={chatLoad}
          style={{
            background: chatLoad ? "#d5d5d5" : c,
            color: "#fff", border: "none", borderRadius: 24,
            padding: "11px 27px",
            cursor: chatLoad ? "not-allowed" : "pointer",
            fontSize: 14, fontWeight: 700,
            boxShadow: chatLoad ? "none" : `0 4px 14px ${c}50`,
            transition: "all .2s", flexShrink: 0,
          }}
        >
          Kirim
        </button>
      </div>
    </div>
  );
}
