import Link from 'next/link';

import Image from 'next/image';

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2"
      aria-label="All Ways Home"
    >
      <Image
        src="/images/allwayshomelogo.svg"
        alt="All Ways Home Logo"
        width={32}
        height={32}
        className="w-8 h-8"
      />
      <span className="text-xl font-bold text-homestead-heading">
        All Ways Home
      </span>
    </Link>
  );
}
