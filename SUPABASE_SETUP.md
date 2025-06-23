# 🎧 Supabase Setup untuk Sound Effect Guesser

## 📋 Step-by-Step Setup

### 1. **Buat Project Supabase**
1. Kunjungi [supabase.com](https://supabase.com)
2. Sign up/Login
3. Klik "New Project"
4. Pilih Organization dan isi:
   - **Name**: `sound-effect-guesser`
   - **Database Password**: (buat password yang kuat)
   - **Region**: pilih yang terdekat dengan user (contoh: Southeast Asia)
5. Klik "Create new project"
6. Tunggu hingga project selesai dibuat (~2 menit)

### 2. **Setup Database & Storage**
1. Masuk ke project Supabase yang baru dibuat
2. Klik **SQL Editor** di sidebar kiri
3. Copy-paste semua kode dari file `supabase-setup.sql`
4. Klik **Run** untuk menjalankan script
5. Pastikan semua query berhasil (tidak ada error merah)

### 3. **Konfigurasi Environment Variables**
1. Di Supabase Dashboard, klik **Settings** > **API**
2. Copy **Project URL** dan **anon/public key**
3. Buat file `.env.local` di root project dengan isi:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

4. Replace `xxxxxxxxxxxxx` dengan project ID yang sebenarnya
5. Replace anon key dengan key yang sebenarnya

### 4. **Upload Audio Files**
1. Di Supabase Dashboard, klik **Storage** di sidebar
2. Klik bucket **sounds** (sudah dibuat otomatis dari SQL script)
3. Upload 8 file audio dengan nama yang sesuai:
   ```
   whatsapp.mp3
   windows-error.mp3
   iphone-camera.mp3
   discord-join.mp3
   tiktok-like.mp3
   steam-achievement.mp3
   zoom-start.mp3
   youtube-subscribe.mp3
   ```

### 5. **Test Setup**
1. Restart development server: `npm run dev`
2. Buka [http://localhost:3001](http://localhost:3001)
3. Klik game "Sound Effect Guesser"
4. Pastikan:
   - ✅ Loading berhasil (tidak ada error)
   - ✅ Bisa play audio dengan klik tombol ▶️
   - ✅ Timer berjalan dengan benar
   - ✅ Scoring system +2/-3 detik bekerja

## 🔧 Troubleshooting

### ❌ "No Sound Effects" Page
**Penyebab**: Database tidak terkoneksi atau environment variables salah
**Solusi**:
1. Cek file `.env.local` sudah benar
2. Cek SQL script sudah dijalankan tanpa error
3. Restart development server

### ❌ "Audio tidak bisa dimuat"
**Penyebab**: File audio tidak ada di storage atau nama file salah
**Solusi**:
1. Cek bucket `sounds` di Supabase Storage
2. Pastikan nama file sesuai dengan database:
   - Database: `whatsapp.mp3`
   - Storage: `whatsapp.mp3` (harus sama persis)
3. Pastikan file audio format MP3/WAV/OGG

### ❌ CORS Error
**Penyebab**: Supabase project tidak mengizinkan domain
**Solusi**:
1. Di Supabase Dashboard > Settings > API
2. Tambahkan `http://localhost:3001` ke allowed origins
3. Untuk production, tambahkan domain production

## 📁 File Structure
```
project/
├── supabase-setup.sql          # SQL script untuk setup database
├── src/lib/supabase.ts         # Konfigurasi Supabase client
├── .env.local                  # Environment variables (buat manual)
└── src/app/sound-effect-guesser/
    └── page.tsx               # Game component dengan audio integration
```

## 🎵 Audio File Requirements
- **Format**: MP3, WAV, atau OGG
- **Size**: Maksimum 5MB per file
- **Quality**: 128kbps MP3 sudah cukup untuk sound effects
- **Duration**: 1-5 detik ideal untuk game experience

## 🚀 Production Deployment
1. Deploy project ke Vercel/Netlify
2. Tambahkan environment variables di platform deployment
3. Update allowed origins di Supabase untuk domain production
4. Test semua fitur di production environment

---

**🎮 Happy Gaming!** Setelah setup selesai, game Sound Effect Guesser siap dimainkan dengan audio yang sesungguhnya! 