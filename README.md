# Next.js Starter Pack (Boilerplate)

Proyek ini adalah sebuah starter pack (boilerplate) siap pakai untuk memulai pengembangan aplikasi web modern menggunakan Next.js, TypeScript, dan Tailwind CSS.

## Tentang Proyek Ini

Starter pack ini dirancang untuk mempercepat proses inisialisasi proyek Next.js Anda dengan menyediakan konfigurasi dasar dan struktur direktori yang umum digunakan. Tujuannya adalah agar Anda bisa langsung fokus pada pengembangan fitur inti aplikasi Anda.

## Fitur Utama

*   **Next.js 14:** Dibangun dengan versi terbaru dari framework React.
*   **TypeScript:** Menggunakan static typing untuk meningkatkan kualitas kode dan kemudahan pemeliharaan.
*   **Tailwind CSS:** Memanfaatkan utility-first CSS untuk pengembangan UI yang cepat.
*   **App Router:** Menggunakan App Router terbaru dari Next.js untuk routing dan layout yang lebih baik.
*   **ESLint:** Sudah dikonfigurasi untuk menjaga konsistensi gaya penulisan kode.
*   **Struktur Direktori:** Menggunakan direktori `src/` untuk kode sumber dan alias import `@/*`.
*   **Contoh Halaman:** Termasuk contoh halaman landing page sederhana (`src/app/page.tsx`) beserta komponen (`src/components/`) sebagai panduan struktur.

## Cara Menggunakan

1.  **Clone Repository:**
    Salin (clone) repository ini ke mesin lokal Anda menggunakan Git:
    ```bash
    git clone <URL_REPOSITORY_ANDA> nama-folder-proyek-baru
    cd nama-folder-proyek-baru
    ```
    *Ganti `<URL_REPOSITORY_ANDA>` dengan URL repository Git tempat Anda menyimpan starter pack ini.* 
    *Ganti `nama-folder-proyek-baru` dengan nama direktori yang Anda inginkan untuk proyek baru Anda.*

2.  **Install Dependensi:**
    Pasang semua dependensi yang dibutuhkan menggunakan npm atau yarn:
    ```bash
    npm install
    # atau
    yarn install
    ```

3.  **Jalankan Development Server:**
    Mulai server pengembangan lokal:
    ```bash
    npm run dev
    # atau
    yarn dev
    ```
    Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

4.  **Mulai Koding!**
    Anda bisa mulai memodifikasi kode di dalam direktori `src/`. File utama untuk halaman depan adalah `src/app/page.tsx`.

## Build untuk Produksi

Untuk membuat versi produksi dari aplikasi Anda, jalankan:

```bash
npm run build
# atau
yarn build
```

Perintah ini akan menghasilkan versi optimasi dari aplikasi Anda di dalam folder `.next`.
