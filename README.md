# Quran Digital - Al-Qur'an Modern Web App

Website Al-Qur'an digital modern dengan desain yang clean, elegant, dan islami menggunakan React JS dan Tailwind CSS.

## ✨ Fitur Utama

### 🏠 Halaman Home
- **Daftar Surah**: Menampilkan semua 114 surah dalam bentuk card responsive
- **Informasi Surah**: Nomor, nama latin, nama arab, arti, jumlah ayat
- **Efek Hover**: Smooth scale dan shadow animation
- **Grid Responsive**: 1-4 kolom tergantung ukuran layar

### 📖 Halaman Detail Surah
- **Header Surah**: Nama arab & latin, arti, jumlah ayat
- **Ayat Lengkap**: Teks arab dengan font islami, terjemahan Indonesia
- **Audio Player**: Tombol play untuk setiap ayat (jika tersedia)
- **Bookmark**: Simpan ayat favorit dengan localStorage
- **Scroll Smooth**: Pengalaman baca yang nyaman

### 🔍 Fitur Search
- **Real-time Filtering**: Cari surah berdasarkan nama
- **Multi-kriteria**: Nama latin, nama arab, atau arti
- **Instant Results**: Filter langsung saat mengetik

### 🌙 Dark Mode
- **Toggle Theme**: Saklar antara mode terang dan gelap
- **Persistent**: Pengaturan tersimpan di localStorage
- **Smooth Transition**: Transisi yang halus

### ⭐ Bookmark System
- **Simpan Ayat**: Bookmark ayat favorit
- **Halaman Khusus**: Lihat semua bookmark di satu tempat
- **Local Storage**: Data tersimpan di browser

### 🎨 UI/UX Modern
- **Tailwind CSS**: Styling modern dan minimalis
- **Responsive Design**: Mobile, tablet, desktop
- **Font Islami**: Amiri untuk teks arab
- **Animasi Ringan**: Fade-in, hover effects
- **Loading Skeleton**: Placeholder saat loading data

## 🛠️ Teknologi

- **React 19**: Functional components & hooks
- **React Router**: Navigasi antar halaman
- **Tailwind CSS v4**: Utility-first CSS framework
- **Context API**: State management untuk theme & bookmarks
- **Local Storage**: Persistent data untuk bookmarks & theme
- **Vite**: Build tool modern & cepat

## 📁 Struktur Project

```
src/
├── components/          # Komponen reusable
│   ├── Navbar.jsx       # Navigation bar dengan search
│   ├── SurahCard.jsx    # Card untuk setiap surah
│   ├── Ayat.jsx         # Komponen untuk setiap ayat
│   └── LoadingSkeleton.jsx # Placeholder loading
├── contexts/            # React Context untuk state global
│   ├── ThemeContext.jsx # Dark mode management
│   └── BookmarkContext.jsx # Bookmark management
├── pages/               # Halaman utama
│   ├── Home.jsx         # Halaman daftar surah
│   ├── SurahDetail.jsx  # Halaman detail surah
│   └── Bookmarks.jsx    # Halaman bookmark
├── services/            # API calls
│   └── api.js           # Fetch functions untuk equran.id API
├── App.jsx              # Main app dengan routing
├── main.jsx             # Entry point
└── index.css            # Global styles & Tailwind
```

## 🚀 Instalasi & Menjalankan

1. **Clone repository**:
   ```bash
   git clone <repository-url>
   cd myquran
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Jalankan development server**:
   ```bash
   npm run dev
   ```

4. **Buka browser**:
   ```
   http://localhost:5173
   ```

## 📡 API

Menggunakan API dari [equran.id](https://equran.id/api/v2):

- `GET /surat` - Mendapatkan daftar semua surah
- `GET /surat/{nomor}` - Mendapatkan detail surah beserta ayat

## 🎨 Desain

- **Warna**: Nuansa hijau, emas, dan putih (islami)
- **Typography**: Inter untuk latin, Amiri untuk arab
- **Layout**: Clean & minimal dengan spacing yang konsisten
- **Responsiveness**: Mobile-first approach

## 🔧 Development

- **Hot Reload**: Vite menyediakan hot reload instan
- **ESLint**: Code linting untuk kualitas kode
- **Error Handling**: Graceful error handling untuk API failures
- **Performance**: Optimized dengan lazy loading & caching

## 📱 Browser Support

- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Mobile browsers: ✅

## 🤝 Contributing

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Dibuat dengan ❤️ untuk umat Muslim di seluruh dunia**
