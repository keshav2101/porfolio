import React from 'react';

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12 mb-24">
      <div className="flex-1">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Hi, I'm Keshav Gupta
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A Computer Science student at SRM Institute of Science and Technology, passionate about technology and innovation.
        </p>
        <div className="flex gap-4">
          <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Get in Touch
          </a>
          <a href="#projects" className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
            View Projects
          </a>
        </div>
      </div>
      <div className="flex-1">
        <img 
          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600&h=600" 
          alt="Computer Science Concept"
          className="rounded-lg shadow-xl w-full"
        />
      </div>
    </section>
  );
}

export default Hero;