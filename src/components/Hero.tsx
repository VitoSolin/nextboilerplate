import Link from 'next/link';

const Hero = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-4 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Your Next.js Starter</h1>
        <p className="text-lg md:text-xl mb-8">The perfect starting point for your next project.</p>
        <Link
          href="#features"
          className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300 ease-in-out"
        >
          Learn More
        </Link>
      </div>
    </header>
  );
};

export default Hero; 