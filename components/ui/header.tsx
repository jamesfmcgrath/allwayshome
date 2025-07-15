import Link from 'next/link';
import Logo from './logo';

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative flex h-14 items-center justify-between gap-3 rounded-2xl shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent px-3"
          style={{ backgroundColor: 'rgba(248, 245, 242, 0.9)' }}
        >
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/contact"
                className="btn-sm btn-homestead-secondary shadow-sm"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/book"
                className="btn-sm btn-homestead-primary shadow-sm"
              >
                Book Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
