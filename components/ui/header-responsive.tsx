'use client';

import { useEffect, useState } from 'react';
import Logo from './logo';
import { simpleAnalytics } from './simple-analytics';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
                onClick={() =>
                  simpleAnalytics.track('nav_click', {
                    section: 'services',
                    device: 'desktop',
                  })
                }
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-sm font-medium text-gray-700 hover:text-homestead-heading transition-colors"
                onClick={() =>
                  simpleAnalytics.track('nav_click', {
                    section: 'about',
                    device: 'desktop',
                  })
                }
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="btn-sm btn-homestead-secondary shadow-sm"
                onClick={() =>
                  simpleAnalytics.track('nav_click', {
                    section: 'contact',
                    device: 'desktop',
                  })
                }
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Mobile menu button */}
          {mounted && (
            <button
              className="lg:hidden flex items-center justify-center w-8 h-8 rounded-md hover:bg-homestead-section transition-colors"
              onClick={() => {
                const newState = !mobileMenuOpen;
                setMobileMenuOpen(newState);
                simpleAnalytics.track('mobile_menu_toggle', {
                  action: newState ? 'open' : 'close',
                  timestamp: new Date().toISOString(),
                });
              }}
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
          )}
        </div>

        {/* Mobile menu */}
        {mounted && mobileMenuOpen && (
          <div
            className="lg:hidden mt-2 rounded-2xl shadow-lg shadow-black/[0.03] backdrop-blur-xs overflow-hidden"
            style={{ backgroundColor: 'rgba(248, 245, 242, 0.95)' }}
          >
            <div className="px-4 py-3 space-y-3">
              <a
                href="#services"
                className="block text-sm font-medium text-gray-700 hover:text-homestead-heading transition-colors py-2"
                onClick={() => {
                  setMobileMenuOpen(false);
                  simpleAnalytics.track('nav_click', {
                    section: 'services',
                    device: 'mobile',
                  });
                }}
              >
                Services
              </a>
              <a
                href="#about"
                className="block text-sm font-medium text-gray-700 hover:text-homestead-heading transition-colors py-2"
                onClick={() => {
                  setMobileMenuOpen(false);
                  simpleAnalytics.track('nav_click', {
                    section: 'about',
                    device: 'mobile',
                  });
                }}
              >
                About
              </a>
              <a
                href="#contact"
                className="block text-center btn-sm btn-homestead-secondary shadow-sm mt-3"
                onClick={() => {
                  setMobileMenuOpen(false);
                  simpleAnalytics.track('nav_click', {
                    section: 'contact',
                    device: 'mobile',
                  });
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
