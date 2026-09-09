import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // R-32: Close mobile menu when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl border-b border-on-surface/15">
      <div className="flex justify-between items-center h-16 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <Link
          to="/"
          className="font-fraunces text-headline-md font-bold tracking-tighter text-on-surface cursor-pointer transition-all active:scale-95 hover:opacity-75 duration-300 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-surface focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
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
                    isActive
                      ? 'font-bold text-on-surface underline decoration-2 underline-offset-4'
                      : 'font-normal text-on-surface/70 hover:text-on-surface'
                  } cursor-pointer transition-all duration-300 rounded px-1 py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-surface focus-visible:ring-offset-2 focus-visible:ring-offset-surface`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center min-h-[44px] gap-2 bg-on-surface text-surface font-inter text-xs font-bold px-6 py-2.5 rounded-full transition-all hover:opacity-90 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-surface focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            <span>Contact</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-on-surface hover:opacity-70 min-w-[44px] min-h-[44px] p-2.5 rounded-DEFAULT border border-on-surface/20 transition-colors flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-surface focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="md:hidden bg-surface/95 backdrop-blur-2xl border-b border-on-surface/15 px-margin-mobile py-6 space-y-4"
        >
          <div className="flex flex-col space-y-2 font-inter text-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `min-h-[44px] px-3 py-3 border-b border-on-surface/10 flex items-center justify-between transition-colors font-inter rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-surface focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
                    isActive
                      ? 'text-on-surface font-bold bg-on-surface/[0.04]'
                      : 'text-on-surface/70 font-normal hover:text-on-surface hover:bg-on-surface/[0.02]'
                  }`
                }
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </NavLink>
            ))}
            <div className="pt-3">
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="min-h-[44px] bg-on-surface text-surface text-center font-inter text-xs font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-surface focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
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
