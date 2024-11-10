import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="mb-24">
      <div className="flex items-center gap-2 mb-8">
        <Mail className="w-6 h-6 text-blue-600" />
        <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-6">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
            <div className="flex flex-col gap-4">
              <a href="mailto:keshav.gupta@example.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Mail className="w-5 h-5" />
                keshav.gupta@example.com
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        Send Message
      </button>
    </form>
  );
}

export default Contact;