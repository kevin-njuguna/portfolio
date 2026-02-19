"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 /* transition-all duration-300 */
      ${scrolled ? "border-b border-white/10 shadow-sm backdrop-blur" : "bg-transparent border-transparent"}
      `}
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center h-16">
        <h1 className="text-lg font-semibold">
          <a href="#home">Kevin Njuguna</a>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-sm text-gray-400">
          <a href="#home" className="hover:text-white">
            Home
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#skills" className="hover:text-white">
            Skills
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black">
          <div className="flex flex-col px-6 py-4 gap-4 text-gray-400 text-sm">
            <a href="#home" onClick={() => setOpen(false)}>
              Home
            </a>
            <a href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
            <a href="#skills" onClick={() => setOpen(false)}>
              Skills
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
