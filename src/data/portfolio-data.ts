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
  shots: { src: string; alt: string; tag?: string }[];
  link?: { label: string; url: string };
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-01",
    num: "01",
    title: "Humas & Kreator Visual",
    role: "Fotografi, Video Editing & Media Sosial",
    period: "Saat ini",
    badge: "Active Role",
    org: "PT Jasa Raharja, Kantor Wilayah Bengkulu",
    image: "/assets/img/jasaraharja/ig-reels.webp",
    summary:
      "Memimpin produksi konten visual resmi @jasaraharja_bengkulu_: mulai dari photoshoot kampanye Hari Batik Nasional, video editing Reels bertempo dinamis, peliputan lapangan bersama Kepolisian & Samsat, hingga color grading materi publikasi BUMN.",
    details: [
      "Mengonsep dan mengeksekusi sesi photoshoot editorial Hari Batik Nasional di Benteng Marlborough, mengangkat keagungan Batik Besurek Bengkulu.",
      "Memproduksi dan mengedit konten video vertikal (Instagram Reels): pengambilan footage lapangan, pacing cut dinamis, subtitle animasi, dan sound design.",
      "Meliput secara visual kegiatan Operasi Patuh Nala 2026 dan sosialisasi keselamatan lalu lintas bersama Ditlantas Polda Bengkulu.",
      "Mendokumentasikan penyerahan santunan cepat kepada korban kecelakaan lalu lintas dengan pendekatan fotojurnalistik yang empatik dan profesional.",
      "Merancang infografis edukasi layanan publik (JASFREN, cek sisa plafon rumah sakit, kampanye Zebra Cross).",
      "Kurasi dan pengelolaan visual grid feed serta highlight Instagram resmi instansi.",
    ],
    shots: [
      { src: "/assets/img/jasaraharja/batik/batik-besurek-01.webp", alt: "Kampanye Hari Batik Nasional - Batik Besurek Bengkulu", tag: "Photoshoot Budaya" },
      { src: "/assets/img/jasaraharja/batik/batik-besurek-03.webp", alt: "Dari tanah Bengkulu, batik Besurek hadir membawa aksara, motif, dan kisah", tag: "Editorial Portrait" },
      { src: "/assets/img/jasaraharja/batik/batik-besurek-05.webp", alt: "Batik Besurek adalah ketika tradisi menjelma menjadi karya", tag: "Fashion Concept" },
      { src: "/assets/img/jasaraharja/batik/batik-besurek-06.webp", alt: "Photoshoot Benteng Marlborough Bengkulu - Hari Batik Nasional", tag: "Heritage Shot" },
      { src: "/assets/img/jasaraharja/ig-reels.webp", alt: "Daftar reels Instagram Jasa Raharja Bengkulu", tag: "Video Reels 9:16" },
      { src: "/assets/img/jasaraharja/ig-profil.webp", alt: "Profil Instagram resmi Jasa Raharja Bengkulu", tag: "Media Feed" },
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
    role: "Dokumentasi Layanan & Verifikasi",
    period: "Pelayanan Publik",
    org: "Langkah Bakti Jasa Raharja (LBJR)",
    image: "/assets/img/docs/kunjungan-korban-rs.webp",
    summary:
      "Bertanggung jawab memastikan seluruh proses pelayanan Jasa Raharja kepada korban kecelakaan lalu lintas dan ahli waris berjalan secara cepat, tepat, transparan, profesional, dan humanis, didukung dokumentasi lapangan yang tertata.",
    details: [
      "Penanganan serta verifikasi data korban dan pemeriksaan kelengkapan berkas/dokumen.",
      "Proses penjaminan dan penyelesaian santunan, termasuk survei langsung korban maupun ahli waris.",
      "Monitoring kecepatan dan ketepatan pembayaran santunan tepat sasaran.",
      "Dokumentasi foto kunjungan jemput bola korban di rumah sakit dan kediaman ahli waris.",
      "Koordinasi erat dengan Kepolisian, rumah sakit, faskes, dan instansi terkait untuk percepatan layanan.",
      "Mendukung kegiatan preventif kecelakaan seperti Mobile Unit Keselamatan Lalu Lintas (MUKL).",
      "Pengelolaan administrasi, input data, pelaporan, dan evaluasi kepuasan berstandar service excellence.",
    ],
    shots: [
      { src: "/assets/img/docs/kunjungan-korban-rs.webp", alt: "Kunjungan petugas Jasa Raharja kepada korban kecelakaan di RS", tag: "Human Interest" },
      { src: "/assets/img/docs/penyerahan-santunan.webp", alt: "Pelayanan dan santunan petugas bersama warga", tag: "Pelayanan Lapangan" },
      { src: "/assets/img/docs/tim-jasa-raharja-ruang-rapat.webp", alt: "Koordinasi tim Jasa Raharja di ruang pertemuan", tag: "Internal Meeting" },
    ],
  },
  {
    id: "exp-03",
    num: "03",
    title: "Fotografer & Peliputan IKP",
    role: "Dokumentasi Audio Visual & Press Release",
    period: "Mar 2025 s.d. Okt 2025",
    org: "Informasi Komunikasi Publik",
    image: "/assets/img/docs/sambutan-pejabat.webp",
    summary:
      "Bertindak sebagai fotografer dan videografer lapangan yang meliput agenda kepemerintahan daerah, mendampingi kegiatan pimpinan daerah, serta memproduksi materi foto berita dan press release resmi.",
    details: [
      "Mengambil foto dan video liputan agenda Bupati, Wakil Bupati, dan jajaran dinas di berbagai lokasi.",
      "Mengatur framing, eksposur, dan timing pengambilan momen penting upacara serta forum resmi dinas.",
      "Melakukan kurasi foto cepat (*fast culling & edit*) untuk kebutuhan rilis berita hari yang sama.",
      "Menyusun naskah press release dan caption informatif untuk portal berita dan media sosial resmi.",
      "Memproduksi dokumentasi fotografi dan videografi kegiatan resmi daerah.",
    ],
    shots: [
      { src: "/assets/img/docs/sambutan-pejabat.webp", alt: "Peliputan sambutan pejabat daerah di upacara", tag: "Event Protokoler" },
      { src: "/assets/img/docs/kunjungan-sekolah.webp", alt: "Peliputan kunjungan kepala daerah ke sekolah", tag: "Liputan Lapangan" },
      { src: "/assets/img/docs/dialog-siswa.webp", alt: "Dokumentasi interaksi bupati dan pelajar", tag: "Human Interest" },
    ],
  },
  {
    id: "exp-04",
    num: "04",
    title: "Staff Ahli DPRD",
    role: "Dokumentasi & Riset Kebijakan Fraksi",
    period: "Sep 2024 s.d. Okt 2025",
    org: "DPRD Kabupaten Bengkulu Utara",
    isCustomMedia: true,
    summary:
      "Mendukung fungsi legislasi dan representasi fraksi melalui pembuatan notulensi rapat, penyusunan naskah pandangan umum, dan penyusunan kata akhir fraksi pada rapat paripurna.",
    details: [
      "Menyusun notulen resmi jalannya rapat internal dan pandangan fraksi.",
      "Menyusun draf naskah kata akhir fraksi saat agenda rapat paripurna DPRD.",
      "Mengkoordinasikan administrasi dan materi pendukung kegiatan anggota fraksi.",
      "Mendokumentasikan arsip kegiatan rapat dan kunjungan kerja fraksi.",
    ],
    shots: [],
  },
  {
    id: "exp-05",
    num: "05",
    title: "Dokumentasi & Magang IKP",
    role: "Staf Informasi Komunikasi Publik",
    period: "Feb 2023 s.d. Jun 2023",
    org: "Diskominfo Kabupaten Ogan Ilir",
    image: "/assets/img/docs/magang-diskominfo-oi.webp",
    summary:
      "Menjalankan magang akademik sebagai staf IKP dengan tanggung jawab peliputan foto lapangan, penulisan siaran pers, dan pengelolaan data publikasi media komunikasi daerah.",
    details: [
      "Meliput aneka kegiatan dinas dan pemerintahan kabupaten di lapangan dengan kamera DSLR.",
      "Menulis press release kegiatan untuk portal berita dan publikasi Diskominfo.",
      "Melakukan editing foto dasar untuk seleksi materi terbitan media cetak dan web dinas.",
      "Merekapitulasi dan mendokumentasikan data administrasi kantor komunikasi publik.",
    ],
    shots: [
      { src: "/assets/img/docs/magang-diskominfo-oi.webp", alt: "Staf magang Unsri bersama pegawai Diskominfo Ogan Ilir", tag: "Tim Lapangan" },
      { src: "/assets/img/docs/id-card-diskominfo-oi.webp", alt: "Kartu identitas magang Diskominfo Ogan Ilir atas nama Farhan Ramadhan", tag: "Arsip Magang" },
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
    lens: "50mm f/1.8",
    iso: "ISO 100",
    ratio: "3:4 Editorial",
    location: "Benteng Marlborough",
  },
  {
    id: "batik-2",
    src: "/assets/img/jasaraharja/batik/batik-besurek-02.webp",
    alt: "Sesi Photoshoot Pasangan Busana Adat Batik Besurek Bengkulu",
    title: "Anggun & Berwibawa",
    caption: "Dokumentasi keanggunan busana batik Besurek di area cagar budaya Benteng Marlborough.",
    lens: "85mm f/2.0",
    iso: "ISO 100",
    ratio: "3:4 Portrait",
    location: "Pelataran Benteng",
  },
  {
    id: "batik-3",
    src: "/assets/img/jasaraharja/batik/batik-besurek-03.webp",
    alt: "Dari tanah Bengkulu, batik Besurek hadir membawa aksara, motif, dan kisah yang tumbuh bersama zaman",
    title: "Aksara yang Tumbuh Bersama Zaman",
    caption: "Dari tanah Bengkulu, batik Besurek hadir membawa aksara, motif, dan kisah yang tumbuh bersama zaman.",
    lens: "35mm f/2.2",
    iso: "ISO 200",
    ratio: "3:4 Cultural",
    location: "Benteng Marlborough",
  },
  {
    id: "batik-4",
    src: "/assets/img/jasaraharja/batik/batik-besurek-04.webp",
    alt: "Dari aksara yang terukir hingga motif yang mengalir, Besurek bercerita tentang Bengkulu yang kaya akan budaya",
    title: "Kisah yang Mengalir",
    caption: "Dari aksara yang terukir hingga motif yang mengalir, Besurek bercerita tentang Bengkulu yang kaya akan budaya.",
    lens: "50mm f/1.8",
    iso: "ISO 100",
    ratio: "3:4 Portrait",
    location: "Benteng Marlborough",
  },
  {
    id: "batik-5",
    src: "/assets/img/jasaraharja/batik/batik-besurek-05.webp",
    alt: "Batik Besurek adalah ketika tradisi menjelma menjadi karya, dan budaya menemukan cara untuk tetap hidup",
    title: "Tradisi Menjelma Karya",
    caption: "Batik Besurek adalah ketika tradisi menjelma menjadi karya, dan budaya menemukan cara untuk tetap hidup.",
    lens: "85mm f/1.8",
    iso: "ISO 100",
    ratio: "3:4 Editorial",
    location: "Benteng Marlborough",
  },
  {
    id: "batik-6",
    src: "/assets/img/jasaraharja/batik/batik-besurek-06.webp",
    alt: "Batik bukan sekadar motif yang terlukis, tetapi cerita yang diwariskan dari hati ke hati - Benteng Marlborough",
    title: "Cerita dari Hati ke Hati",
    caption: "Batik bukan sekadar motif yang terlukis, tetapi cerita yang diwariskan dari hati ke hati.",
    lens: "35mm f/2.8",
    iso: "ISO 200",
    ratio: "3:4 Heritage",
    location: "Benteng Marlborough",
  },
];

export interface GalleryItem {
  id: string;
  cat: "editorial" | "lapangan" | "reels" | "kampus";
  src: string;
  alt: string;
  tag: string;
  meta?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // Editorial & Photoshoot Budaya
  { id: "gb1", cat: "editorial", src: "/assets/img/jasaraharja/batik/batik-besurek-01.webp", alt: "Kampanye Hari Batik Nasional - Eksplorasi Motif Batik Besurek Jasa Raharja Bengkulu", tag: "Photoshoot Budaya", meta: "Benteng Marlborough" },
  { id: "gb2", cat: "editorial", src: "/assets/img/jasaraharja/batik/batik-besurek-02.webp", alt: "Photoshoot Busana Batik Besurek di Benteng Marlborough Bengkulu", tag: "Editorial Fashion", meta: "50mm f/1.8" },
  { id: "gb3", cat: "editorial", src: "/assets/img/jasaraharja/batik/batik-besurek-03.webp", alt: "Dari tanah Bengkulu, batik Besurek hadir membawa aksara, motif, dan kisah yang tumbuh bersama zaman", tag: "Visual Storytelling", meta: "Heritage Series" },
  { id: "gb4", cat: "editorial", src: "/assets/img/jasaraharja/batik/batik-besurek-04.webp", alt: "Dari aksara yang terukir hingga motif yang mengalir - Batik Besurek Bengkulu", tag: "Editorial Portrait", meta: "85mm f/2.0" },
  { id: "gb5", cat: "editorial", src: "/assets/img/jasaraharja/batik/batik-besurek-05.webp", alt: "Batik Besurek adalah ketika tradisi menjelma menjadi karya - Jasa Raharja Bengkulu", tag: "Cultural Identity", meta: "Batik Besurek" },
  { id: "gb6", cat: "editorial", src: "/assets/img/jasaraharja/batik/batik-besurek-06.webp", alt: "Batik bukan sekadar motif yang terlukis, cerita dari hati ke hati di Benteng Marlborough", tag: "Heritage Shot", meta: "Benteng Marlborough" },

  // Video Reels & Media Sosial
  { id: "gr1", cat: "reels", src: "/assets/img/jasaraharja/ig-reels.webp", alt: "Feed Reels Video Produksi Jasa Raharja Bengkulu", tag: "Video Reels (9:16)", meta: "Pacing & Motion Cut" },
  { id: "gr2", cat: "reels", src: "/assets/img/jasaraharja/ig-profil.webp", alt: "Kurasi Konten Media Sosial Instagram Jasa Raharja Bengkulu", tag: "Media Curator", meta: "Instagram Content" },
  { id: "g12", cat: "editorial", src: "/assets/img/docs/tim-jasa-raharja-studio.webp", alt: "Sesi foto studio resmi bersama tim Jasa Raharja", tag: "Studio Portrait", meta: "Studio Light" },
  { id: "g15", cat: "editorial", src: "/assets/img/docs/tim-jasa-raharja-ruang-rapat.webp", alt: "Tim Jasa Raharja di ruang pertemuan", tag: "Corporate Session", meta: "Kantor Wilayah" },
  { id: "g8", cat: "editorial", src: "/assets/img/docs/kantor-jasa-raharja.webp", alt: "Foto bersama di lobi kantor Jasa Raharja", tag: "Corporate Group", meta: "Lobi Kantor" },

  // Jurnalistik & Lapangan
  { id: "g3", cat: "lapangan", src: "/assets/img/docs/sambutan-pejabat.webp", alt: "Peliputan sambutan pejabat daerah di sebuah upacara", tag: "Jurnalistik Protokoler", meta: "Upacara Resmi" },
  { id: "g6", cat: "lapangan", src: "/assets/img/docs/apel-kantor.webp", alt: "Farhan berseragam merah saat peliputan apel di lingkungan perkantoran", tag: "Liputan Lapangan", meta: "Apel Dinas" },
  { id: "g7", cat: "lapangan", src: "/assets/img/docs/kunjungan-sekolah.webp", alt: "Kunjungan pejabat daerah disambut barisan siswa", tag: "Street Coverage", meta: "Kunjungan Sekolah" },
  { id: "g10", cat: "lapangan", src: "/assets/img/docs/dialog-siswa.webp", alt: "Pejabat daerah berdialog interaktif dengan siswa", tag: "Human Interest", meta: "Dialog Interaktif" },
  { id: "g11", cat: "lapangan", src: "/assets/img/docs/upacara-pemda.webp", alt: "Upacara bersama jajaran pemerintah daerah", tag: "Protokoler Pemda", meta: "Upacara Bendera" },
  { id: "g13", cat: "lapangan", src: "/assets/img/docs/sosialisasi-malam.webp", alt: "Membagikan materi sosialisasi kepada warga pada malam hari", tag: "Night Shot", meta: "Sosialisasi Warga" },
  { id: "g14", cat: "lapangan", src: "/assets/img/docs/penyerahan-piagam.webp", alt: "Dokumentasi penyerahan piagam di lapangan", tag: "Event Documentation", meta: "Penyerahan Piagam" },
  { id: "g16", cat: "lapangan", src: "/assets/img/docs/jalan-sehat.webp", alt: "Foto bersama di kegiatan jalan sehat daerah", tag: "Outdoor Event", meta: "Jalan Sehat" },
  { id: "g18", cat: "lapangan", src: "/assets/img/docs/tim-pemda.webp", alt: "Bersama rekan kerja peliputan di halaman kantor", tag: "Field Team", meta: "Halaman Kantor" },
  { id: "g19", cat: "lapangan", src: "/assets/img/docs/liputan-resepsi.webp", alt: "Bersama tim di acara resepsi adat", tag: "Adat Event", meta: "Resepsi Budaya" },
  { id: "g21", cat: "lapangan", src: "/assets/img/docs/apel-pagi.webp", alt: "Apel pagi di halaman gedung pemerintahan", tag: "Government Protocol", meta: "Apel Pagi" },
  { id: "g2", cat: "lapangan", src: "/assets/img/docs/kunjungan-korban-rs.webp", alt: "Kunjungan petugas Jasa Raharja kepada korban kecelakaan di rumah sakit", tag: "Humanitarian", meta: "RSUD Bengkulu" },
  { id: "g5", cat: "lapangan", src: "/assets/img/docs/penyerahan-santunan.webp", alt: "Petugas Jasa Raharja bersama warga dalam kegiatan pelayanan", tag: "Service Documentation", meta: "Santunan Cepat" },
  { id: "g1", cat: "lapangan", src: "/assets/img/docs/tim-jasa-raharja.webp", alt: "Foto bersama tim Jasa Raharja berseragam lengkap", tag: "Official Group", meta: "Kanwil Bengkulu" },

  // Akademik & Personal
  { id: "g4", cat: "kampus", src: "/assets/img/docs/magang-diskominfo-oi.webp", alt: "Mahasiswa magang Unsri berjaket kuning bersama pegawai Diskominfo Ogan Ilir", tag: "Diskominfo OI", meta: "Praktik Profesi" },
  { id: "g9", cat: "kampus", src: "/assets/img/docs/wisuda-unsri.webp", alt: "Prosesi wisuda Universitas Sriwijaya", tag: "Wisuda S.I.Kom", meta: "Universitas Sriwijaya" },
  { id: "g17", cat: "kampus", src: "/assets/img/docs/ukm-basket.webp", alt: "Farhan mengenakan jersey basket FISIP Universitas Sriwijaya", tag: "Sport Photography", meta: "UKM Basket FISIP" },
  { id: "g20", cat: "kampus", src: "/assets/img/docs/id-card-diskominfo-oi.webp", alt: "Kartu identitas magang Diskominfo Kabupaten Ogan Ilir", tag: "ID Magang", meta: "Ogan Ilir" },
];
