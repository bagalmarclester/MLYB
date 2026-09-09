import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl border-b border-black/15">
      <div className="flex justify-between items-center h-16 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <Link
          to="/"
          className="font-fraunces text-headline-md font-bold tracking-tighter text-on-surface cursor-pointer transition-all active:scale-95 hover:opacity-75 duration-300"
        >
          M.Bagal
        </Link>

        {/* Right Side: Desktop Nav Links & Contact Button Group */}
        <div className="flex items-center gap-6 lg:gap-8">
          <div className="hidden md:flex items-center gap-6 lg:gap-8 font-inter text-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `${
                    isActive ? 'font-bold text-on-surface' : 'font-normal text-on-surface-variant'
                  } hover:opacity-75 cursor-pointer transition-all duration-300`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 bg-black text-white font-label-caps text-xs font-bold px-6 py-2 rounded-[30px] transition-all hover:opacity-90 active:scale-95 cursor-pointer"
          >
            <span>Contact</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-black hover:opacity-70 p-2 rounded-DEFAULT border border-outline-variant/30 transition-colors focus:outline-none flex items-center justify-center cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-2xl border-b border-outline-variant/30 px-margin-mobile py-6 space-y-4">
          <div className="flex flex-col space-y-3 font-inter text-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `py-2 border-b border-outline-variant/20 flex items-center justify-between transition-colors font-inter ${
                    isActive
                      ? 'text-on-surface font-bold'
                      : 'text-on-surface-variant font-normal hover:opacity-75'
                  }`
                }
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </NavLink>
            ))}
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="bg-black text-white text-center font-label-caps text-xs font-bold py-2.5 rounded-[30px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
