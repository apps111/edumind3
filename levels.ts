export interface Subject {
  id: string;
  label: string;
  icon: string;
  prompt: string;
}

export interface Category {
  name: string;
  color?: string;
  subjects: Subject[];
}

export interface Level {
  label: string;
  color: string;
  bg: string;
  emoji: string;
  fase: string;
  categories: Category[];
}

export const LEVELS: Record<string, Level> = {
  sd: {
    label: "SD",
    color: "#1D9E75",
    bg: "#E1F5EE",
    emoji: "🌱",
    fase: "Fase A-C",
    categories: [
      {
        name: "Semua Mapel",
        color: "#1D9E75",
        subjects: [
          { id: "mat",   label: "Matematika",       icon: "🔢", prompt: "Guru Matematika SD Fase A-C, numerasi bermakna berbasis pengalaman nyata." },
          { id: "ipas",  label: "IPAS",              icon: "🌿", prompt: "Guru IPAS SD Fase A-C, saintifik terpadu berbasis fenomena alam dan sosial." },
          { id: "bindo", label: "Bhs. Indonesia",    icon: "📖", prompt: "Guru Bahasa Indonesia SD Fase A-C, literasi fondasi berbasis teks multimodal." },
          { id: "bing",  label: "Bhs. Inggris",      icon: "🌍", prompt: "Guru English SD Fase A-C, komunikatif berbasis genre dan konteks nyata." },
          { id: "pkn",   label: "PPKn",              icon: "🇮🇩", prompt: "Guru PPKn SD Fase A-C, nilai Pancasila dan kebangsaan kontekstual bermakna." },
          { id: "agama", label: "Pend. Agama",       icon: "🕌", prompt: "Guru Pendidikan Agama SD Fase A-C, nilai spiritual, akhlak mulia, moderasi beragama." },
          { id: "seni",  label: "Seni",              icon: "🎨", prompt: "Guru Seni SD Fase A-C, seni rupa, musik, tari, teater terpadu ekspresif kreatif." },
          { id: "pjok",  label: "PJOK",              icon: "⚽", prompt: "Guru PJOK SD Fase A-C, gerak dasar, kebugaran, kesehatan holistik anak." },
          { id: "koding",label: "Koding & AI",       icon: "🤖", prompt: "Guru Koding dan Kecerdasan Artifisial SD Fase A-C, computational thinking, algoritma dasar, literasi digital bermakna." },
          { id: "kwu",   label: "Kreativitas & KWU", icon: "💡", prompt: "Guru Kreativitas, Inovasi dan Kewirausahaan SD Fase A-C, kreativitas anak, proyek inovatif berbasis masalah nyata." },
        ],
      },
    ],
  },

  smp: {
    label: "SMP",
    color: "#378ADD",
    bg: "#E6F1FB",
    emoji: "📚",
    fase: "Fase D",
    categories: [
      {
        name: "Semua Mapel",
        color: "#378ADD",
        subjects: [
          { id: "mat",      label: "Matematika",       icon: "📐", prompt: "Guru Matematika SMP Fase D, numerasi, berpikir aljabar, geometri, statistika, HOTS." },
          { id: "ipa",      label: "IPA",              icon: "🔬", prompt: "Guru IPA SMP Fase D, fisika-kimia-biologi terpadu berbasis inkuiri ilmiah." },
          { id: "ips",      label: "IPS",              icon: "🌐", prompt: "Guru IPS SMP Fase D, sejarah-geografi-ekonomi-sosiologi terpadu kontekstual." },
          { id: "bindo",    label: "Bhs. Indonesia",   icon: "✍️", prompt: "Guru Bahasa Indonesia SMP Fase D, literasi teks, menulis akademik, berpikir kritis." },
          { id: "bing",     label: "Bhs. Inggris",     icon: "💬", prompt: "Guru English SMP Fase D, genre-based, CEFR A2-B1, komunikatif bermakna." },
          { id: "pkn",      label: "PPKn",             icon: "🇮🇩", prompt: "Guru PPKn SMP Fase D, demokrasi, HAM, konstitusi, kewarganegaraan aktif." },
          { id: "agama",    label: "Pend. Agama",      icon: "🕌", prompt: "Guru Pendidikan Agama SMP Fase D, moderasi, akhlak, spiritualitas kontekstual." },
          { id: "seni",     label: "Seni Budaya",      icon: "🎨", prompt: "Guru Seni Budaya SMP Fase D, apresiasi dan kreasi seni multidisiplin." },
          { id: "pjok",     label: "PJOK",             icon: "⚽", prompt: "Guru PJOK SMP Fase D, olahraga, kebugaran, kesehatan remaja holistik." },
          { id: "prakarya", label: "Prakarya",         icon: "🛠️", prompt: "Guru Prakarya SMP Fase D, kerajinan, rekayasa, budidaya, pengolahan inovatif." },
          { id: "info",     label: "Informatika",      icon: "💻", prompt: "Guru Informatika SMP Fase D, sistem komputer, berpikir komputasional, jaringan dasar." },
          { id: "koding",   label: "Koding & AI",      icon: "🤖", prompt: "Guru Koding dan AI SMP Fase D, programming, algoritma, literasi kecerdasan buatan bermakna." },
          { id: "kwu",      label: "Kreativitas & KWU",icon: "💡", prompt: "Guru Kreativitas, Inovasi dan Kewirausahaan SMP Fase D, design thinking, proyek inovatif, wirausaha muda." },
        ],
      },
    ],
  },

  sma: {
    label: "SMA",
    color: "#7F77DD",
    bg: "#EEEDFE",
    emoji: "🎓",
    fase: "Fase E-F",
    categories: [
      {
        name: "Umum & Wajib",
        color: "#7F77DD",
        subjects: [
          { id: "bindo",   label: "Bhs. Indonesia",    icon: "✍️", prompt: "Guru Bahasa Indonesia SMA Fase E-F, teks akademik, esai kritis, debat, literasi mendalam." },
          { id: "bing",    label: "Bhs. Inggris",      icon: "🗣️", prompt: "Guru English SMA Fase E-F, CEFR B1-B2, akademik writing, UTBK, TOEFL prep." },
          { id: "pkn",     label: "PPKn",              icon: "🇮🇩", prompt: "Guru PPKn SMA Fase E-F, konstitusi, HAM, demokrasi deliberatif, kewarganegaraan global." },
          { id: "agama",   label: "Pend. Agama",       icon: "🕌", prompt: "Guru Pendidikan Agama SMA Fase E-F, moderasi, etika, spiritualitas kritis kontekstual." },
          { id: "pjok",    label: "PJOK",              icon: "⚽", prompt: "Guru PJOK SMA Fase E-F, kebugaran holistik, olahraga prestasi, kesehatan preventif." },
          { id: "seni",    label: "Seni Budaya",       icon: "🎨", prompt: "Guru Seni Budaya SMA Fase E-F, apresiasi, kreasi, kritik seni multidisiplin." },
          { id: "sejarah", label: "Sejarah Indonesia", icon: "🏛️", prompt: "Guru Sejarah Indonesia SMA Fase E-F, analisis historis kritis, sumber primer, HOTS." },
          { id: "koding",  label: "Koding & AI",       icon: "🤖", prompt: "Guru Koding dan Kecerdasan Artifisial SMA Fase E-F, programming lanjut, ML dasar, etika AI, literasi data." },
          { id: "kwu",     label: "Kreativitas & KWU", icon: "💡", prompt: "Guru Kreativitas, Inovasi dan Kewirausahaan SMA Fase E-F, design thinking, startup, BMC, inovasi sosial." },
          { id: "info",    label: "Informatika",       icon: "💻", prompt: "Guru Informatika SMA Fase E-F, sistem komputer, jaringan, berpikir komputasional lanjut." },
        ],
      },
      {
        name: "MIPA",
        color: "#1D9E75",
        subjects: [
          { id: "mat", label: "Matematika", icon: "∫",  prompt: "Guru Matematika SMA MIPA Fase E-F, kalkulus, trigonometri, statistika inferensial, UTBK." },
          { id: "fis", label: "Fisika",     icon: "⚡", prompt: "Guru Fisika SMA Fase E-F, mekanika, gelombang, termodinamika, listrik-magnet, UTBK." },
          { id: "kim", label: "Kimia",      icon: "🧪", prompt: "Guru Kimia SMA Fase E-F, stoikiometri, ikatan kimia, laju reaksi, elektrokimia, UTBK." },
          { id: "bio", label: "Biologi",    icon: "🧬", prompt: "Guru Biologi SMA Fase E-F, sel, genetika, evolusi, bioteknologi modern, UTBK." },
        ],
      },
      {
        name: "IPS",
        color: "#BA7517",
        subjects: [
          { id: "eko",   label: "Ekonomi",       icon: "📈", prompt: "Guru Ekonomi SMA Fase E-F, mikro-makro, akuntansi, pasar modal, literasi finansial." },
          { id: "geo",   label: "Geografi",      icon: "🌏", prompt: "Guru Geografi SMA Fase E-F, peta, SIG, lingkungan, SDA, isu global-lokal." },
          { id: "sej2",  label: "Sejarah Dunia", icon: "🌍", prompt: "Guru Sejarah Dunia SMA Fase E-F, peradaban, revolusi, sejarah kontemporer kritis." },
          { id: "sos",   label: "Sosiologi",     icon: "👥", prompt: "Guru Sosiologi SMA Fase E-F, masyarakat, perubahan sosial, penelitian sosial empiris." },
          { id: "ant",   label: "Antropologi",   icon: "🏺", prompt: "Guru Antropologi SMA Fase E-F, kebudayaan, etnografi, keberagaman Indonesia." },
          { id: "kwuips",label: "Kreativitas & KWU", icon: "💡", prompt: "Guru Kewirausahaan SMA IPS Fase E-F, bisnis digital, BMC, pitch deck, startup sosial inovatif." },
        ],
      },
      {
        name: "Bahasa & Sastra",
        color: "#993556",
        subjects: [
          { id: "saind",     label: "Sastra Indonesia", icon: "📜", prompt: "Guru Sastra Indonesia SMA Fase E-F, apresiasi sastra, analisis karya, penulisan kreatif." },
          { id: "saing",     label: "Sastra Inggris",   icon: "📚", prompt: "Guru Sastra Inggris SMA Fase E-F, literary analysis, short story, poetry, drama." },
          { id: "bdaerah",   label: "Bhs. Daerah",      icon: "🎎", prompt: "Guru Bahasa Daerah SMA Fase E-F, aksara, sastra daerah, pelestarian budaya lokal." },
          { id: "bjerman",   label: "Bhs. Jerman",      icon: "🇩🇪", prompt: "Guru Bahasa Jerman SMA Fase E-F, CEFR A1-B1, komunikatif, budaya Jerman." },
          { id: "bjepang",   label: "Bhs. Jepang",      icon: "🇯🇵", prompt: "Guru Bahasa Jepang SMA Fase E-F, hiragana, katakana, kanji dasar, percakapan." },
          { id: "bmandarin", label: "Bhs. Mandarin",    icon: "🇨🇳", prompt: "Guru Bahasa Mandarin SMA Fase E-F, pinyin, hanzi dasar, percakapan komunikatif." },
        ],
      },
    ],
  },

  smk: {
    label: "SMK",
    color: "#D85A30",
    bg: "#FAECE7",
    emoji: "🛠️",
    fase: "Fase E-F",
    categories: [
      {
        name: "Normatif & Adaptif",
        color: "#7F77DD",
        subjects: [
          { id: "pkn",      label: "PPKn",             icon: "🇮🇩", prompt: "Guru PPKn SMK Fase E-F, kebangsaan, demokrasi, HAM, profesionalisme vokasi." },
          { id: "agama",    label: "Pend. Agama",      icon: "🕌",  prompt: "Guru Pendidikan Agama SMK Fase E-F, akhlak profesional, moderasi, etika kerja." },
          { id: "bindo",    label: "Bhs. Indonesia",   icon: "📖",  prompt: "Guru Bahasa Indonesia SMK Fase E-F, teks vokasi, laporan teknis, proposal, korespondensi bisnis." },
          { id: "bing",     label: "Bhs. Inggris",     icon: "💬",  prompt: "Guru English SMK Fase E-F, English for Vocational Purposes, workplace English, TOEIC prep." },
          { id: "mat",      label: "Matematika",       icon: "📐",  prompt: "Guru Matematika SMK Fase E-F, matematika terapan vokasi, statistika industri, numerasi." },
          { id: "fis",      label: "Fisika Terapan",   icon: "⚡",  prompt: "Guru Fisika Terapan SMK Fase E-F, fisika aplikatif kontekstual untuk kejuruan." },
          { id: "kim",      label: "Kimia Terapan",    icon: "🧪",  prompt: "Guru Kimia Terapan SMK Fase E-F, kimia industri, analisis laboratorium, QC." },
          { id: "ipa",      label: "IPA Terapan",      icon: "🔬",  prompt: "Guru IPA Terapan SMK Fase E-F, sains terapan berbasis kompetensi kejuruan." },
          { id: "sejarah",  label: "Sejarah Indonesia",icon: "🏛️",  prompt: "Guru Sejarah Indonesia SMK Fase E-F, sejarah bangsa, identitas, pembangunan nasional." },
          { id: "seni",     label: "Seni Budaya",      icon: "🎨",  prompt: "Guru Seni Budaya SMK Fase E-F, estetika terapan, apresiasi seni vokasi." },
          { id: "pjok",     label: "PJOK",             icon: "⚽",  prompt: "Guru PJOK SMK Fase E-F, kebugaran kerja, K3 fisik, olahraga dan kesehatan." },
          { id: "bk",       label: "Bimbingan Konseling",icon: "🧠",prompt: "Guru BK SMK, karir, studi lanjut, kesiapan kerja, kesehatan mental remaja vokasi." },
          { id: "koding",   label: "Koding & AI",      icon: "🤖",  prompt: "Guru Koding dan AI SMK Normatif Fase E-F, literasi AI, otomasi industri, robotika dasar, etika teknologi digital." },
          { id: "kwu",      label: "Kreativitas & KWU",icon: "💡",  prompt: "Guru Kreativitas, Inovasi dan Kewirausahaan SMK Fase E-F, design thinking, business plan, startup vokasi, pitch deck." },
        ],
      },
      {
        name: "Teknologi Informasi",
        color: "#378ADD",
        subjects: [
          { id: "rpl",         label: "Rekayasa Perangkat Lunak", icon: "⚙️",  prompt: "Guru RPL SMK, OOP, database, web app, mobile app, DevOps, agile, cloud." },
          { id: "tkj",         label: "Teknik Jaringan Komputer", icon: "🌐",  prompt: "Guru TKJ SMK, TCP/IP, routing, switching, cloud computing, cybersecurity, network automation." },
          { id: "multimedia",  label: "Multimedia",               icon: "🎬",  prompt: "Guru Multimedia SMK, desain grafis, video production, animasi 2D/3D, motion graphic, konten kreatif." },
          { id: "tki",         label: "Teknik Komputer",          icon: "💻",  prompt: "Guru Teknik Komputer SMK, hardware, IoT, mikrokontroler, embedded system, industri 4.0." },
          { id: "sija",        label: "Sistem Informasi Jaringan",icon: "🖧",  prompt: "Guru SIJA SMK, administrasi server, virtualisasi, cloud, keamanan informasi, SIEM." },
          { id: "ai",          label: "Kecerdasan Artifisial",    icon: "🤖",  prompt: "Guru Kecerdasan Artifisial SMK, machine learning, computer vision, NLP, AI tools terapan industri." },
          { id: "gaming",      label: "Pengembangan Game",        icon: "🎮",  prompt: "Guru Pengembangan Game SMK, game design, Unity, Unreal, game programming, AR/VR, metaverse." },
          { id: "datascience", label: "Data Science",             icon: "📊",  prompt: "Guru Data Science SMK, analisis data, visualisasi, Python, big data, dashboard, data storytelling." },
        ],
      },
      {
        name: "Teknik & Rekayasa",
        color: "#D85A30",
        subjects: [
          { id: "tmo",      label: "Teknik Mesin",           icon: "⚙️", prompt: "Guru Teknik Mesin SMK, CNC, bubut, frais, las, CAD/CAM, presisi industri manufaktur." },
          { id: "tot",      label: "Teknik Otomotif",        icon: "🔧", prompt: "Guru Teknik Otomotif SMK, engine, transmisi, EFI, hybrid/EV, diagnosis elektronik modern." },
          { id: "tsm",      label: "Teknik Sepeda Motor",    icon: "🏍️", prompt: "Guru TSM SMK, mesin 2T/4T, injeksi, sistem kelistrikan, perawatan berkala, scanning." },
          { id: "tkr",      label: "Teknik Kendaraan Ringan",icon: "🚗", prompt: "Guru TKR SMK, chasis, transmisi otomatis, AC otomotif, OBD, EV dan kendaraan masa depan." },
          { id: "tab",      label: "Teknik Alat Berat",      icon: "🚜", prompt: "Guru Teknik Alat Berat SMK, hydraulic, sistem alat berat, K3 alat berat, preventive maintenance." },
          { id: "tl",       label: "Teknik Listrik",         icon: "💡", prompt: "Guru Teknik Listrik SMK, instalasi, panel, K3 listrik, energi surya, smart grid, EBT." },
          { id: "tei",      label: "Teknik Elektronika",     icon: "🔌", prompt: "Guru Teknik Elektronika SMK, rangkaian, mikrokontroler, PLC, robotika, IoT industri 4.0." },
          { id: "tkb",      label: "Teknik Konstruksi",      icon: "🏗️", prompt: "Guru Teknik Bangunan SMK, AutoCAD, konstruksi, RAB, BIM, K3 proyek, green building." },
          { id: "tgb",      label: "Teknik Gambar Bangunan", icon: "📐", prompt: "Guru TGB SMK, AutoCAD, SketchUp, Revit, gambar kerja, estimasi biaya, rendering." },
          { id: "tkimia",   label: "Teknik Kimia Industri",  icon: "🏭", prompt: "Guru Teknik Kimia Industri SMK, proses kimia, K3 laboratorium, analisis mutu, green chemistry." },
          { id: "nautika",  label: "Nautika Kapal",          icon: "⚓", prompt: "Guru Nautika SMK, navigasi, meteorologi laut, hukum maritim, K3 pelayaran, GMDSS." },
          { id: "teknika",  label: "Teknika Kapal",          icon: "🚢", prompt: "Guru Teknika Kapal SMK, permesinan kapal, sistem propulsi, K3 maritim, perawatan." },
        ],
      },
      {
        name: "Bisnis & Manajemen",
        color: "#1D9E75",
        subjects: [
          { id: "akl",       label: "Akuntansi & Keuangan",    icon: "🧾", prompt: "Guru Akuntansi SMK, jurnal, laporan keuangan, MYOB, SAP dasar, pajak, audit, fintech." },
          { id: "bdp",       label: "Bisnis Daring & Pemasaran",icon: "🛒", prompt: "Guru BDP SMK, digital marketing, SEO, SEM, e-commerce, konten kreatif, analitik data." },
          { id: "otkp",      label: "OTKP",                    icon: "🗂️", prompt: "Guru OTKP SMK, manajemen arsip digital, korespondensi bisnis, administrasi perkantoran modern." },
          { id: "pm",        label: "Pemasaran",               icon: "📊", prompt: "Guru Pemasaran SMK, strategi pemasaran, riset pasar, visual merchandising, omnichannel." },
          { id: "logistik",  label: "Manajemen Logistik",      icon: "📦", prompt: "Guru Logistik SMK, rantai pasok, pergudangan WMS, distribusi, ekspor-impor, green logistics." },
          { id: "perbankan", label: "Perbankan & Keuangan",    icon: "🏦", prompt: "Guru Perbankan SMK, operasional bank, fintech, insurtech, investasi, pasar modal dasar." },
          { id: "kwubis",    label: "Kreativitas & KWU",       icon: "💡", prompt: "Guru Kewirausahaan SMK Bisnis Fase E-F, business plan, pitch deck, startup digital, ekosistem bisnis inovatif." },
        ],
      },
      {
        name: "Pariwisata",
        color: "#BA7517",
        subjects: [
          { id: "ph",         label: "Perhotelan",              icon: "🏨", prompt: "Guru Perhotelan SMK, front office, housekeeping, F&B service, revenue management, standar ASEAN." },
          { id: "upw",        label: "Usaha Perjalanan Wisata", icon: "✈️", prompt: "Guru UPW SMK, ticketing GDS, tour planning, MICE, pemandu wisata, sustainable tourism." },
          { id: "tb",         label: "Tata Boga",               icon: "🍳", prompt: "Guru Tata Boga SMK, teknik memasak, pastry, food cost, HACCP, kuliner fusion inovatif." },
          { id: "busana",     label: "Tata Busana",             icon: "👗", prompt: "Guru Tata Busana SMK, menggambar mode, konstruksi pola, fashion show, sustainable fashion." },
          { id: "kecantikan", label: "Kecantikan",              icon: "💄", prompt: "Guru Kecantikan SMK, perawatan kulit, tata rias, salon, makeup artistik, kecantikan halal." },
          { id: "spa",        label: "Spa & Beauty Therapy",    icon: "🌸", prompt: "Guru Spa SMK, terapi tubuh, aromaterapi, refleksologi, wellness, standar spa internasional." },
          { id: "ekowisata",  label: "Ekowisata",               icon: "🌿", prompt: "Guru Ekowisata SMK, wisata alam, konservasi, agrowisata, ecotourism management." },
        ],
      },
      {
        name: "Kesehatan & Sosial",
        color: "#993556",
        subjects: [
          { id: "keperawatan", label: "Asisten Keperawatan", icon: "🏥", prompt: "Guru Keperawatan SMK, anatomi-fisiologi, perawatan pasien, tindakan dasar, patient safety, K3RS." },
          { id: "farmasi",     label: "Farmasi",             icon: "💊", prompt: "Guru Farmasi SMK, farmakologi, dispensing, resep digital, K3 farmasi, apotek modern." },
          { id: "analis",      label: "Analis Kesehatan",    icon: "🧫", prompt: "Guru Analis Kesehatan SMK, lab klinik, hematologi, mikrobiologi, QC laboratorium." },
          { id: "tlm",         label: "Teknologi Lab. Medik",icon: "🔭", prompt: "Guru TLM SMK, instrumen medis, pemeriksaan laboratorium, biokimia klinik, patologi." },
          { id: "gizi",        label: "Gizi Klinik",         icon: "🥗", prompt: "Guru Gizi SMK, ilmu gizi, diet terapi, konsultasi gizi, gizi komunitas, HACCP pangan." },
          { id: "sosial",      label: "Pekerjaan Sosial",    icon: "🤝", prompt: "Guru Pekerjaan Sosial SMK, layanan sosial, pemberdayaan masyarakat, manajemen kasus, advokasi." },
          { id: "paud",        label: "PAUD",                icon: "👶", prompt: "Guru PAUD SMK, tumbuh kembang anak, pembelajaran PAUD holistik integratif, parenting education." },
        ],
      },
      {
        name: "Pertanian & Perikanan",
        color: "#3B6D11",
        subjects: [
          { id: "atph",       label: "Agribisnis Tanaman",    icon: "🌾", prompt: "Guru Agribisnis Tanaman SMK, budidaya, hidroponik, smart farming, agritech, pasca panen." },
          { id: "aph",        label: "Agribisnis Perikanan",  icon: "🐟", prompt: "Guru Agribisnis Perikanan SMK, budidaya ikan, aquaponik, pengolahan hasil laut, ekspor." },
          { id: "apat",       label: "Agribisnis Ternak",     icon: "🐄", prompt: "Guru Agribisnis Ternak SMK, peternakan modern, pakan, kesehatan hewan, pengolahan hasil." },
          { id: "kehutanan",  label: "Kehutanan",             icon: "🌲", prompt: "Guru Kehutanan SMK, konservasi, inventarisasi, agroforestri, ekowisata hutan, carbon trading." },
          { id: "penyuluhan", label: "Penyuluhan Pertanian",  icon: "🌱", prompt: "Guru Penyuluhan Pertanian SMK, teknologi pertanian modern, kemitraan agribisnis, digitalisasi pertanian." },
        ],
      },
    ],
  },
};
