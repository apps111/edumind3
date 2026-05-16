# Panduan Kontribusi — EduMind AI

Terima kasih telah tertarik untuk berkontribusi! Berikut panduan singkat agar proses kolaborasi berjalan lancar.

## Cara Berkontribusi

### 1. Fork & Clone
```bash
git clone https://github.com/USERNAME/edumind-ai.git
cd edumind-ai
npm install
```

### 2. Buat Branch Baru
Gunakan konvensi nama branch berikut:
- `feat/nama-fitur` — fitur baru
- `fix/nama-bug` — perbaikan bug
- `docs/nama-perubahan` — perubahan dokumentasi
- `refactor/nama-komponen` — refaktor tanpa perubahan fungsional

```bash
git checkout -b feat/tambah-mapel-baru
```

### 3. Kembangkan & Test
```bash
npm run dev         # jalankan dev server
npm run type-check  # pastikan tidak ada error TypeScript
npm run lint        # pastikan kode bersih
npm run build       # pastikan build berhasil
```

### 4. Commit dengan Pesan Bermakna
Format: `tipe(scope): deskripsi singkat`

```
feat(levels): tambah mata pelajaran Bahasa Arab SMK
fix(chat): perbaiki scroll otomatis setelah balasan AI
docs(readme): perbarui langkah instalasi
```

### 5. Buat Pull Request
- Target branch: `main`
- Sertakan deskripsi perubahan yang jelas
- Lampirkan screenshot jika ada perubahan UI

---

## Panduan Kode

### TypeScript
- Selalu definisikan tipe eksplisit untuk props komponen
- Hindari `any` — gunakan tipe spesifik atau `unknown`
- Gunakan `interface` untuk bentuk data, `type` untuk union/alias

### Komponen React
- Satu komponen per file
- Nama file = nama komponen (PascalCase)
- Props diletakkan di bagian atas file sebagai `interface`
- Logika kompleks dipisahkan ke custom hook di `src/hooks/`

### Menambah Mata Pelajaran
Edit `src/constants/levels.ts`:
```typescript
{ id: "mapelbaru", label: "Nama Mapel", icon: "🆕", prompt: "Deskripsi peran guru dan konteks pembelajaran..." }
```

### Menambah Tool Baru
1. Tambahkan entri di `src/constants/tools.ts`
2. Tambahkan system prompt di `src/constants/prompts.ts` dalam objek `prompts`

---

## Pelaporan Bug

Gunakan tab **Issues** di GitHub. Sertakan:
- Langkah reproduksi
- Perilaku yang diharapkan vs yang terjadi
- Screenshot (jika relevan)
- Browser dan versi OS
