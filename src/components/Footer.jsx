import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';
import LegalModal from './LegalModal';

export default function Footer() {
  const [legalModalTab, setLegalModalTab] = useState(null);
  return (
    <footer className="bg-surface-container-low/70 border-t border-black/15 mt-20">
      <div className="py-16 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Logo & Identity */}
          <div className="space-y-4">
            <Link
              to="/"
              className="font-fraunces text-2xl font-bold tracking-tighter text-black inline-block hover:opacity-75 transition-opacity"
            >
              M.Bagal
            </Link>
            <p className="font-body-md text-sm text-black max-w-sm leading-relaxed">
              {personalInfo.name} — Computer Science student at the University of Mindanao bridging
              the gap between front-end UI and intelligent AI systems.
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md bg-[#181717] text-white flex items-center justify-center hover:opacity-85 hover:scale-105 active:scale-95 transition-all shadow-sm"
                title="GitHub"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-85 hover:scale-105 active:scale-95 transition-all shadow-sm"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34z" />
                </svg>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-8 h-8 rounded-md bg-[#EA4335] text-white flex items-center justify-center hover:opacity-85 hover:scale-105 active:scale-95 transition-all shadow-sm"
                title="Gmail"
                aria-label="Gmail"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Directory Links */}
          <div>
            <h4 className="font-inter text-sm font-bold text-black mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-code-sm text-xs">
              <li>
                <Link
                  to="/"
                  className="text-black hover:opacity-75 transition-opacity flex items-center gap-2"
                >
                  <span className="text-black">&gt;</span> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-black hover:opacity-75 transition-opacity flex items-center gap-2"
                >
                  <span className="text-black">&gt;</span> About
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className="text-black hover:opacity-75 transition-opacity flex items-center gap-2"
                >
                  <span className="text-black">&gt;</span> Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-black hover:opacity-75 transition-opacity flex items-center gap-2"
                >
                  <span className="text-black">&gt;</span> Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-black hover:opacity-75 transition-opacity flex items-center gap-2"
                >
                  <span className="text-black">&gt;</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Transmission Nodes */}
          <div>
            <h4 className="font-inter text-sm font-bold text-black mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 font-code-sm text-xs text-black">
              <li className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-black text-[16px]">
                  mail
                </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:opacity-75 transition-opacity"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-black text-[16px]">
                  location_on
                </span>
                <span>{personalInfo.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-black text-[16px]">
                  code
                </span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity"
                >
                  github.com/bagalmarclester
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-black text-[16px]">
                  link
                </span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity"
                >
                  linkedin.com/in/bagalmarclester
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-Footer Bottom Bar */}
        <div className="border-t border-outline-variant/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-inter text-black gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLegalModalTab('privacy')}
              type="button"
              className="hover:underline cursor-pointer bg-transparent border-0 p-0 text-xs font-inter text-black font-normal"
            >
              Privacy Policy
            </button>
            <span className="text-black/40">•</span>
            <button
              onClick={() => setLegalModalTab('terms')}
              type="button"
              className="hover:underline cursor-pointer bg-transparent border-0 p-0 text-xs font-inter text-black font-normal"
            >
              Terms of Service
            </button>
          </div>
          <div>© 2026 {personalInfo.name.toUpperCase()} • ALL RIGHTS RESERVED</div>
        </div>
      </div>

      {/* Legal Modal Popup */}
      <LegalModal
        isOpen={Boolean(legalModalTab)}
        initialTab={legalModalTab || 'privacy'}
        onClose={() => setLegalModalTab(null)}
      />
    </footer>
  );
}
