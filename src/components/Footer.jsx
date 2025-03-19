import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#060606] text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Branding */}
        <div className="text-lg font-semibold">
          © {new Date().getFullYear()} Rishika | All Rights Reserved
        </div>

        {/* Navigation */}
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-gray-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-gray-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400 transition">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
