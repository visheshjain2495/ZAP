'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-sky-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
          ✨ ZAP
        </Link>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition">
            Home
          </Link>
          <Link href="/about" className="text-blue-600 hover:text-blue-800 transition">
            About
          </Link>
          <Link href="/ai-tools" className="text-blue-600 hover:text-blue-800 transition">
            AI Tools
          </Link>
          <Link href="/contact" className="text-blue-600 hover:text-blue-800 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
