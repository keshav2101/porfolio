import React from 'react';
import { Code } from 'lucide-react';

function Projects() {
  return (
    <section id="projects" className="mb-24">
      <div className="flex items-center gap-2 mb-8">
        <Code className="w-6 h-6 text-blue-600" />
        <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard 
          title="Electrode Materials Research"
          description="Research work on developing electrode materials for supercapacitors under Dr. Vadivel S at SRMIST."
          tags={['Research', 'Materials Science']}
        />
        <ProjectCard 
          title="Smart Home Automation System"
          description="Developed an IoT-based home automation system using Arduino and Python."
          tags={['IoT', 'Python']}
        />
      </div>
    </section>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default Projects;