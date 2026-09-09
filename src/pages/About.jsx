import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <div className="relative z-10 w-full">
      {/* Section Header */}
      <div className="font-label-caps text-label-caps text-black mb-10">
        About Me
      </div>

      {/* About Me Container (No Background Color) */}
      <div>
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 md:gap-12">
          {/* About Me Content */}
          <div className="space-y-4 flex-1">

            <h1 className="font-fraunces text-4xl md:text-6xl font-semibold text-black">
              I build things that <span className="italic text-red-600">scale</span> and stick around.
            </h1>

            <p className="font-inter text-base md:text-lg text-black/80 leading-relaxed whitespace-pre-wrap">
              {personalInfo.fullBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
              <Link
                to="/contact"
                className="bg-black text-white font-inter text-sm font-bold px-8 py-4 rounded-[10px] transition-all hover:opacity-90 active:scale-95 text-center inline-flex items-center justify-center gap-2"
              >
                Get in Touch <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <Link
                to="/projects"
                className="border border-black text-black font-inter text-sm font-bold px-8 py-4 rounded-[10px] transition-all hover:bg-gray-100 active:scale-95 text-center inline-flex items-center justify-center gap-2"
              >
                See my work
              </Link>
            </div>

            {/* Social & Resume Links */}
            <div className="flex flex-wrap gap-6 pt-2 font-inter text-sm font-semibold">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-black transition-opacity flex items-center gap-1"
              >
                <span className="group-hover:underline">Github</span> <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-black transition-opacity flex items-center gap-1"
              >
                <span className="group-hover:underline">LinkedIn</span> <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
              </a>
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-black transition-opacity flex items-center gap-1"
              >
                <span className="group-hover:underline">Resume</span> <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
              </a>
            </div>
          </div>

          {/* Right Column: Avatar & Academic Background */}
          <div className="flex flex-col gap-6 w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] shrink-0">
            {/* Avatar Image (Uncropped & Full Proportions) */}
            <div className="w-full rounded-3xl overflow-hidden shadow-md bg-gray-100">
              <img
                src={personalInfo.avatarPath || '/images/ProperPicture.jpg'}
                alt={personalInfo.name}
                className="w-full h-auto object-contain block"
              />
            </div>

            {/* Academic Background Section */}
            <section className="border border-black/15 p-6 rounded-2xl flex flex-col justify-center">
              <h2 className="font-fraunces font-bold text-2xl text-black mb-4">
                Academic Background
              </h2>
              <h3 className="font-inter font-bold text-lg text-black mb-1">University of Mindanao</h3>
              <p className="font-inter text-black/80 font-medium text-sm mb-4">B.S. in Computer Science</p>
              <div className="flex items-center gap-2 mt-auto">
                <span className="material-symbols-outlined text-black/60 text-[18px]">school</span>
                <span className="font-inter text-sm text-black/60 font-medium">Expected Graduation: 2027</span>
              </div>
            </section>
          </div>
        </div>
      </div>


    </div>
  );
}
