import React from 'react';
import { GraduationCap } from 'lucide-react';

function Education() {
  return (
    <section id="education" className="mb-24">
      <div className="flex items-center gap-2 mb-8">
        <GraduationCap className="w-6 h-6 text-blue-600" />
        <h2 className="text-3xl font-bold text-gray-900">Education</h2>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="border-l-4 border-blue-600 pl-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900">B.Tech in Computer Science</h3>
          <p className="text-gray-600">SRM Institute of Science and Technology</p>
          <p className="text-gray-500">2022 - Present</p>
          <p className="text-blue-600 font-medium mt-2">Current CGPA: 9.2</p>
        </div>
        <div className="border-l-4 border-gray-300 pl-6">
          <h3 className="text-xl font-semibold text-gray-900">High School</h3>
          <p className="text-gray-600">Delhi Public School</p>
          <p className="text-gray-500">2020 - 2022</p>
          <p className="text-blue-600 font-medium mt-2">Grade: 95%</p>
        </div>
      </div>
    </section>
  );
}

export default Education;