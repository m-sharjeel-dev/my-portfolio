"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const navLinks = [
  { label: "ABOUT", href: "/#about", sectionId: "about" },
  { label: "EXPERIENCE", href: "/#experience", sectionId: "experience" },
  { label: "SKILLS", href: "/#skills", sectionId: "skills" },
  { label: "EDUCATION", href: "/#education", sectionId: "education" },
  { label: "PROJECTS", href: "/#projects", sectionId: "projects" },
  { label: "BLOG", href: "/blog", sectionId: null },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isBlogPage = pathname.startsWith("/blog");

  useEffect(() => {
    if (!isHomePage) return;

    const sectionIds = navLinks
      .filter((l) => l.sectionId)
      .map((l) => l.sectionId);

    const observers = [];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    observers.push(observer);
    return () => observers.forEach((o) => o.disconnect());
  }, [isHomePage]);

  const isActive = (link) => {
    if (link.href === "/blog") return isBlogPage;
    if (isHomePage && link.sectionId) return activeSection === link.sectionId;
    return false;
  };

  return (
    <nav className="bg-[#0d1224] border-b border-[#353951]/60 transition-all duration-300">
      <div className="flex items-center justify-between py-4 px-2">
        {/* Logo */}
        <Link
          href="/"
          className="text-[#16f2b3] text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          Sharjeel
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1 text-sm">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 group ${
                    active ? "text-[#16f2b3]" : "text-white hover:text-[#16f2b3]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#16f2b3] transition-all duration-300 ${
                      active ? "w-3/4" : "w-0 group-hover:w-3/4"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-[#16f2b3] focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-1 bg-[#0d1224]/95 backdrop-blur-md border-t border-[#353951]/60">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <li key={link.label} className="w-full text-center">
                <Link
                  onClick={() => setIsOpen(false)}
                  href={link.href}
                  className={`block px-6 py-3 text-sm font-medium transition-colors duration-200 rounded-md mx-4 ${
                    active
                      ? "text-[#16f2b3] bg-[#16f2b3]/10"
                      : "text-white hover:text-[#16f2b3] hover:bg-[#16f2b3]/10"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;