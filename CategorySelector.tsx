interface Category {
  name: string;
  color?: string;
}

interface Level {
  color: string;
  categories: Category[];
}

interface CategorySelectorProps {
  lvl: Level;
  sc: number;
  onPick: (i: number) => void;
}

export default function CategorySelector({ lvl, sc, onPick }: CategorySelectorProps) {
  if (lvl.categories.length <= 1) return null;

  return (
    <div style={{
      display: "flex",
      gap: 5,
      marginBottom: 11,
      overflowX: "auto",
      paddingBottom: 4,
    }}>
      {lvl.categories.map((ct, i) => {
        const color = ct.color || lvl.color;
        const active = sc === i;
        return (
          <button
            key={i}
            onClick={() => onPick(i)}
            style={{
              padding: "6px 13px",
              borderRadius: 20,
              border: `2px solid ${active ? color : "#e0e0e0"}`,
              background: active ? color : "#fff",
              color: active ? "#fff" : "#666",
              cursor: "pointer",
              fontSize: 11.5,
              fontWeight: active ? 700 : 500,
              whiteSpace: "nowrap",
              transition: "all .15s",
              flexShrink: 0,
              boxShadow: active ? `0 3px 10px ${color}40` : "none",
            }}
          >
            {ct.name}
          </button>
        );
      })}
    </div>
  );
}
