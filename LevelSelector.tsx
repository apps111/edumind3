interface Level {
  color: string;
  emoji: string;
  label: string;
}

interface LevelSelectorProps {
  levels: Record<string, Level>;
  level: string;
  onPick: (key: string) => void;
}

export default function LevelSelector({ levels, level, onPick }: LevelSelectorProps) {
  return (
    <div style={{ display: "flex", gap: 6, marginBottom: 13, flexWrap: "wrap" }}>
      {Object.entries(levels).map(([k, v]) => (
        <button
          key={k}
          onClick={() => onPick(k)}
          style={{
            padding: "7px 18px",
            borderRadius: 30,
            border: `2px solid ${level === k ? v.color : "#e0e0e0"}`,
            background: level === k ? v.color : "#fff",
            color: level === k ? "#fff" : "#777",
            cursor: "pointer",
            fontWeight: 700,
            fontSize: 13,
            transition: "all .15s",
            boxShadow: level === k ? `0 4px 14px ${v.color}44` : "0 1px 4px rgba(0,0,0,0.05)",
          }}
        >
          {v.emoji} {v.label}
        </button>
      ))}
    </div>
  );
}
