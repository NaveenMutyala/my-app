import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Naveen Kumar Mutyala</h3>
            <p className="text-gray-400"> Frontend Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <Link 
              href="https://github.com/NaveenMutyala" 
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/naveen-kumar-mutyala-080106210/" 
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Naveen Mutyala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}