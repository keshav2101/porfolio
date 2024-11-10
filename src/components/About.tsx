import React from 'react';
import { User } from 'lucide-react';

function About() {
  return (
    <section id="about" className="mb-24">
      <div className="flex items-center gap-2 mb-8">
        <User className="w-6 h-6 text-blue-600" />
        <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-8">
        <p className="text-gray-600 leading-relaxed mb-6">
          I am a second-year B.Tech. student specializing in Computer Science at SRM Institute of Science and Technology. 
          My passion lies in technology innovation and research & development. I combine technical expertise in programming 
          with strong leadership abilities, demonstrated through my active involvement in IEEE and various student organizations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard title="Technical Skills" skills={['Python', 'Java', 'C++', 'Web Development', 'CAD Design']} />
          <SkillCard title="Soft Skills" skills={['Public Speaking', 'Leadership', 'Problem Solving', 'Team Management', 'Communication']} />
          <SkillCard title="Interests" skills={['Research & Development', 'Technology Innovation', 'Model UN', 'Painting', 'Tennis']} />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <ul className="text-gray-600">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default About;