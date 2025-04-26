import "./App.css";
import GradientText from "./components/GradientText";
import LogoWall from "./components/LogoWall";
import Navbar from "./components/Navbar";
import SplitText from "./components/SplitText";
import Squares from "./components/Squares";
import reactIcon from "./assets/react.svg";
import { SiMinutemailer } from "react-icons/si";
import springbootIcon from "./assets/springboot.png";
import Hyperspeed from "./components/Hyperspeed";
import Threads from "./components/Threads";
import Footer from "./components/Footer";
import { useRef } from "react";
import { SparklesCore } from "./components/Sparkles";
import { HoverBorderGradient } from "./components/HoverBorderGradient";
import ProjectStack from "./components/Stack";
import TextCursor from "./components/TextCursor";
import Orb from "./components/Orb";
import { useEffect, useState } from "react";





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


  const logoImgs = [
    {
      imgUrl: "https://img.icons8.com/?size=100&id=QADwelVnDrSS&format=png&color=FFFFFF",
      altText: "HTML5 Logo",
    },
    {
      imgUrl: "https://img.icons8.com/?size=100&id=UpSCHTwpywad&format=png&color=FFFFFF",
      altText: "CSS3 Logo",
    },
    {
      imgUrl: "https://img.icons8.com/?size=100&id=102838&format=png&color=FFFFFF",
      altText: "JavaScript Logo",
    },
    {
      imgUrl: "https://img.icons8.com/?size=100&id=0FC8MqL9J16f&format=png&color=FFFFFF",
      altText: "typescript Logo",
    },
    {
      imgUrl: reactIcon,
      altText: "React Bits Logo",
    },
    {
      imgUrl: "https://img.icons8.com/?size=100&id=71256&format=png&color=FFFFFF",
      altText: "Angular Logo",
    },
    {
      imgUrl: springbootIcon,
      altText: "springboot logo",
    },
    {
      imgUrl: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=FFFFFF",
      altText: "express logo",
    },

    {
      imgUrl: "https://img.icons8.com/?size=100&id=t9oCxEN7McHZ&format=png&color=FFFFFF",
      altText: "Node.js Logo",
    },
    {
      imgUrl: "https://img.icons8.com/?size=100&id=WC9GOvjtKVuH&format=png&color=FFFFFF",
      altText: "mongoDB logo",
    },

    {
      imgUrl: "https://img.icons8.com/?size=100&id=39858&format=png&color=FFFFFF",
      altText: "my sql logo",
    }, {
      imgUrl: "https://img.icons8.com/?size=100&id=GflC6KLkdd0Y&format=png&color=FFFFFF",
      altText: "figma logo",
    },
    {
      imgUrl: "https://img.icons8.com/?size=100&id=KIcFwp9MNQL5&format=png&color=FFFFFF",
      altText: "postman logo",
    },
    {
      imgUrl: "https://img.icons8.com/?size=100&id=32891&format=png&color=FFFFFF",
      altText: "github logo",
    }
  ];

  const projects = [
    {
      id: 5,
      title: "E-commerce Platform",
      description: "A full-stack E-commerce application built with Angular and Spring Boot with authentication roles and payment features.",
      repoLink: "https://github.com/rishika105/Ecommerce",
      tags: ["Angular", "Spring Boot", "MySQL", "Cloudinary", "JWT"],
      image: "https://b1622763.smushcdn.com/1622763/wp-content/uploads/2024/11/eCommerce-Platform-Optimization-1024x577.jpg?lossy=1&strip=1&webp=1"
    },

    {
      id: 4,
      title: "CodeShield AI",
      description: "A GenAI-powered cybersecurity platform for developers that detects code vulnerabilities using models like VulBERTa, VulDeePecker, and GPT, and provides fixes with gamified learning features.",
      repoLink: "https://github.com/rishika105/CodeShield-AI", 
      demoLink: "https://code-shield-ai.vercel.app/", 
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "VulBERTa", "VulDeePecker", "OpenAI", "FlaskAPI"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC1qDRCf6ncd7QDgCCl44fxErdzHwdhdo-d6LCjloRmbgFFg3nPzOf2UecMxnRmfWfrSQ&usqp=CAU"
    },

    {
      id: 3,
      title: "Event Management System",
      description: "A collaborative project using Advanced Java with MVC + DAO design pattern.",
      repoLink: "https://github.com/rishika105/Event-Management-Advanced-Java",
      tags: ["JSP", "Servlet", "Tomcat", "MySQL", "Razorpay"],
      image: "https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/image/2024-09/Event%20management%20software_body.png?h=567b5b6d&itok=QegGeX1a"
    },

    {
      id: 2,
      title: "AI Story Builder",
      description: "A fun storytelling game where you and the AI take turns building wild tales across genres — fantasy, mystery, sci-fi & more!",
      repoLink: "https://github.com/rishika105/AI-Story-Builder",
      demoLink: "https://ai-story-builder-seven.vercel.app/", 
      tags: ["AI", "React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "Three.js"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 1,
      title: "EdTech Platform",
      description: "An interactive Ed-Tech platform built using the MERN stack with features like JWT authentication roles, course management and payment integration.",
      repoLink: "https://github.com/rishika105/Study-Notion-EdTech",
      demoLink: "https://study-notion-ed-tech-frontend-phi.vercel.app",
      tags: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "Razorpay", "Cloudinary", "JWT", "Smtp", "Gemini"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },

  ];

  return (
    <>
      {/* Main Section */}
      <div className="relative bg-[#060606] text-white min-h-screen flex w-screen justify-center items-center overflow-hidden">
        {/* Navigation */}
        <Navbar aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />

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
            <div className="flex justify-center flex-col items-center absolute inset-0 m-6 space-y-6 text-white" >
              <div className="flex mx-auto">
                <SplitText
                  text="Hello, I am Rishika!"
                  className="text-4xl lg:text-6xl font-bold"
                  delay={50}
                  animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                  animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                  easing="easeOutCubic"
                  threshold={0.2}
                  rootMargin="-50px"
                />
              </div>

              <div>
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  showBorder={false}
                  className=" text-2xl font-semibold md:w-[70%] lg:w-[100%] w-[90%]"
                >
                  A Passionate Full-Stack Developer | Exploring New Technologies
                </GradientText>
              </div>

              <div className="text-gray-300 w-full text-center md:w-[50%]  flex items-center text-xl font-medium">
                I'm a software enthusiast passionate about problem-solving, web
                development, and gaining knowledge in blockchain. I love staying
                updated with tech trends, and continuously learning to adapt.
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
                        'https://mail.google.com/mail/?view=cm&fs=1&to=rishikaagarwal2316@gmail.com&su=Let%27s%20Connect&body=Hi%20there!',
                        '_blank'
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


          {/* About Section */}
          <section ref={aboutRef} className="scroll-mt-20 flex items-center justify-center">
            <div className="z-50">
              <h1 className="text-2xl lg:text-4xl font-bold pb-8">
                About me
              </h1>

              <div className="relative flex flex-col items-center justify-center">
                <div className="flex flex-col z-50">
                  <p className="text-center max-w-3xl mx-auto text-lg sm:text-xl px-4">
                    From debugging my first “Hello World” to building full-stack applications and solving 400+ problems on LeetCode and GFG — my journey has been fueled by curiosity and growth. Whether it's freelance work or hackathons, I love turning complex problems into elegant solutions.
                  </p>

                  <p className="mt-10 text-center italic text-sm text-gray-400">
                    “I believe growth isn’t linear — it’s a hyperspeed journey through ideas, code, and creativity.”
                  </p>
                  <p className="mt-8 text-center text-md text-gray-300">
                    When I’m not coding or crushing bugs, you’ll find me sketching, reading books, or vibing with music.
                  </p></div>


                <div className="w-screen h-screen absolute -top-[110px] z-0">
                  <Hyperspeed
                    effectOptions={{
                      onSpeedUp: () => { },
                      onSlowDown: () => { },
                      distortion: 'turbulentDistortion',
                      length: 400,
                      roadWidth: 10,
                      islandWidth: 2,
                      lanesPerRoad: 4,
                      fov: 90,
                      fovSpeedUp: 150,
                      speedUp: 2,
                      carLightsFade: 0.4,
                      totalSideLightSticks: 20,
                      lightPairsPerRoadWay: 40,
                      shoulderLinesWidthPercentage: 0.05,
                      brokenLinesWidthPercentage: 0.1,
                      brokenLinesLengthPercentage: 0.5,
                      lightStickWidth: [0.12, 0.5],
                      lightStickHeight: [1.3, 1.7],
                      movingAwaySpeed: [60, 80],
                      movingCloserSpeed: [-120, -160],
                      carLightsLength: [400 * 0.03, 400 * 0.2],
                      carLightsRadius: [0.05, 0.14],
                      carWidthPercentage: [0.3, 0.5],
                      carShiftX: [-0.8, 0.8],
                      carFloorSeparation: [0, 5],
                      colors: {
                        roadColor: 0x080808,
                        islandColor: 0x0a0a0a,
                        background: 0x000000,
                        shoulderLines: 0xFFFFFF,
                        brokenLines: 0xFFFFFF,
                        leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                        rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                        sticks: 0x03B3C3,
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="w-screen h-[30vh] 2xl:h-[50vh]"></div>

          {/* My Tools and Technologies */}
          <section className="h-full md:h-screen relative flex items-center justify-center">
            <div ref={containerRef}>
              <h1 className="text-2xl lg:text-4xl font-bold p-5 flex justify-center items-center mt-10 bg-[#060606]">
                My Tools and Technologies
              </h1 >
              <TextCursor
                text="⚛️"
                delay={0.01}
                spacing={80}
                followMouseDirection={true}
                randomFloat={true}
                exitDuration={0.3}
                removalInterval={20}
                maxPoints={10}
              />
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

          <div className="w-screen h-[4rem] md:h-[2rem]"></div>

          {/* Quote Section */}
          <section className="relative flex flex-col items-center justify-center">
            <div
              className=" bg-[#060606] overflow-hidden rounded-md">
              <h1
                className="md:text-4xl text-2xl lg:text-6xl font-bold text-center text-white relative z-20">
                Code in action. Ideas in motion.
              </h1>
              <div className="w-[40rem] h-40 relative mt-4 mx-auto">
                {/* Gradients */}
                <div
                  className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div
                  className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div
                  className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div
                  className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full h-full"
                  particleColor="#FFFFFF" />

                {/* Radial Gradient to prevent sharp edges */}
                <div
                  className="absolute inset-0 w-full h-full bg-[#060606] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
              </div>
            </div>
          </section>

          <div className="w-screen h-[1rem]"></div>

          {/* Project Section */}
          <section ref={projectsRef} className=" scroll-mt-20">
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

          {/* Thread Section */}
          <section className="relative lg:h-[350px] w-screen">
            <Threads
              amplitude={1}
              distance={0}
              enableMouseInteraction={true}
            />
          </section>


          {/* Contact Section */}
          <section ref={contactRef} className="relative gap-4 flex flex-col scroll-mt-20">
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
        </main >
      </div>
      
      <div className="w-screen h-px md:h-[2rem]"></div>
      {/* Footer Section */}
      < Footer />
    </>
  );
}

export default App;