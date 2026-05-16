interface TabBarProps {
  tab: string;
  setTab: (t: string) => void;
  c: string;
}

const TABS = [
  ["tools", "🛠️ Perangkat Ajar"],
  ["chat", "💬 Konsultasi AI"],
];

export default function TabBar({ tab, setTab, c }: TabBarProps) {
  return (
    <div style={{ display: "flex", marginBottom: 15, borderBottom: "2px solid #ebebeb" }}>
      {TABS.map(([k, l]) => (
        <button
          key={k}
          onClick={() => setTab(k)}
          style={{
            padding: "9px 22px",
            border: "none",
            background: "none",
            cursor: "pointer",
            fontSize: 13,
            fontWeight: tab === k ? 700 : 400,
            color: tab === k ? c : "#ccc",
            borderBottom: `3px solid ${tab === k ? c : "transparent"}`,
            marginBottom: -2,
            transition: "all .15s",
          }}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
