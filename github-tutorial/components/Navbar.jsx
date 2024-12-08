// components/Navbar.jsx

"use client"; // Use client-side rendering for Next.js 13+

import { useState } from "react";
import { Button } from "./ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-gray-400">MyLogo</a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/services" className="hover:text-gray-400">Services</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="bg-gray-700 text-white"
              >
                Menu
              </Button>
            </PopoverTrigger>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
              <PopoverContent className="absolute bg-gray-700 top-16 right-4 w-48 rounded-lg shadow-lg">
                <a href="/" className="block text-gray-800 py-2">Home</a>
                <a href="/about" className="block text-gray-800 py-2">About</a>
                <a href="/services" className="block text-gray-800 py-2">Services</a>
                <a href="/contact" className="block text-gray-800 py-2">Contact</a>
              </PopoverContent>
            )}
          </Popover>
        </div>
      </div>
    </nav>
  );
}
