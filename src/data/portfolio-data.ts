export interface ExperienceItem {
  id: string;
  num: string;
  title: string;
  role: string;
  period: string;
  badge?: string;
  org: string;
  image?: string;
  isCustomMedia?: boolean;
  summary: string;
  details: string[];
  shots: { src: string; alt: string }[];
  link?: { label: string; url: string };
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-01",
    num: "01",
    title: "Humas Jasa Raharja",
    role: "Pengelolaan Media Sosial & Kehumasan",
    period: "Saat ini",
    badge: "Saat ini",
    org: "PT Jasa Raharja, Kantor Wilayah Bengkulu",
    image: "/assets/img/jasaraharja/ig-reels.webp",
    summary:
      "Mengelola publikasi dan konten media sosial resmi @jasaraharja_bengkulu_. Meliput kegiatan kantor wilayah bersama mitra Kepolisian, Samsat, dan Dinas Perhubungan, memproduksi kampanye kreatif Hari Batik Nasional, serta konten edukasi publik.",
    details: [
      "Memproduksi kampanye fotografi dan desain kreatif resmi Hari Batik Nasional, mengeksplorasi keindahan Batik Besurek khas Bengkulu di situs bersejarah Benteng Marlborough.",
      "Meliput sosialisasi keselamatan transportasi dan Operasi Patuh Nala 2026 bersama jajaran Polda & Ditlantas.",
      "Mendokumentasikan penyerahan santunan kepada ahli waris korban kecelakaan lalu lintas.",
      "Membuat konten edukasi layanan publik: JASFREN, cek sisa plafon rawat jalan, dan etika Zebra Cross.",
      "Meliput kehadiran Samsat Keliling di Car Free Day dan Kapolda Cup Road Race Championship 2026.",
      "Mengelola sorotan profil Instagram resmi (INFO SAMSAT, BMCJR bulanan, dan kegiatan preventif).",
    ],
    shots: [
      { src: "/assets/img/jasaraharja/batik/batik-besurek-01.webp", alt: "Kampanye Hari Batik Nasional - Batik Besurek Bengkulu" },
      { src: "/assets/img/jasaraharja/batik/batik-besurek-03.webp", alt: "Dari tanah Bengkulu, batik Besurek hadir membawa aksara, motif, dan kisah" },
      { src: "/assets/img/jasaraharja/batik/batik-besurek-05.webp", alt: "Batik Besurek adalah ketika tradisi menjelma menjadi karya" },
      { src: "/assets/img/jasaraharja/batik/batik-besurek-06.webp", alt: "Photoshoot Benteng Marlborough Bengkulu - Hari Batik Nasional" },
      { src: "/assets/img/jasaraharja/ig-reels.webp", alt: "Daftar reels Instagram Jasa Raharja Bengkulu" },
      { src: "/assets/img/jasaraharja/ig-profil.webp", alt: "Profil Instagram resmi Jasa Raharja Bengkulu" },
    ],
    link: {
      label: "Buka Instagram @jasaraharja_bengkulu_",
      url: "https://www.instagram.com/jasaraharja_bengkulu_/",
    },
  },
  {
    id: "exp-02",
    num: "02",
    title: "LBJR Pelayanan",
    role: "Langkah Bakti Jasa Raharja",
    period: "Pelayanan Publik",
    org: "Langkah Bakti Jasa Raharja (LBJR)",
    image: "/assets/img/docs/kunjungan-korban-rs.webp",
    summary:
      "Bertanggung jawab melaksanakan dan memastikan seluruh proses pelayanan Jasa Raharja kepada korban kecelakaan lalu lintas dan ahli waris berjalan secara cepat, tepat, transparan, profesional, dan humanis.",
    details: [
      "Penanganan serta verifikasi data korban dan pemeriksaan kelengkapan berkas/dokumen.",
      "Proses penjaminan dan penyelesaian santunan, termasuk survei langsung korban maupun ahli waris.",
      "Monitoring kecepatan dan ketepatan pembayaran santunan tepat sasaran.",
      "Koordinasi erat dengan Kepolisian, rumah sakit, faskes, dan instansi terkait untuk percepatan layanan.",
      "Kunjungan jemput bola kepada korban di rumah sakit maupun kediaman ahli waris.",
      "Edukasi masyarakat mengenai hak dan prosedur pengajuan santunan kecelakaan.",
      "Mendukung kegiatan preventif kecelakaan seperti Mobile Unit Keselamatan Lalu Lintas (MUKL).",
      "Pengelolaan administrasi, input data, pelaporan, dan evaluasi kepuasan berstandar service excellence.",
    ],
    shots: [
      { src: "/assets/img/docs/kunjungan-korban-rs.webp", alt: "Kunjungan petugas Jasa Raharja kepada korban kecelakaan di RS" },
      { src: "/assets/img/docs/penyerahan-santunan.webp", alt: "Pelayanan dan santunan petugas bersama warga" },
      { src: "/assets/img/docs/tim-jasa-raharja-ruang-rapat.webp", alt: "Koordinasi tim Jasa Raharja di ruang pertemuan" },
    ],
  },
  {
    id: "exp-03",
    num: "03",
    title: "Staff Ahli IKP",
    role: "Informasi Komunikasi Publik",
    period: "Mar 2025 s.d. Okt 2025",
    org: "Informasi Komunikasi Publik",
    image: "/assets/img/docs/sambutan-pejabat.webp",
    summary:
      "Meliput kegiatan kepemerintahan, mendampingi agenda dinas kepala daerah, memproduksi press release, dokumentasi audio visual, dan publikasi media sosial.",
    details: [
      "Meliput agenda kepemerintahan daerah di lapangan secara rutin.",
      "Mengikuti dan mendokumentasikan kegiatan Bupati, Wakil Bupati, serta jajaran dinas terkait.",
      "Menyusun press release resmi dan caption informatif untuk publikasi.",
      "Memproduksi dokumentasi fotografi dan videografi kegiatan resmi daerah.",
      "Mengelola unggahan dokumentasi ke kanal media sosial resmi.",
    ],
    shots: [
      { src: "/assets/img/docs/sambutan-pejabat.webp", alt: "Peliputan sambutan pejabat daerah di upacara" },
      { src: "/assets/img/docs/kunjungan-sekolah.webp", alt: "Peliputan kunjungan kepala daerah ke sekolah" },
      { src: "/assets/img/docs/dialog-siswa.webp", alt: "Dokumentasi interaksi bupati dan pelajar" },
    ],
  },
  {
    id: "exp-04",
    num: "04",
    title: "Staff Ahli DPRD",
    role: "Fraksi Demokrat Sejahtera",
    period: "Sep 2024 s.d. Okt 2025",
    org: "DPRD Kabupaten Bengkulu Utara",
    isCustomMedia: true,
    summary:
      "Mendukung fungsi legislasi dan representasi fraksi melalui pembuatan notulensi rapat, penyusunan naskah pandangan umum, dan penyusunan kata akhir fraksi pada rapat paripurna.",
    details: [
      "Menyusun notulen resmi jalannya rapat internal dan pandangan fraksi.",
      "Menyusun draf naskah kata akhir fraksi saat agenda rapat paripurna DPRD.",
      "Mengkoordinasikan administrasi dan materi pendukung kegiatan anggota fraksi.",
    ],
    shots: [],
  },
  {
    id: "exp-05",
    num: "05",
    title: "Magang Diskominfo",
    role: "Staff Informasi Komunikasi Publik",
    period: "Feb 2023 s.d. Jun 2023",
    org: "Diskominfo Kabupaten Ogan Ilir",
    image: "/assets/img/docs/magang-diskominfo-oi.webp",
    summary:
      "Menjalankan magang akademik sebagai staf IKP dengan tanggung jawab peliputan kegiatan daerah, penyusunan press release, dan rekapitulasi data informasi dinas.",
    details: [
      "Meliput aneka kegiatan dinas dan pemerintahan kabupaten di lapangan.",
      "Menulis press release kegiatan untuk portal berita dan publikasi Diskominfo.",
      "Merekapitulasi dan mendokumentasikan data administrasi kantor komunikasi publik.",
    ],
    shots: [
      { src: "/assets/img/docs/magang-diskominfo-oi.webp", alt: "Staf magang Unsri bersama pegawai Diskominfo Ogan Ilir" },
      { src: "/assets/img/docs/id-card-diskominfo-oi.webp", alt: "Kartu identitas magang Diskominfo Ogan Ilir atas nama Farhan Ramadhan" },
    ],
  },
];

export const BATIK_CAMPAIGN_ITEMS = [
  {
    id: "batik-1",
    src: "/assets/img/jasaraharja/batik/batik-besurek-01.webp",
    alt: "Eksplorasi Motif Batik Besurek Bengkulu - Hari Batik Nasional",
    title: "Harmoni Tradisi & Budaya",
    caption: "Motif khas kaligrafi Arab dan Bunga Rafflesia dalam balutan busana adat Bengkulu.",
  },
  {
    id: "batik-2",
    src: "/assets/img/jasaraharja/batik/batik-besurek-02.webp",
    alt: "Sesi Photoshoot Pasangan Busana Adat Batik Besurek Bengkulu",
    title: "Anggun & Berwibawa",
    caption: "Dokumentasi keanggunan busana batik Besurek di area cagar budaya Benteng Marlborough.",
  },
  {
    id: "batik-3",
    src: "/assets/img/jasaraharja/batik/batik-besurek-03.webp",
    alt: "Dari tanah Bengkulu, batik Besurek hadir membawa aksara, motif, dan kisah yang tumbuh bersama zaman",
    title: "Aksara yang Tumbuh Bersama Zaman",
    caption: "Dari tanah Bengkulu, batik Besurek hadir membawa aksara, motif, dan kisah yang tumbuh bersama zaman.",
  },
  {
    id: "batik-4",
    src: "/assets/img/jasaraharja/batik/batik-besurek-04.webp",
    alt: "Dari aksara yang terukir hingga motif yang mengalir, Besurek bercerita tentang Bengkulu yang kaya akan budaya",
    title: "Kisah yang Mengalir",
    caption: "Dari aksara yang terukir hingga motif yang mengalir, Besurek bercerita tentang Bengkulu yang kaya akan budaya.",
  },
  {
    id: "batik-5",
    src: "/assets/img/jasaraharja/batik/batik-besurek-05.webp",
    alt: "Batik Besurek adalah ketika tradisi menjelma menjadi karya, dan budaya menemukan cara untuk tetap hidup",
    title: "Tradisi Menjelma Karya",
    caption: "Batik Besurek adalah ketika tradisi menjelma menjadi karya, dan budaya menemukan cara untuk tetap hidup.",
  },
  {
    id: "batik-6",
    src: "/assets/img/jasaraharja/batik/batik-besurek-06.webp",
    alt: "Batik bukan sekadar motif yang terlukis, tetapi cerita yang diwariskan dari hati ke hati - Benteng Marlborough",
    title: "Cerita dari Hati ke Hati",
    caption: "Batik bukan sekadar motif yang terlukis, tetapi cerita yang diwariskan dari hati ke hati.",
  },
];

export const GALLERY_ITEMS = [
  // Kampanye Batik Besurek Jasa Raharja
  { id: "gb1", cat: "jr", src: "/assets/img/jasaraharja/batik/batik-besurek-01.webp", alt: "Kampanye Hari Batik Nasional - Eksplorasi Motif Batik Besurek Jasa Raharja Bengkulu" },
  { id: "gb2", cat: "jr", src: "/assets/img/jasaraharja/batik/batik-besurek-02.webp", alt: "Photoshoot Busana Batik Besurek di Benteng Marlborough Bengkulu" },
  { id: "gb3", cat: "jr", src: "/assets/img/jasaraharja/batik/batik-besurek-03.webp", alt: "Dari tanah Bengkulu, batik Besurek hadir membawa aksara, motif, dan kisah yang tumbuh bersama zaman" },
  { id: "gb4", cat: "jr", src: "/assets/img/jasaraharja/batik/batik-besurek-04.webp", alt: "Dari aksara yang terukir hingga motif yang mengalir - Batik Besurek Bengkulu" },
  { id: "gb5", cat: "jr", src: "/assets/img/jasaraharja/batik/batik-besurek-05.webp", alt: "Batik Besurek adalah ketika tradisi menjelma menjadi karya - Jasa Raharja Bengkulu" },
  { id: "gb6", cat: "jr", src: "/assets/img/jasaraharja/batik/batik-besurek-06.webp", alt: "Batik bukan sekadar motif yang terlukis, cerita dari hati ke hati di Benteng Marlborough" },

  // Dokumentasi Jasa Raharja lainnya
  { id: "g1", cat: "jr", src: "/assets/img/docs/tim-jasa-raharja.webp", alt: "Foto bersama tim Jasa Raharja berseragam lengkap" },
  { id: "g2", cat: "jr", src: "/assets/img/docs/kunjungan-korban-rs.webp", alt: "Kunjungan petugas Jasa Raharja kepada korban kecelakaan di rumah sakit" },
  { id: "g5", cat: "jr", src: "/assets/img/docs/penyerahan-santunan.webp", alt: "Petugas Jasa Raharja bersama warga dalam kegiatan pelayanan" },
  { id: "g8", cat: "jr", src: "/assets/img/docs/kantor-jasa-raharja.webp", alt: "Foto bersama di lobi kantor Jasa Raharja" },
  { id: "g12", cat: "jr", src: "/assets/img/docs/tim-jasa-raharja-studio.webp", alt: "Sesi foto bersama tim Jasa Raharja" },
  { id: "g15", cat: "jr", src: "/assets/img/docs/tim-jasa-raharja-ruang-rapat.webp", alt: "Tim Jasa Raharja di ruang pertemuan" },

  // Liputan & Pemerintahan
  { id: "g3", cat: "liputan", src: "/assets/img/docs/sambutan-pejabat.webp", alt: "Peliputan sambutan pejabat daerah di sebuah upacara" },
  { id: "g6", cat: "liputan", src: "/assets/img/docs/apel-kantor.webp", alt: "Farhan berseragam merah saat peliputan apel di lingkungan perkantoran" },
  { id: "g7", cat: "liputan", src: "/assets/img/docs/kunjungan-sekolah.webp", alt: "Kunjungan pejabat daerah disambut barisan siswa" },
  { id: "g10", cat: "liputan", src: "/assets/img/docs/dialog-siswa.webp", alt: "Pejabat daerah berdialog interaktif dengan siswa" },
  { id: "g11", cat: "liputan", src: "/assets/img/docs/upacara-pemda.webp", alt: "Upacara bersama jajaran pemerintah daerah" },
  { id: "g13", cat: "liputan", src: "/assets/img/docs/sosialisasi-malam.webp", alt: "Membagikan materi sosialisasi kepada warga pada malam hari" },
  { id: "g14", cat: "liputan", src: "/assets/img/docs/penyerahan-piagam.webp", alt: "Dokumentasi penyerahan piagam di lapangan" },
  { id: "g16", cat: "liputan", src: "/assets/img/docs/jalan-sehat.webp", alt: "Foto bersama di kegiatan jalan sehat daerah" },
  { id: "g18", cat: "liputan", src: "/assets/img/docs/tim-pemda.webp", alt: "Bersama rekan kerja peliputan di halaman kantor" },
  { id: "g19", cat: "liputan", src: "/assets/img/docs/liputan-resepsi.webp", alt: "Bersama tim di acara resepsi adat" },
  { id: "g21", cat: "liputan", src: "/assets/img/docs/apel-pagi.webp", alt: "Apel pagi di halaman gedung pemerintahan" },

  // Kampus & Magang
  { id: "g4", cat: "kampus", src: "/assets/img/docs/magang-diskominfo-oi.webp", alt: "Mahasiswa magang Unsri berjaket kuning bersama pegawai Diskominfo Ogan Ilir" },
  { id: "g9", cat: "kampus", src: "/assets/img/docs/wisuda-unsri.webp", alt: "Prosesi wisuda Universitas Sriwijaya" },
  { id: "g17", cat: "kampus", src: "/assets/img/docs/ukm-basket.webp", alt: "Farhan mengenakan jersey basket FISIP Universitas Sriwijaya" },
  { id: "g20", cat: "kampus", src: "/assets/img/docs/id-card-diskominfo-oi.webp", alt: "Kartu identitas magang Diskominfo Kabupaten Ogan Ilir" },
];
