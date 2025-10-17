import "./App.css";
import GradientText from "./components/GradientText";
import LogoWall from "./components/LogoWall";
import Navbar from "./components/Navbar";
import SplitText from "./components/SplitText";
import Squares from "./components/Squares";
import { SiMinutemailer } from "react-icons/si";
import Threads from "./components/Threads";
import Footer from "./components/Footer";
import { useRef } from "react";
import { HoverBorderGradient } from "./components/HoverBorderGradient";
import ProjectStack from "./components/Stack";
import Orb from "./components/Orb";
import { useEffect, useState } from "react";
import { CardSpotlightDemo } from "./components/CardSpotlight";
import { projects } from "./assets/data/project";
import { experiences } from "./assets/data/experience";
import { logoImgs } from "./assets/data/techlogos";
import Education from "./components/Education";

function App() {
  const [cardSize, setCardSize] = useState({ width: 420, height: 520 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardSize({ width: 350, height: 550 }); // mobile
      } else if (width < 1024) {
        setCardSize({ width: 400, height: 560 }); // tablet
      } else {
        setCardSize({ width: 450, height: 550 }); // desktop
      }
    };

    handleResize(); // Set initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      {/* Main Section */}
      <div className="relative bg-[#060606] text-white min-h-screen flex w-screen justify-center items-center overflow-hidden">
        {/* Navigation */}
        <Navbar
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />

        {/* Main Content */}
        <main className="flex-1 space-y-24 w-full">
          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center">
            <div className="w-full h-full">
              <Squares
                speed={0.2}
                squareSize={38}
                direction="diagonal"
                borderColor="#222222"
                hoverFillColor="#222"
              />
            </div>
            <div className="flex justify-center flex-col items-center absolute inset-0 m-6 space-y-6 text-white">
              <div className="flex mx-auto">
                <SplitText
                  text="Hello, I am Rishika!"
                  className="text-4xl lg:text-6xl font-bold"
                  delay={50}
                  animationFrom={{
                    opacity: 0,
                    transform: "translate3d(0,50px,0)",
                  }}
                  animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                  easing="easeOutCubic"
                  threshold={0.2}
                  rootMargin="-50px"
                />
              </div>

              <div>
                <GradientText
                  colors={[
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                  ]}
                  animationSpeed={3}
                  showBorder={false}
                  className=" text-2xl font-semibold md:w-[70%] lg:w-[100%] w-[90%]"
                >
                  A Passionate Full-Stack Developer | Exploring New Technologies
                </GradientText>
              </div>

              <div className="text-gray-300 w-full text-center md:w-[50%]  flex items-center text-xl font-medium">
                I'm a software enthusiast passionate about problem-solving, web
                development, Cloud and AI. I love staying updated with tech
                trends, and continuously learning to adapt to new technologies
                and exploring them.
              </div>

              <div className="flex justify-center text-center">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  onClick={() => {
                    // Reset hover state
                    document.activeElement.blur(); // Remove focus from button
                    // Delay navigation slightly
                    setTimeout(() => {
                      window.open(
                        "https://mail.google.com/mail/?view=cm&fs=1&to=rishikaagarwal2316@gmail.com&su=Let%27s%20Connect&body=Hi%20there!",
                        "_blank"
                      );
                    }, 100); // 100ms delay
                  }}
                  className="bg-black text-white flex items-center space-x-2 px-4 py-2"
                >
                  <SiMinutemailer />
                  <span>Let's Connect</span>
                </HoverBorderGradient>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section
            ref={aboutRef}
            className="scroll-mt-20 flex items-center justify-center"
          >
            <div className="">
              <h1 className="text-2xl lg:text-4xl font-bold pb-8">
                My Education
              </h1>
              <Education />
            </div>
          </section>

          {/* My Tools and Technologies */}
          <section className="h-full md:min-h-[80vh] relative flex items-center justify-center mb-10">
            <div ref={containerRef}>
              <h1 className="text-2xl lg:text-4xl font-bold p-5 flex justify-center items-center bg-[#060606]">
                My Tools and Technologies
              </h1>
              <LogoWall
                items={logoImgs}
                direction="horizontal"
                pauseOnHover={true}
                size="clamp(8rem, 1rem + 20vmin, 25rem)"
                duration="60s"
                bgColor="#060606"
                bgAccentColor="#111111"
              />
            </div>
          </section>

          {/* Project Section */}
          <section ref={projectsRef} className=" scroll-mt-14">
            <h1 className="text-2xl lg:text-4xl font-bold pb-5 flex justify-center items-center bg-[#060606]">
              My Projects
            </h1>

            <div className=" flex items-center justify-center p-4">
              <ProjectStack
                randomRotation={true}
                sensitivity={150}
                sendToBackOnClick={true}
                cardDimensions={cardSize}
                projects={projects}
              />
            </div>
          </section>

          <div className="w-screen h-[1vh] 2xl:h-[5vh]"></div>

          {/* Experiences */}
          <section>
            <h1 className="text-2xl lg:text-4xl font-bold pb-5 flex justify-center items-center bg-[#060606]">
              Experiences
            </h1>
            <div className="mt-10">
              <CardSpotlightDemo experiences={experiences} />
            </div>
          </section>

          {/* Thread Section */}
          <section className="relative lg:h-[350px] w-screen">
            <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
          </section>

          {/* Contact Section */}
          <section
            ref={contactRef}
            className="relative gap-4 flex flex-col scroll-mt-20"
          >
            <h1 className="text-2xl lg:text-4xl font-bold text-white text-center">
              Connect with me
            </h1>

            <div className="w-[100%] h-[500px] lg:h-[600px] relative">
              <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
              >
                {/* This will be rendered inside the Orb's container div */}
                <a
                  href="https://bento.me/rishika105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <span className="text-white font-bold text-lg sm:text-2xl md:text-3xl hover:text-white pointer-events-auto cursor-pointer">
                    Click Me!
                  </span>
                </a>
              </Orb>
            </div>
          </section>
        </main>
      </div>

      <div className="w-screen h-px md:h-[2rem]"></div>
      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default App;
