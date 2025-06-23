'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { fetchSoundEffects, getSoundUrl, type SoundEffect } from '@/lib/supabase';

export default function SoundEffectGuesser() {
  const [soundEffects, setSoundEffects] = useState<SoundEffect[]>([]);
  const [currentSound, setCurrentSound] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [loading, setLoading] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Load sound effects from Supabase
  useEffect(() => {
    async function loadSoundEffects() {
      try {
        const effects = await fetchSoundEffects();
        setSoundEffects(effects);
      } catch (error) {
        console.error('Error loading sound effects:', error);
        // Fallback to local data if Supabase fails
        setSoundEffects([]);
      } finally {
        setLoading(false);
      }
    }
    loadSoundEffects();
  }, []);

  // Timer effect
  useEffect(() => {
    if (gameStarted && !gameFinished && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft <= 0) {
      setGameFinished(true);
    }
  }, [timeLeft, gameFinished, gameStarted]);

  const startGame = () => {
    setGameStarted(true);
    setCurrentSound(0);
    setTimeLeft(60);
    setScore(0);
    setGameFinished(false);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  const playSound = async () => {
    if (soundEffects.length === 0) return;
    
    const currentSoundEffect = soundEffects[currentSound];
    const audioUrl = currentSoundEffect.file_url || getSoundUrl(currentSoundEffect.file_path);
    
    try {
      setIsPlaying(true);
      
      // Stop previous audio if playing
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      
      // Create new audio instance
      audioRef.current = new Audio(audioUrl);
      
      // Set volume to reasonable level
      audioRef.current.volume = 0.7;
      
      // Play the audio
      await audioRef.current.play();
      
      // Handle audio end
      audioRef.current.onended = () => {
        setIsPlaying(false);
      };
      
      // Handle audio error
      audioRef.current.onerror = () => {
        console.error('Error playing audio:', audioUrl);
        setIsPlaying(false);
        // Show placeholder message if audio fails
        alert('Audio tidak bisa dimuat. Pastikan file audio sudah diupload ke Supabase!');
      };
      
    } catch (error) {
      console.error('Error playing sound:', error);
      setIsPlaying(false);
      // Fallback: simulate audio for demo
      setTimeout(() => setIsPlaying(false), 2000);
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null || soundEffects.length === 0) return;
    
    // Stop audio when answer is submitted
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    
    const isCorrect = selectedAnswer === soundEffects[currentSound].correct_answer;
    
    if (isCorrect) {
      setScore(score + 1);
      setTimeLeft(Math.min(timeLeft + 2, 60)); // Max 60 seconds
    } else {
      setTimeLeft(Math.max(timeLeft - 3, 0)); // Min 0 seconds
    }
    
    setShowResult(true);
    
    // Auto proceed to next question after 2 seconds
    setTimeout(() => {
      if (currentSound < soundEffects.length - 1) {
        setCurrentSound(currentSound + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        // Restart with random order
        setCurrentSound(Math.floor(Math.random() * soundEffects.length));
        setSelectedAnswer(null);
        setShowResult(false);
      }
    }, 2000);
  };

  const restartGame = () => {
    // Stop any playing audio
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    
    setGameStarted(false);
    setGameFinished(false);
    setCurrentSound(0);
    setTimeLeft(60);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🎧</div>
          <h2 className="text-2xl handwritten text-black mb-4">Loading Sound Effects...</h2>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto"></div>
        </div>
      </div>
    );
  }

  // No sound effects available
  if (soundEffects.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <Link href="/" className="inline-block mb-4">
              <span className="handwritten text-lg text-orange-500 hover:text-orange-600 border-2 border-orange-500 rounded-lg px-3 py-1">
                ← Kembali ke Home
              </span>
            </Link>
            
            <div className="bg-white p-8 rounded-lg border-4 border-black sketch-shadow paper-texture">
              <div className="text-6xl mb-4">😅</div>
              <h1 className="text-4xl font-bold handwritten text-black mb-4">
                Oops! No Sound Effects
              </h1>
              <p className="text-xl handwritten text-gray-600 mb-6">
                Belum ada sound effect yang tersedia. Pastikan Supabase sudah dikonfigurasi dengan benar!
              </p>
              
              <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200 mb-6">
                <h3 className="text-lg font-bold handwritten text-black mb-2">📋 Setup Instructions:</h3>
                <div className="text-left space-y-2 handwritten text-gray-700 text-sm">
                  <p>1. Run SQL script in Supabase SQL Editor</p>
                  <p>2. Upload audio files to 'sounds' bucket</p>
                  <p>3. Configure environment variables</p>
                  <p>4. Restart the application</p>
                </div>
              </div>
              
              <Link href="/">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-lg border-4 border-black handwritten text-xl hover:bg-orange-600 transition-colors sketch-shadow">
                  🏠 Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <Link href="/" className="inline-block mb-4">
              <span className="handwritten text-lg text-orange-500 hover:text-orange-600 border-2 border-orange-500 rounded-lg px-3 py-1">
                ← Kembali ke Home
              </span>
            </Link>
            
            <div className="bg-white p-8 rounded-lg border-4 border-black sketch-shadow paper-texture">
              <div className="text-6xl mb-4">🎧</div>
              <h1 className="text-4xl font-bold handwritten text-black mb-4">
                Sound Effect Guesser!
              </h1>
              <p className="text-xl handwritten text-gray-600 mb-6">
                Tebak sound effect dari berbagai aplikasi dan game! 🎵
              </p>
              
              <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200 mb-6">
                <h3 className="text-xl font-bold handwritten text-black mb-4">📋 Cara Main:</h3>
                <div className="text-left space-y-2 handwritten text-gray-700">
                  <p>⏰ Waktu awal: <strong>60 detik</strong></p>
                  <p>✅ Jawaban benar: <strong>+2 detik</strong></p>
                  <p>❌ Jawaban salah: <strong>-3 detik</strong></p>
                  <p>🎯 Tujuan: Jawab sebanyak mungkin sebelum waktu habis!</p>
                </div>
              </div>
              
              <button
                onClick={startGame}
                className="bg-orange-500 text-white px-8 py-4 rounded-lg border-4 border-black handwritten text-xl hover:bg-orange-600 transition-colors sketch-shadow"
              >
                🎮 Mulai Game
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameFinished) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white p-8 rounded-lg border-4 border-black sketch-shadow paper-texture">
              <div className="text-6xl mb-4">
                {score >= 15 ? '🏆' : score >= 10 ? '🎉' : score >= 5 ? '👏' : '😅'}
              </div>
              <h1 className="text-4xl font-bold handwritten text-black mb-4">
                Game Over!
              </h1>
              <div className="text-6xl font-bold handwritten text-orange-500 mb-4">
                {score}
              </div>
              <p className="text-xl handwritten text-gray-600 mb-6">
                Sound effect berhasil ditebak!
              </p>
              <p className="handwritten text-gray-600 mb-6">
                {score >= 15 ? 'Amazing! Kamu master sound effect!' :
                 score >= 10 ? 'Great job! Lumayan jago nih!' :
                 score >= 5 ? 'Not bad! Perlu latihan lagi ya!' :
                 'Keep trying! Practice makes perfect! 💪'}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={restartGame}
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg border-4 border-black handwritten text-lg hover:bg-orange-600 transition-colors sketch-shadow"
                >
                  🔄 Main Lagi
                </button>
                <Link href="/">
                  <button className="bg-white text-black px-6 py-3 rounded-lg border-4 border-black handwritten text-lg hover:bg-gray-50 transition-colors sketch-shadow">
                    🏠 Home
                  </button>
                </Link>
                <Link href="/sound-quiz">
                  <button className="bg-black text-white px-6 py-3 rounded-lg border-4 border-orange-500 handwritten text-lg hover:bg-gray-800 transition-colors sketch-shadow">
                    🎵 Sound Quiz
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const sound = soundEffects[currentSound];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-6">
          <Link href="/" className="inline-block mb-4">
            <span className="handwritten text-lg text-orange-500 hover:text-orange-600 border-2 border-orange-500 rounded-lg px-3 py-1">
              ← Kembali ke Home
            </span>
          </Link>
          <h1 className="text-4xl font-bold handwritten text-black mb-2">
            🎧 Sound Effect Guesser
          </h1>
        </div>

        {/* Game Stats */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="bg-white p-3 rounded-lg border-2 border-black sketch-shadow">
              <div className="text-lg font-bold handwritten text-black">Score: {score}</div>
            </div>
            <div className={`p-3 rounded-lg border-2 border-black sketch-shadow ${
              timeLeft <= 10 ? 'bg-red-500 text-white animate-pulse' : 
              timeLeft <= 20 ? 'bg-yellow-500 text-black' : 'bg-green-500 text-white'
            }`}>
              <div className="text-lg font-bold handwritten">⏰ {timeLeft}s</div>
            </div>
          </div>
        </div>

        {/* Game Content */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg border-4 border-black sketch-shadow paper-texture">
            {/* Sound Player */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold handwritten text-black mb-4">
                Dengarkan sound effect ini:
              </h2>
              <p className="handwritten text-gray-600 mb-6">
                {sound.description}
              </p>
              
              <button
                onClick={playSound}
                disabled={isPlaying}
                className={`w-32 h-32 rounded-full border-4 border-black flex items-center justify-center text-4xl transition-all duration-300 ${
                  isPlaying 
                    ? 'bg-orange-600 text-white animate-pulse' 
                    : 'bg-orange-500 text-white hover:bg-orange-600 hover:scale-110'
                } sketch-shadow`}
              >
                {isPlaying ? '🎵' : '▶️'}
              </button>
              <p className="handwritten text-sm text-gray-600 mt-2">
                {isPlaying ? 'Sedang memutar...' : 'Klik untuk putar'}
              </p>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {sound.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`p-4 rounded-lg border-4 border-black handwritten text-lg transition-all duration-300 hover:scale-105 ${
                    selectedAnswer === index 
                      ? 'bg-orange-500 text-white sketch-shadow' 
                      : 'bg-white text-black hover:bg-orange-50'
                  } ${showResult && index === sound.correct_answer ? 'bg-green-500 text-white' : ''}
                  ${showResult && selectedAnswer === index && index !== sound.correct_answer ? 'bg-red-500 text-white' : ''}`}
                >
                  {String.fromCharCode(65 + index)}. {option}
                </button>
              ))}
            </div>

            {/* Result */}
            {showResult && (
              <div className="text-center mb-6 p-4 rounded-lg border-2 border-dashed border-orange-500 bg-orange-50">
                <div className="text-3xl mb-2">
                  {selectedAnswer === sound.correct_answer ? '✅' : '❌'}
                </div>
                <p className="handwritten text-lg text-black">
                  {selectedAnswer === sound.correct_answer 
                    ? `Benar! +2 detik! (${sound.name})` 
                    : `Salah! -3 detik! Jawabannya: ${sound.name}`}
                </p>
              </div>
            )}

            {/* Submit Button */}
            {!showResult && (
              <div className="text-center">
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className={`px-8 py-3 rounded-lg border-4 border-black handwritten text-lg transition-colors sketch-shadow ${
                    selectedAnswer !== null 
                      ? 'bg-orange-500 text-white hover:bg-orange-600' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Submit Jawaban
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 