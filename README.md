# 🎓 EduMind AI

**Asisten Perangkat Ajar Cerdas untuk Guru Indonesia**

> Berbasis Kurikulum Merdeka 2026 · Deep Learning 2025/2026 · Profil Pelajar Pancasila · PPA Kemdikbudristek

[![CI](https://github.com/USERNAME/edumind-ai/actions/workflows/ci.yml/badge.svg)](https://github.com/USERNAME/edumind-ai/actions/workflows/ci.yml)
[![Deploy](https://github.com/USERNAME/edumind-ai/actions/workflows/deploy.yml/badge.svg)](https://github.com/USERNAME/edumind-ai/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|---|---|
| 📘 **Modul Ajar** | Modul lengkap 20 bagian sesuai format Kurikulum Merdeka 2026 |
| 🗺️ **CP & ATP** | Capaian Pembelajaran dan Alur Tujuan Pembelajaran per fase |
| 📋 **Materi Mendalam** | Materi berbasis Deep Learning dengan konteks nyata Indonesia |
| 📝 **Soal & Kisi-Kisi** | PG, uraian, HOTS, AKM — lengkap dengan rubrik dan kunci |
| 🔩 **LKPD / Jobsheet** | Lembar kerja/jobsheet siap pakai, termasuk K3 untuk praktikum |
| 📊 **Instrumen Asesmen** | Diagnostik, formatif, sumatif — nonkognitif dan kognitif |
| 📏 **Rubrik Penilaian** | Rubrik analitik 4 level dengan bobot dan konversi nilai |
| 🎯 **KKTP** | Kriteria Ketercapaian Tujuan Pembelajaran per level |
| 🌟 **Proyek P5 / P5BK** | Panduan proyek lengkap 4 tahap dengan asesmen PPP |
| 📅 **Promes & Silabus** | Program semester dan garis besar silabus per bulan |
| 🌈 **Diferensiasi** | Strategi konten, proses, produk, dan lingkungan belajar |
| 📶 **TaRL & Diagnostik** | Teaching at The Right Level dengan 3 kelompok level |
| 🔄 **Refleksi & RTL** | Refleksi guru & murid, analisis hasil, rencana tindak lanjut |
| 📄 **Deskripsi Rapor** | 3 versi deskripsi (tinggi/sedang/perlu bimbingan) |
| 🌤️ **Iklim Kelas** | Instrumen wellbeing, exit ticket, suara murid |
| 💬 **Konsultasi AI** | Chat bebas dengan konsultan pendidikan AI |

---

## 🏫 Jenjang & Mata Pelajaran

| Jenjang | Fase | Kategori |
|---|---|---|
| 🌱 **SD** | A–C | Semua Mapel (10 mapel) |
| 📚 **SMP** | D | Semua Mapel (13 mapel) |
| 🎓 **SMA** | E–F | Umum & Wajib, MIPA, IPS, Bahasa & Sastra (26 mapel) |
| 🛠️ **SMK** | E–F | Normatif & Adaptif, TI, Teknik & Rekayasa, Bisnis, Pariwisata, Kesehatan, Pertanian (70+ mapel) |

---

## 🚀 Instalasi & Pengembangan

### Prasyarat
- Node.js ≥ 18
- npm ≥ 9

### Langkah

```bash
# 1. Clone repositori
git clone https://github.com/USERNAME/edumind-ai.git
cd edumind-ai

# 2. Install dependensi
npm install

# 3. Jalankan dev server
npm run dev
# → Buka http://localhost:3000
```

### Build Produksi

```bash
npm run build     # output → dist/
npm run preview   # preview build lokal
```

---

## 🏗️ Struktur Proyek

```
edumind-ai/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/          # Komponen UI
│   │   ├── EduMindAI.tsx    # Root component (layout utama)
│   │   ├── Header.tsx       # Header dengan badge kurikulum
│   │   ├── LevelSelector.tsx# Pilihan jenjang SD/SMP/SMA/SMK
│   │   ├── CategorySelector.tsx # Pilihan kategori mapel
│   │   ├── SubjectSelector.tsx  # Grid pilihan mata pelajaran
│   │   ├── TabBar.tsx       # Tab Perangkat Ajar / Konsultasi AI
│   │   ├── ToolsPanel.tsx   # Panel generate perangkat ajar
│   │   └── ChatPanel.tsx    # Panel chat konsultasi
│   ├── constants/
│   │   ├── levels.ts        # Data jenjang, kategori, mata pelajaran
│   │   ├── tools.ts         # Daftar 15 jenis perangkat ajar
│   │   └── prompts.ts       # System prompt AI per tool (PPP + DL)
│   ├── hooks/
│   │   └── useEduMind.ts    # Custom hook: state & API calls
│   ├── utils/
│   │   ├── cleanMarkdown.ts # Bersihkan output markdown dari AI
│   │   └── apiClient.ts     # Wrapper Anthropic Messages API
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/
│   └── workflows/
│       ├── ci.yml           # CI: type check, lint, build
│       └── deploy.yml       # Deploy ke GitHub Pages
├── .env.example
├── .eslintrc.cjs
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🤖 Arsitektur AI

EduMind AI memanggil **Anthropic Claude API** (`claude-sonnet-4-20250514`) langsung dari browser:

- Setiap tool memiliki **system prompt spesifik** yang menyertakan:
  - Peran guru dan jenjang yang dipilih
  - Referensi lengkap **Profil Pelajar Pancasila** (Permendikbudristek No.12/2024)
  - Prinsip **Deep Learning 2025/2026** (3 kualitas + 6 dimensi)
  - Format output terstruktur siap cetak (tanpa simbol markdown)
- Output diproses oleh `cleanMarkdown()` untuk memastikan teks bersih

---

## 🔐 API Key & Keamanan

- Saat digunakan sebagai **Claude Artifact**, API key dikelola otomatis oleh proxy Anthropic
- Untuk deploy mandiri, salin `.env.example` → `.env.local` dan isi `VITE_ANTHROPIC_API_KEY`
- **JANGAN** commit file `.env.local` ke Git (sudah ada di `.gitignore`)

---

## 📋 Acuan Kebijakan

- Permendikbudristek No. 12 Tahun 2024 — Profil Pelajar Pancasila
- Perdirjen GTK No. 2626/B/HK.04.01/2023 — Kompetensi Guru
- Panduan Pembelajaran dan Asesmen (PPA) Kemdikbudristek 2024–2025
- Kerangka Kurikulum Merdeka — Deep Learning 2025/2026

---

## 🤝 Kontribusi

Lihat [CONTRIBUTING.md](CONTRIBUTING.md) untuk panduan kontribusi.

---

## 📄 Lisensi

[MIT License](LICENSE) © 2025 EduMind AI Team
