export interface Tool {
  id: string;
  label: string;
  icon: string;
  ph: string;
}

export const TOOLS: Tool[] = [
  {
    id: "modul",
    label: "Modul Ajar",
    icon: "📘",
    ph: "Topik/elemen CP, kelas, alokasi waktu, model pembelajaran yang diinginkan...",
  },
  {
    id: "cp_atp",
    label: "CP & ATP",
    icon: "🗺️",
    ph: "Mata pelajaran, fase, kelas, dan semester yang ingin dibuatkan CP dan ATP-nya...",
  },
  {
    id: "materi",
    label: "Materi Mendalam",
    icon: "📋",
    ph: "Topik spesifik yang ingin dikembangkan dengan pendekatan pembelajaran mendalam...",
  },
  {
    id: "soal",
    label: "Soal & Kisi-Kisi",
    icon: "📝",
    ph: "Jenis soal (PG/essay/HOTS/AKM), topik, jumlah soal, level kognitif Bloom C1-C6...",
  },
  {
    id: "lkpd",
    label: "LKPD / Jobsheet",
    icon: "🔩",
    ph: "Judul aktivitas/praktikum, tujuan, kelas, alat dan bahan yang tersedia...",
  },
  {
    id: "asesmen",
    label: "Instrumen Asesmen",
    icon: "📊",
    ph: "Kompetensi yang dinilai, jenis asesmen (diagnostik/formatif/sumatif)...",
  },
  {
    id: "rubrik",
    label: "Rubrik Penilaian",
    icon: "📏",
    ph: "Kompetensi atau keterampilan yang dinilai, aspek-aspek penilaian yang dibutuhkan...",
  },
  {
    id: "kktp",
    label: "KKTP",
    icon: "🎯",
    ph: "Tujuan pembelajaran, indikator ketercapaian, deskripsi level capaian yang dibutuhkan...",
  },
  {
    id: "p5",
    label: "Proyek P5 / P5BK",
    icon: "🌟",
    ph: "Tema proyek, dimensi Profil Pelajar Pancasila, kelas, durasi waktu proyek...",
  },
  {
    id: "promes",
    label: "Promes & Silabus",
    icon: "📅",
    ph: "Mata pelajaran, fase, kelas, jumlah minggu efektif per semester...",
  },
  {
    id: "diferensiasi",
    label: "Pembelajaran Berdiferensiasi",
    icon: "🌈",
    ph: "Topik, keragaman kebutuhan murid (minat, kesiapan belajar, profil belajar)...",
  },
  {
    id: "tarl",
    label: "TaRL & Diagnostik",
    icon: "📶",
    ph: "Mata pelajaran, kelas, kompetensi prasyarat, ragam level kemampuan murid...",
  },
  {
    id: "refleksi",
    label: "Refleksi & RTL",
    icon: "🔄",
    ph: "Kompetensi yang diajarkan, hasil asesmen, temuan kelas, kebutuhan tindak lanjut...",
  },
  {
    id: "rapor",
    label: "Deskripsi Rapor",
    icon: "📄",
    ph: "Capaian murid, kelebihan, area pengembangan, saran untuk orang tua...",
  },
  {
    id: "ikm",
    label: "Instrumen Iklim Kelas",
    icon: "🌤️",
    ph: "Aspek iklim kelas yang ingin diobservasi: partisipasi, kolaborasi, rasa aman psikologis...",
  },
];
