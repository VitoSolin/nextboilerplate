import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Meme Kelas - Direktori Meme untuk Anak Sekolah',
  description: 'Website direktori meme terlengkap dengan sound quiz dan mini games untuk anak sekolah. Koleksi meme lucu, kuis sound effect, dan games seru!',
  keywords: ['Meme', 'Direktori Meme', 'Sound Quiz', 'Mini Games', 'Anak Sekolah'],
  authors: [{ name: 'Meme Kelas Team' }],
  creator: 'Meme Kelas Team',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    title: 'Meme Kelas - Direktori Meme untuk Anak Sekolah',
    description: 'Website direktori meme terlengkap dengan sound quiz dan mini games untuk anak sekolah',
    siteName: 'Meme Kelas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meme Kelas - Direktori Meme untuk Anak Sekolah',
    description: 'Website direktori meme terlengkap dengan sound quiz dan mini games untuk anak sekolah',
    creator: '@memekelas',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Comic+Neue:wght@300;400;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
