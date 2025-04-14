import ShinyText from "./ShinyText";

const Navbar = ({ homeRef, aboutRef, projectsRef, contactRef }) => {
  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-zinc-950 fixed top-0 left-0 w-full h-16 z-50 flex items-center shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8">
          <button
            onClick={() => scrollTo(homeRef)}
            className="bg-transparent border-none outline-none p-0 m-0 focus:outline-none"
          >
            <ShinyText text="Home" speed={5} />
          </button>
          <button
            onClick={() => scrollTo(aboutRef)}
            className="bg-transparent border-none outline-none p-0 m-0 focus:outline-none"
          >
            <ShinyText text="About" speed={5} />
          </button>
          <button
            onClick={() => scrollTo(projectsRef)}
            className="bg-transparent border-none outline-none p-0 m-0 focus:outline-none"
          >
            <ShinyText text="Projects" speed={5} />
          </button>
          <button
            onClick={() => scrollTo(contactRef)}
            className="bg-transparent border-none outline-none p-0 m-0 focus:outline-none"
          >
            <ShinyText text="Contact" speed={5} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;