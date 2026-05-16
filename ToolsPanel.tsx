import { RefObject } from "react";

interface Tool {
  id: string;
  label: string;
  icon: string;
  ph: string;
}

interface Subject { id: string; label: string; icon: string; }
interface Lvl { label: string; fase: string; }
interface Cat { icon?: string; label?: string; }

interface ToolsPanelProps {
  tools: Tool[];
  tool: string;
  setTool: (id: string) => void;
  c: string;
  subject: Subject;
  lvl: Lvl;
  cat?: Cat;
  input: string;
  setInput: (v: string) => void;
  generate: () => void;
  generating: boolean;
  result: string;
  setResult: (v: string) => void;
  copied: boolean;
  doCopy: () => void;
  resRef: RefObject<HTMLDivElement>;
}

export default function ToolsPanel({
  tools, tool, setTool, c, subject, lvl, cat,
  input, setInput, generate, generating,
  result, setResult, copied, doCopy, resRef,
}: ToolsPanelProps) {
  const ct = tools.find(t => t.id === tool);

  return (
    <div>
      {/* Tool Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(148px,1fr))",
        gap: 6, marginBottom: 15,
        background: "#fff", padding: "12px",
        borderRadius: 18,
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        border: "1px solid #f0f0f0",
      }}>
        {tools.map(t2 => (
          <button
            key={t2.id}
            onClick={() => setTool(t2.id)}
            style={{
              padding: "9px 8px", borderRadius: 12,
              border: `2px solid ${tool === t2.id ? c : "#e8e8e8"}`,
              background: tool === t2.id ? `${c}15` : "#fafafa",
              cursor: "pointer", fontSize: 11.5,
              fontWeight: tool === t2.id ? 700 : 400,
              color: tool === t2.id ? c : "#666",
              transition: "all .15s", textAlign: "center",
              boxShadow: tool === t2.id ? `0 2px 10px ${c}28` : "none",
            }}
          >
            <span style={{ marginRight: 4 }}>{t2.icon}</span>{t2.label}
          </button>
        ))}
      </div>

      {/* Banner */}
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "11px 15px",
        background: `${c}0e`,
        border: `1.5px solid ${c}25`,
        borderRadius: 14, marginBottom: 13,
      }}>
        <span style={{ fontSize: 21 }}>{subject.icon}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: c }}>
            {subject.label} — {lvl.label} ({lvl.fase})
          </div>
          <div style={{ fontSize: 10.5, color: "#aaa", marginTop: 1 }}>
            Kurikulum Merdeka 2026 · Deep Learning 2025/2026 · PPA Kemdikbudristek · Profil Pelajar Pancasila
          </div>
        </div>
        {ct && (
          <div style={{
            background: c, color: "#fff", fontSize: 11, fontWeight: 700,
            padding: "5px 13px", borderRadius: 20, flexShrink: 0,
            boxShadow: `0 3px 10px ${c}44`,
          }}>
            {ct.icon} {ct.label}
          </div>
        )}
      </div>

      {/* Input */}
      <div style={{
        border: `1.5px solid ${c}25`, borderRadius: 17,
        overflow: "hidden", background: "#fff",
        boxShadow: `0 4px 18px ${c}0e`, marginBottom: 15,
      }}>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.ctrlKey && e.key === "Enter") generate(); }}
          placeholder={ct?.ph}
          style={{
            width: "100%", border: "none", padding: "15px 17px",
            fontSize: 13.5, outline: "none", minHeight: 100,
            resize: "vertical", boxSizing: "border-box",
            fontFamily: "inherit", color: "#333",
            lineHeight: 1.7, display: "block", background: "transparent",
          }}
        />
        <div style={{
          padding: "10px 15px", background: "#fafafa",
          borderTop: `1px solid ${c}15`,
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 10,
        }}>
          <span style={{ fontSize: 11, color: "#c0c0c0" }}>
            Detail input = hasil lebih lengkap · Ctrl+Enter untuk generate
          </span>
          <button
            onClick={generate}
            disabled={generating}
            style={{
              background: generating ? "#d5d5d5" : c,
              color: "#fff", border: "none", borderRadius: 24,
              padding: "11px 30px",
              cursor: generating ? "not-allowed" : "pointer",
              fontSize: 13.5, fontWeight: 700,
              boxShadow: generating ? "none" : `0 4px 16px ${c}50`,
              transition: "all .2s", whiteSpace: "nowrap", flexShrink: 0,
            }}
          >
            {generating ? "Sedang Menyusun..." : "Generate"}
          </button>
        </div>
      </div>

      {/* Loading */}
      {generating && !result && (
        <div style={{
          padding: "44px 0", textAlign: "center",
          background: "#fff", borderRadius: 17,
          border: `1.5px solid ${c}18`,
        }}>
          <div style={{
            fontSize: 34, marginBottom: 11,
            animation: "spin 1.5s linear infinite",
            display: "inline-block",
          }}>⚙️</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: c, marginBottom: 5 }}>
            Menyusun perangkat ajar berbasis Kurikulum Merdeka 2026...
          </div>
          <div style={{ fontSize: 11.5, color: "#ccc" }}>
            Menerapkan prinsip Deep Learning: bermakna, menyenangkan, memerdekakan
          </div>
        </div>
      )}

      {/* Result */}
      {result && (
        <div
          ref={resRef}
          style={{
            border: `1.5px solid ${c}25`, borderRadius: 17,
            overflow: "hidden",
            boxShadow: `0 4px 20px ${c}0e`,
            background: "#fff",
          }}
        >
          <div style={{
            background: `linear-gradient(90deg,${c}15,${c}06)`,
            padding: "12px 17px",
            borderBottom: `1px solid ${c}18`,
            display: "flex", alignItems: "center",
            justifyContent: "space-between", gap: 8, flexWrap: "wrap",
          }}>
            <div>
              <span style={{ fontWeight: 700, color: c, fontSize: 13 }}>
                {ct?.icon} {ct?.label}
              </span>
              <span style={{ fontSize: 11, color: "#aaa", marginLeft: 8 }}>
                {subject.label} — {lvl.label} ({lvl.fase})
              </span>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <button
                onClick={doCopy}
                style={{
                  padding: "5px 15px", borderRadius: 20,
                  border: `1.5px solid ${c}40`,
                  background: copied ? c : `${c}12`,
                  color: copied ? "#fff" : c,
                  cursor: "pointer", fontSize: 11, fontWeight: 700,
                  transition: "all .2s",
                }}
              >
                {copied ? "Tersalin ✓" : "Salin Teks"}
              </button>
              <button
                onClick={() => { setResult(""); setInput(""); }}
                style={{
                  padding: "5px 12px", borderRadius: 20,
                  border: "1.5px solid #e0e0e0",
                  background: "#f7f7f7", color: "#999",
                  cursor: "pointer", fontSize: 11,
                }}
              >
                Bersihkan
              </button>
            </div>
          </div>
          <div style={{ padding: "22px 24px", maxHeight: 600, overflowY: "auto" }}>
            <pre style={{
              fontSize: 13.5, lineHeight: 2.05, color: "#1e1e2e",
              whiteSpace: "pre-wrap",
              fontFamily: "'Segoe UI',system-ui,sans-serif",
              margin: 0,
            }}>
              {result}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
