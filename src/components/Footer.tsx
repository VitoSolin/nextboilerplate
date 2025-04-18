import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-400 py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
        <div className="flex items-center space-x-4">
          {/* Optional: Add social media links or other footer links here */}
          {/* Example: <Link href="/privacy" className="hover:text-white">Privacy Policy</Link> */}
          <Link href="#page-top" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition duration-300">
            Back to Top
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 