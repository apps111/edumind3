interface Subject {
  id: string;
  label: string;
  icon: string;
}

interface Category {
  subjects: Subject[];
}

interface SubjectSelectorProps {
  cat: Category;
  subject: Subject;
  c: string;
  onPick: (s: Subject) => void;
}

export default function SubjectSelector({ cat, subject, c, onPick }: SubjectSelectorProps) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(98px,1fr))",
      gap: 6,
      marginBottom: 17,
      background: "#fff",
      padding: "12px",
      borderRadius: 18,
      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      border: "1px solid #f0f0f0",
    }}>
      {cat.subjects.map(s => {
        const active = subject.id === s.id;
        return (
          <button
            key={s.id}
            onClick={() => onPick(s)}
            style={{
              padding: "10px 4px 8px",
              borderRadius: 13,
              border: `2px solid ${active ? c : "#ebebeb"}`,
              background: active ? `${c}18` : "#fafafa",
              cursor: "pointer",
              textAlign: "center",
              transition: "all .15s",
              boxShadow: active ? `0 3px 12px ${c}28` : "none",
            }}
          >
            <div style={{ fontSize: 20, marginBottom: 3 }}>{s.icon}</div>
            <div style={{
              fontSize: 10,
              fontWeight: active ? 700 : 400,
              color: active ? c : "#666",
              lineHeight: 1.35,
            }}>
              {s.label}
            </div>
          </button>
        );
      })}
    </div>
  );
}
