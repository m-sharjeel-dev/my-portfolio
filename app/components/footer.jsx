// @flow strict
import Link from 'next/link';
import { personalData } from '@/utils/data/personal-data';
import { FaGithub, FaLinkedinIn, FaTwitter, FaStackOverflow } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  { icon: FaGithub, href: personalData.github, label: "GitHub" },
  { icon: FaLinkedinIn, href: personalData.linkedIn, label: "LinkedIn" },
  { icon: FaTwitter, href: personalData.twitter, label: "Twitter" },
  { icon: FaStackOverflow, href: personalData.stackOverflow, label: "Stack Overflow" },
  { icon: SiFiverr, href: personalData.fiverr, label: "Fiverr" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-2/3 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="text-[#16f2b3] text-2xl font-bold">
              Sharjeel Khalid
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Full Stack Developer specializing in PHP, React & Next.js. Based in Lahore, Pakistan. Open to freelance and full-time opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-[#16f2b3] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Connect</h3>
            <a
              href={`mailto:${personalData.email}`}
              className="text-sm text-gray-400 hover:text-[#16f2b3] transition-colors duration-200"
            >
              {personalData.email}
            </a>
            <div className="flex items-center gap-4 mt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-[#353951] text-gray-400 hover:text-[#16f2b3] hover:border-[#16f2b3] transition-all duration-200"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-500 text-center pt-4">
          © {currentYear} Developer Portfolio by{" "}
          <span className="text-[#16f2b3] font-medium">Sharjeel</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;