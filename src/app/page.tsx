'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface Game {
  id: number;
  title: string;
  description: string;
  icon: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  isNew?: boolean;
}

const games: Game[] = [
  {
    id: 1,
    title: "Sound Effect Guesser",
    description: "Tebak sound effect dari berbagai opsi! 🎵",
    icon: "🎧",
    difficulty: 'Medium',
    category: 'Audio',
    isNew: true
  }
];

export default function Home() {

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 paper-texture p-8 rounded-lg border-4 border-black sketch-shadow">
          <h1 className="text-6xl font-bold handwritten text-black mb-4">
            🎮 akarnya<span className="text-orange-500">.com</span>
          </h1>
          <p className="text-xl handwritten text-gray-700 mb-6">
            Platform hiburan digital dengan koleksi game meme seru untuk semua! 🎯🎉
          </p>
        </div>

        {/* Game Section Header */}
        <div id="games" className="text-center mb-8">
          <h2 className="text-3xl font-bold handwritten text-black mb-4">
            🎮 Main Game Sekarang!
          </h2>
          <p className="text-lg handwritten text-gray-600">
            Siap-siap uji pendengaran kamu dengan game seru ini!
          </p>
        </div>

        {/* Games Grid */}
        <div className="flex justify-center mb-8">
          {games.map((game, index) => (
            <div
              key={game.id}
              className="meme-card p-6 bounce-in relative max-w-md"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* New Badge */}
              {game.isNew && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs handwritten px-2 py-1 rounded-full border-2 border-black">
                  NEW!
                </div>
              )}

              {/* Game Icon */}
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-4xl border-4 border-black sketch-shadow mx-auto">
                  {game.icon}
                </div>
              </div>

              {/* Game Info */}
              <h3 className="text-xl font-bold handwritten text-black mb-2 text-center">
                {game.title}
              </h3>
              <p className="text-gray-600 handwritten mb-4 text-center">
                {game.description}
              </p>

              {/* Game Details */}
              <div className="flex justify-between items-center mb-4">
                <span className={`px-2 py-1 rounded-full text-xs handwritten border ${
                  game.difficulty === 'Easy' ? 'bg-green-100 text-green-800 border-green-300' :
                  game.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 border-yellow-300' :
                  'bg-red-100 text-red-800 border-red-300'
                }`}>
                  {game.difficulty}
                </span>
                <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs handwritten border border-orange-300">
                  {game.category}
                </span>
              </div>

              {/* Play Button */}
              <Link href="/sound-effect-guesser">
                <button className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg border-4 border-black handwritten text-lg hover:bg-orange-600 transition-all duration-300 sketch-shadow">
                  🎮 Main Sekarang
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
