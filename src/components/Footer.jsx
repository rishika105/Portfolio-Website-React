import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SparklesCore } from "./Sparkles"; // Uncomment if you want to use sparkles

export default function Footer() {
  return (
    <footer className="w-screen relative bg-[#060606] text-white py-10 px-4 overflow-hidden">
      {/* Optional Sparkle Background */}
      {/* <SparklesCore /> */}
      <div className="w-[80%] flex h-[1px] bg-slate-400 bg-opacity-25 mb-10 ml-[100px]"></div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Branding */}
        <div className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} | All Rights Reserved
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
          <a
            href="/Rishika_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition font-semibold"
          >
            Resume
          </a>
        </div>

        {/* Social Icons */}
        {/* <div className="flex gap-4 text-lg">
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
        </div> */}


        {/* Made With Love */}
        <div className= "text-sm md:text-base font-medium text-center">
          Made with <span className="text-pink-500">❤️</span> by Rishika
        </div>

      </div>
    </footer>
  );
}
