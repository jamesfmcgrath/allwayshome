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
              <a
                href="#services"
                className="text-sm text-gray-700 hover:text-homestead-heading transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-sm text-gray-700 hover:text-homestead-heading transition-colors"
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
        </div>
      </div>
    </header>
  );
}
