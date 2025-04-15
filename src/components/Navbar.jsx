import ShinyText from "./ShinyText";

const Navbar = ({ aboutRef, projectsRef, contactRef }) => {
  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-zinc-950 fixed top-0 left-0 w-full h-16 z-50 flex items-center shadow-lg">
      <div className="w-full mx-auto px-4 sm:px-6">
        <div className="flex justify-center items-center">
          {/* Mobile Menu Button (hidden on larger screens) */}
          <div className="md:hidden flex-1"></div>
          
          {/* Navigation Links */}
          <div className="flex space-x-4 sm:space-x-6 md:space-x-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-transparent border-none outline-none p-0 m-0 focus:outline-none"
            >
              <ShinyText text="Home" speed={5} className="text-sm sm:text-base" />
            </button>
            <button
              onClick={() => scrollTo(aboutRef)}
              className="bg-transparent border-none outline-none p-0 m-0 focus:outline-none"
            >
              <ShinyText text="About" speed={5} className="text-sm sm:text-base" />
            </button>
            <button
              onClick={() => scrollTo(projectsRef)}
              className="bg-transparent border-none outline-none p-0 m-0 focus:outline-none"
            >
              <ShinyText text="Projects" speed={5} className="text-sm sm:text-base" />
            </button>
            <button
              onClick={() => scrollTo(contactRef)}
              className="bg-transparent border-none outline-none p-0 m-0 focus:outline-none"
            >
              <ShinyText text="Contact" speed={5} className="text-sm sm:text-base" />
            </button>
          </div>
          
          {/* Spacer for mobile (balances the flex layout) */}
          <div className="md:hidden flex-1"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;