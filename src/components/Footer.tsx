import React from 'react';
import { Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            Made with <Heart className="w-4 h-4 text-red-500" /> by Keshav Gupta
          </div>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;