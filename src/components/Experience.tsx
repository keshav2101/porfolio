import React from 'react';
import { Briefcase } from 'lucide-react';

function Experience() {
  return (
    <section id="experience" className="mb-24">
      <div className="flex items-center gap-2 mb-8">
        <Briefcase className="w-6 h-6 text-blue-600" />
        <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-8">
        <ExperienceItem 
          title="Initiative Coordinator"
          company="IEEE MAS SIGHT AG"
          period="Jan 2023 - Present"
          current={true}
          responsibilities={[
            'Led multiple technical initiatives and workshops',
            'Coordinated with team members across different chapters',
            'Organized successful technical events and seminars'
          ]}
        />
        <ExperienceItem 
          title="Secretary"
          company="IEEE Computer Society"
          period="Aug 2022 - Dec 2022"
          current={false}
          responsibilities={[
            'Managed society communications and documentation',
            'Organized technical workshops and coding competitions',
            'Facilitated collaboration between different technical teams'
          ]}
        />
      </div>
    </section>
  );
}

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  current: boolean;
  responsibilities: string[];
}

function ExperienceItem({ title, company, period, current, responsibilities }: ExperienceItemProps) {
  return (
    <div className="mb-8 last:mb-0">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        {current && <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">Current</span>}
      </div>
      <p className="text-gray-600">{company}</p>
      <p className="text-gray-500 mb-4">{period}</p>
      <ul className="text-gray-600 list-disc list-inside">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;