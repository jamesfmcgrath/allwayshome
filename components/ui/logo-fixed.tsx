import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2">
      <Image
        src="/images/allwayshomelogo.svg"
        alt=""
        width={32}
        height={32}
        className="w-8 h-8"
      />
      <span className="text-lg sm:text-xl font-bold text-homestead-heading">
        All Ways Home
      </span>
    </Link>
  );
}
