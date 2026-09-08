import React, { useState } from 'react';
import { skillDomains } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillDomains[0].id);
  const activeDomain = skillDomains.find(d => d.id === activeTab) || skillDomains[0];

  return (
    <div className="relative z-10 w-full">
      {/* Section Header */}
      <div className="font-label-caps text-label-caps text-black mb-6 flex items-center gap-4">
        Skills
        <div className="h-px bg-outline-variant/30 flex-grow ml-4"></div>
      </div>



      {/* Skills Layout Container */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-8 w-full">
        
        {/* Left Side: Tabs */}
        <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 lg:w-64 shrink-0 lg:pr-4">
          {skillDomains.map((domain) => (
            <button
              key={domain.id}
              onClick={() => setActiveTab(domain.id)}
              className={`flex items-center gap-3 px-5 py-4 rounded-xl font-inter font-bold text-sm transition-all whitespace-nowrap ${
                activeTab === domain.id
                  ? 'bg-black text-white shadow-md'
                  : 'bg-transparent text-black hover:bg-white/50'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{domain.icon}</span>
              {domain.title}
            </button>
          ))}
        </div>

        {/* Middle: Progress Bars */}
        <div className="flex-1 w-full py-2">
          <h2 className="font-fraunces text-3xl md:text-4xl font-bold text-black mb-6">
            {activeDomain.title}
          </h2>
          <div className="flex flex-col gap-4">
            {activeDomain.skills.map((skill, index) => (
              <div key={index} className="w-full">
                <div className="flex justify-between items-end mb-1.5">
                  <span className="font-inter font-semibold text-black text-sm">{skill.name}</span>
                </div>
                {/* Progress Bar Container */}
                <div className="w-full h-5 bg-black/20 flex overflow-hidden rounded-sm relative">
                  {/* Fill */}
                  <div
                    className="h-full bg-black flex items-center justify-end px-2 transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  >
                    <span className="text-white font-code-sm text-[10px] font-medium leading-none">{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Softskills & Currently Learning */}
        <div className="flex flex-col gap-6 lg:w-[320px] shrink-0">
          {/* Softskills Card */}
          <div className="bg-white p-6 md:p-8 rounded-[24px] shadow-sm flex-1">
            <h2 className="font-fraunces text-2xl md:text-3xl font-bold text-black mb-8">
              Softskills
            </h2>
            <ul className="space-y-6 font-inter text-sm text-black font-medium">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Technical Writing
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Technical Communication
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> System Design
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Code Review
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 hidden sm:block"></span> 
                <span>Code Cross-functional Collaboration</span>
              </li>
            </ul>
          </div>

          {/* Currently Learning Card */}
          <div className="bg-[#2A2A2A] p-6 md:p-8 rounded-[24px] shadow-sm text-white">
            <h2 className="font-inter text-lg font-medium mb-6 text-gray-300">
              Currently Learning
            </h2>
            <ul className="space-y-4 font-inter text-sm font-medium">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-red-400 text-[18px]">arrow_forward</span> NLP
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-red-400 text-[18px]">arrow_forward</span> Designing
              </li>
            </ul>
          </div>
        </div>
      </div>


    </div>
  );
}
