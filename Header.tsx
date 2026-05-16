interface HeaderProps {
  lvl: {
    color: string;
    bg: string;
    emoji: string;
    label: string;
    fase: string;
  };
  level: string;
}

export default function Header({ lvl, level }: HeaderProps) {
  const badges = [
    "Kurikulum Merdeka 2026",
    "Deep Learning 2025/2026",
    "Profil Pelajar Pancasila",
    "PPA Kemdikbudristek",
  ];

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 18,
      padding: "16px 22px",
      background: `linear-gradient(135deg,${lvl.color}22,${lvl.bg})`,
      borderRadius: 22,
      border: `1.5px solid ${lvl.color}30`,
      boxShadow: `0 4px 20px ${lvl.color}15`,
    }}>
      <div style={{
        width: 52, height: 52,
        borderRadius: 15,
        background: `linear-gradient(135deg,${lvl.color},${lvl.color}cc)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 27,
        boxShadow: `0 6px 20px ${lvl.color}55`,
        flexShrink: 0,
      }}>🎓</div>

      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 23, fontWeight: 900, color: "#1a1a2e", letterSpacing: "-0.5px" }}>
          EduMind AI
        </div>
        <div style={{ display: "flex", gap: 5, marginTop: 4, flexWrap: "wrap" }}>
          {badges.map(t => (
            <span key={t} style={{
              background: "#fff",
              padding: "2px 9px",
              borderRadius: 10,
              border: `1px solid ${lvl.color}30`,
              color: lvl.color,
              fontWeight: 600,
              fontSize: 10.5,
            }}>{t}</span>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "right", flexShrink: 0 }}>
        <div style={{ fontSize: 10, color: "#aaa", marginBottom: 2, fontWeight: 500 }}>JENJANG AKTIF</div>
        <div style={{ fontSize: 21, fontWeight: 900, color: lvl.color }}>{lvl.emoji} {lvl.label}</div>
        <div style={{ fontSize: 10, color: "#aaa" }}>{lvl.fase}</div>
      </div>
    </div>
  );
}
