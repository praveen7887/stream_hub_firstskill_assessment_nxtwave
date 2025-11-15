'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-white font-bold text-xl">StreamHub</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/movies" className="text-gray-300 hover:text-white transition-colors">
              Movies
            </Link>
            <Link href="/tv" className="text-gray-300 hover:text-white transition-colors">
              TV Shows
            </Link>
            <Link href="/my-list" className="text-gray-300 hover:text-white transition-colors">
              My List
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              Search
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              Account
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}