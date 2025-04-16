import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full relative bg-[#060606] text-white  py-8 sm:py-10 px-4 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        {/* Divider Line */}
        <div className="w-full h-px bg-slate-400 bg-opacity-25 mb-8 sm:mb-10 mx-auto" />

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          {/* Left - Copyright */}
          <div className="text-sm sm:text-md font-medium text-center md:text-left">
            © {new Date().getFullYear()} | All Rights Reserved
          </div>

          {/* Center - Email and Resume */}
          <div className="flex flex-row items-center mx-auto gap-6 text-sm sm:text-md text-center">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rishikaagarwal2316@gmail.com&su=Let%27s%20Connect&body=Hi%20there!"
              className="hover:text-gray-400 transition-colors"
              target="_blank"
            >
              <div className="flex gap-1">   Gmail <MdArrowOutward className="m-[3px] text-[1rem]" /></div>
            </a>
            <a
              href="/Rishika_Resume.pdf"
              download
              className="hover:text-gray-400 transition-colors font-semibold"
            >
              <div className="flex gap-1">Download Resume <MdArrowOutward className="m-[3px] text-[1rem]" /></div>

            </a>
          </div>

          {/* Right - Signature */}
          <div className="text-sm sm:text-md font-medium text-center md:text-right">
            Made with <span className="text-pink-500">❤️</span> by Rishika
          </div>
        </div>
      </div>
    </footer>
  );
}
