import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t-4 border-orange-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center sketch-shadow">
                <span className="text-2xl font-bold text-white handwritten">A</span>
              </div>
              <h3 className="text-2xl font-bold handwritten text-white">
                akarnya<span className="text-orange-500">.com</span>
              </h3>
            </div>
            <p className="handwritten text-gray-300 mb-4">
              Platform hiburan digital dengan koleksi game menarik! 
              Nikmati berbagai game meme lucu dan kuis sound effect untuk semua! ✨
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors text-2xl">
                📘
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors text-2xl">
                📸
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors text-2xl">
                🐦
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors text-2xl">
                🎵
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold handwritten text-orange-500 mb-4">
              📝 Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="handwritten text-gray-300 hover:text-orange-500 transition-colors block py-1">
                  🏠 Home
                </a>
              </li>
              <li>
                <a href="/sound-quiz" className="handwritten text-gray-300 hover:text-orange-500 transition-colors block py-1">
                  🎵 Sound Quiz
                </a>
              </li>
              <li>
                <a href="#games" className="handwritten text-gray-300 hover:text-orange-500 transition-colors block py-1">
                  🎮 Games
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-xl font-bold handwritten text-orange-500 mb-4">
              ℹ️ About
            </h4>
            <div className="space-y-3">
              <p className="handwritten text-gray-300 text-sm">
                akarnya.com adalah platform hiburan yang menyediakan berbagai game menarik.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-dashed border-orange-500 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="handwritten text-gray-400 mb-4 md:mb-0">
            © 2024 akarnya.com. Made with 💖 for everyone!
          </div>
          <div className="flex space-x-4">
            <span className="handwritten text-gray-400 text-sm">
              Built with Next.js & TailwindCSS ⚡
            </span>
          </div>
        </div>

        {/* Fun Doodles */}
        <div className="text-center mt-8">
          <div className="flex justify-center space-x-4 text-2xl opacity-50">
            <span>✏️</span>
            <span>📐</span>
            <span>🖍️</span>
            <span>📏</span>
            <span>✂️</span>
          </div>
          <p className="handwritten text-gray-500 text-sm mt-2">
            Keep calm and meme on! 😄
          </p>
        </div>
      </div>
    </footer>
  );
} 