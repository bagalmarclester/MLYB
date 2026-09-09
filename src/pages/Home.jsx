import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { personalInfo, typingPhrases, projects, skillDomains } from '../data/portfolioData';

export default function Home() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typingPhrases[phraseIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        // Pause at end of word
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && text === '') {
        // Move to next word
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
      } else {
        // Type or delete a char
        const nextText = isDeleting
          ? currentPhrase.substring(0, text.length - 1)
          : currentPhrase.substring(0, text.length + 1);
        setText(nextText);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  return (
    <div className="relative z-10 w-full">
      {/* Hero Section */}
      <section className="min-h-[620px] flex flex-col justify-center pt-6">
        {/* Hero Content Group */}
        <div className="flex flex-col gap-6 max-w-4xl">
          <h1 className="font-fraunces text-black tracking-tight text-5xl md:text-[114px] md:leading-[114px] font-black">
            Building things <br />
            <span className="text-red-600 italic">people</span> <br />
            rely on.
          </h1>

          <p className="font-inter text-black max-w-2xl leading-relaxed text-base md:text-lg">
            Hi, I’m <span className="font-bold">Marc Lester Y. Bagal</span>. A Computer Science student at the University of Mindanao interested in machine learning and focused on building practical, user-friendly front-end interfaces.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
            <Link
              to="/projects"
              className="bg-black text-white font-inter text-sm font-bold px-8 py-4 rounded-[10px] transition-all hover:opacity-90 active:scale-95 text-center inline-flex items-center justify-center gap-2"
            >
              View projects <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            <Link
              to="/contact"
              className="border border-black text-black font-inter text-sm font-bold px-8 py-4 rounded-[10px] transition-all hover:bg-gray-100 active:scale-95 text-center inline-flex items-center justify-center"
            >
              Say hello
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <div className="w-full h-px bg-black/15 my-16 md:my-20"></div>

      <section>
        <div className="mb-8 flex items-center justify-between w-full">
          <h2 className="font-fraunces font-bold text-3xl text-black whitespace-nowrap">
            Featured Projects
          </h2>
          <Link
            to="/projects"
            className="group font-inter text-sm font-semibold text-black transition-all whitespace-nowrap flex items-center gap-1"
          >
            <span className="group-hover:underline">View all</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects
            .filter((p) => ['operations-management', 'event-registration', 'bus-management'].includes(p.id))
            .map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card rounded-2xl overflow-hidden relative transition-all duration-300 flex flex-col h-full border border-outline-variant/30 bg-white hover:shadow-xl hover:-translate-y-1 group block cursor-pointer"
              >
                {/* Image Section */}
                <div className="w-full h-48 bg-gray-100">
                  <img
                    src={project.image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='22' fill='%239ca3af'%3EProject Preview%3C/text%3E%3C/svg%3E"}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between flex-grow text-center">
                  <div className="flex flex-col items-center">
                    <h3 className="font-inter text-xl font-bold text-black mb-1">
                      {project.title}
                    </h3>
                    <div className="font-code-sm text-xs mb-3 text-black font-medium">
                      {project.org}
                    </div>
                    <p className="font-inter text-sm text-black mb-5 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-code-sm px-2 py-1 rounded bg-gray-100 border border-outline-variant/30 text-black"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-outline-variant/20 flex justify-center">
                    <span
                      className="text-black font-code-sm text-xs group-hover:underline flex items-center justify-center gap-2"
                    >
                      {project.linkLabel}
                    </span>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </section>

      {/* About Me & Skills 2-Column Section */}
      <div className="w-full h-px bg-black/15 my-16 md:my-20"></div>

      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Column 1: About Me */}
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-fraunces font-bold text-3xl text-black whitespace-nowrap">
                About Me
              </h2>
              <Link
                to="/about"
                className="group font-inter text-sm font-semibold text-black flex items-center gap-1 shrink-0"
              >
                <span className="group-hover:underline">Learn more</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            <div className="p-6 md:p-8 rounded-2xl border border-outline-variant/30 bg-white shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-6 flex-grow">
              {/* Small Image */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border border-outline-variant/30 shadow-inner bg-gray-100">
                <img
                  src={personalInfo.avatarPath || '/images/ProperPicture.jpg'}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-gray-100 border border-outline-variant/30 text-xs font-inter text-black font-semibold">
                    {personalInfo.education}
                  </span>
                </div>
                <p className="font-inter text-black leading-relaxed text-sm md:text-base">
                  Specializing in Machine Learning. Previously at Rypaci I.T. Solution as an intern. Seeking a full-time Front-end / Full-stack Developer role.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Tech Stacks */}
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-fraunces font-bold text-3xl text-black whitespace-nowrap">
                Tech Stacks
              </h2>
              <Link
                to="/skills"
                className="group font-inter text-sm font-semibold text-black flex items-center gap-1 shrink-0"
              >
                <span className="group-hover:underline">View all</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            <div className="p-6 md:p-8 rounded-2xl border border-outline-variant/30 bg-white shadow-sm flex flex-col justify-center flex-grow">
              <div className="flex flex-wrap gap-2">
                {[
                  'React',
                  'Next.js',
                  'React Native',
                  'JavaScript',
                  'TypeScript',
                  'Tailwind CSS',
                  'Python',
                  'Machine Learning',
                  'Node.js',
                  'PHP',
                  'Laravel Blade',
                  'MySQL',
                  'REST APIs',
                  'Git & GitHub',
                ].map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-code-sm px-3 py-1.5 rounded-lg bg-gray-100 border border-outline-variant/30 text-black font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <div className="w-full h-px bg-black/15 my-16 md:my-20"></div>

      <section className="text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <span className="font-code-sm text-xs font-semibold text-black/60 uppercase tracking-wider block mb-3">
            HAVE A PROJECT OR ROLE IN MIND?
          </span>
          <h2 className="font-fraunces text-3xl md:text-5xl font-bold text-black tracking-tight mb-4">
            Let’s build something great together.
          </h2>
          <p className="font-inter text-black/80 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
            I’m currently looking for full-time opportunities and internships. Feel free to reach out or just say hi!
          </p>

          <div>
            <Link
              to="/contact"
              className="bg-black text-white font-inter text-sm font-bold px-8 py-4 rounded-[10px] transition-all hover:opacity-90 active:scale-95 text-center inline-flex items-center justify-center gap-2 shadow-sm"
            >
              Get in touch <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
