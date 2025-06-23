'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-black paper-texture">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center sketch-shadow">
              <span className="text-2xl font-bold text-white handwritten">A</span>
            </div>
            <h1 className="text-3xl font-bold handwritten text-black">
              akarnya<span className="text-orange-500">.com</span>
            </h1>
          </Link>
        </div>
      </div>
    </header>
  );
} 