const Navbar = ({ aboutRef, projectsRef, contactRef }) => {
  return (
    <div className="bg-zinc-950 flex fixed top-0 left-0 w-full h-[60px] z-50">
      <div className="space-x-6 flex mx-auto mt-4">
        <span
          className="cursor-pointer text-white"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Home
        </span>
        <span
          className="cursor-pointer text-white"
          onClick={() => aboutRef.current.scrollIntoView({ behavior: "smooth" })}
        >
          About
        </span>
        <span
          className="cursor-pointer text-white"
          onClick={() => projectsRef.current.scrollIntoView({ behavior: "smooth" })}
        >
          Projects
        </span>
        <span
          className="cursor-pointer text-white"
          onClick={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}
        >
          Contact
        </span>
      </div>
    </div>
  );
};

export default Navbar;
