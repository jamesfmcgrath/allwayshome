'use client';

import { useState, useEffect } from 'react';
import Logo from './logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by ensuring mobile menu is only rendered after hydration
  if (!mounted) {
    return (
      <header className="fixed top-2 z-30 w-full md:top-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div
            className="relative flex h-14 items-center justify-between gap-3 rounded-2xl shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent px-3"
            style={{ backgroundColor: 'rgba(248, 245, 242, 0.9)' }}
          >
            {/* Site branding */}
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Desktop navigation links */}
            <ul className="hidden lg:flex items-center gap-6">
              <li>
                <a
                  href="#services"
                  className="text-sm font-medium text-gray-700 hover:text-homestead-heading transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm font-medium text-gray-700 hover:text-homestead-heading transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="btn-sm btn-homestead-secondary shadow-sm"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@allwayshome.ie"
                  className="btn-sm btn-homestead-primary shadow-sm"
                >
                  Get Quote
                </a>
              </li>
            </ul>

            {/* Mobile menu button placeholder */}
            <div className="lg:hidden flex items-center justify-center w-8 h-8">
              <svg
                className="w-5 h-5 text-homestead-heading"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          </div>
        </div>
      </header>
    );
  }

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative flex h-14 items-center justify-between gap-3 rounded-2xl shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent px-3"
          style={{ backgroundColor: 'rgba(248, 245, 242, 0.9)' }}
        >
          {/* Site branding */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop navigation links */}
          <ul className="hidden lg:flex items-center gap-6">
            <li>
              <a
                href="#services"
                className="text-sm font-medium text-gray-700 hover:text-homestead-heading transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-sm font-medium text-gray-700 hover:text-homestead-heading transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="btn-sm btn-homestead-secondary shadow-sm"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="mailto:info@allwayshome.ie"
                className="btn-sm btn-homestead-primary shadow-sm"
              >
                Get Quote
              </a>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex items-center justify-center w-8 h-8 rounded-md hover:bg-homestead-section transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-5 h-5 text-homestead-heading"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ?
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              : <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden mt-2 rounded-2xl shadow-lg shadow-black/[0.03] backdrop-blur-xs overflow-hidden"
            style={{ backgroundColor: 'rgba(248, 245, 242, 0.95)' }}
          >
            <div className="px-4 py-3 space-y-3">
              <a
                href="#services"
                className="block text-sm font-medium text-gray-700 hover:text-homestead-heading transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="block text-sm font-medium text-gray-700 hover:text-homestead-heading transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block text-center btn-sm btn-homestead-secondary shadow-sm mt-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </a>
              <a
                href="mailto:info@allwayshome.ie"
                className="block text-center btn-sm btn-homestead-primary shadow-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
