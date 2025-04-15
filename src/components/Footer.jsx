import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full relative bg-[#060606] text-white py-8 sm:py-10 px-4 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        {/* Divider Line - now responsive */}
        <div className="w-full h-px bg-slate-400 bg-opacity-25 mb-8 sm:mb-10 mx-auto"></div>
        
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Branding - adjusts order for mobile */}
          <div className="order-2 md:order-1 text-xs sm:text-sm md:text-base font-medium">
            © {new Date().getFullYear()} | All Rights Reserved
          </div>

          {/* Navigation - centered on mobile */}
          <div className="order-1 md:order-2 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <a href="#about" className="hover:text-gray-400 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-gray-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-400 transition-colors">
              Contact
            </a>
            <a
              href="/Rishika_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors font-semibold"
            >
              Resume
            </a>
          </div>

          {/* Made With Love - adjusts order for mobile */}
          <div className="order-3 text-xs sm:text-sm md:text-base font-medium text-center md:text-right">
            Made with <span className="text-pink-500">❤️</span> by Rishika
          </div>
        </div>
      </div>
    </footer>
  );
}