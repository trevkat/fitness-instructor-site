'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
<nav className="w-full px-6 py-4 flex justify-between items-center bg-white text-black fixed top-0 z-50 shadow-sm"><div className="flex items-center h-20 w-48">
  <Link href="/">
    <img
      src="/navbar.webp"
      alt="SusieKat Fitness Logo"
      className="h-full w-auto object-contain"
    />
  </Link>
</div>
      <ul className="hidden md:flex space-x-8 font-medium">
        <li><Link href="/">Home</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="/programs">Programs</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}