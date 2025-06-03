import Link from 'next/link';
import { Button } from '@/components/ui';

const Hero = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-4 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Your Next.js Starter</h1>
        <p className="text-lg md:text-xl mb-8">The perfect starting point for your next project with Next.js, TypeScript, and Tailwind CSS.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#features">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Learn More
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Hero; 