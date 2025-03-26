import "./App.css";
import GradientText from "./components/GradientText";
import LogoWall from "./components/LogoWall";
import Navbar from "./components/Navbar";
import SplitText from "./components/SplitText";
import reactbits from "./assets/react.svg";
import Squares from "./components/Squares";
import { PinContainer } from "./components/PinContainer";
import LetterGlitch from "./components/LetterGlitch";
import reactIcon from "./assets/react.svg";
import SpotlightCard from "./components/SpotlightCard";
import { SiMinutemailer } from "react-icons/si";
import springbootIcon from "./assets/springboot.png";
import Folder from "./components/Folder";
import Hyperspeed from "./components/Hyperspeed";
import Threads from "./components/Threads";
import Stack from "./components/Stack";
import Aurora from "./components/Aurora";
import Footer from "./components/Footer";
import SplashCursor from "./components/SplashCursor";
import { useRef } from "react";
import { SparklesCore } from "./components/Sparkles";
import { HoverBorderGradient } from "./components/HoverBorderGradient";
import ProjectStack from "./components/Stack";



function App() {
  const containerRef = useRef(null);
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
    id: 1,
    title: "Study Notion - EdTech Platform",
    description: "An interactive Ed-Tech platform built using the MERN stack with features like JWT authentication and payment integration.",
    repoLink: "https://github.com/rishika105/Study-Notion-EdTech",
    demoLink: "https://study-notion-ed-tech-frontend-phi.vercel.app",
    tags: ["React", "Redux", "Node.js", "MongoDB", "Razorpay"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },

  {
    id: 2,
    title: "Event Management System",
    description: "A collaborative project using Advanced Java with MVC + DAO design pattern.",
    repoLink: "https://github.com/rishika105/Event-Management-Advanced-Java",
    tags: ["JSP", "Servlet", "Tomcat", "MySQL", "Razorpay"],
    image: "https://images.unsplash.com/photo-1540317580384-e5d500436cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },

  {
    id: 3,
    title: "E-commerce Platform",
    description: "A full-stack E-commerce application built with Angular and Spring Boot with authentication and payment features.",
    repoLink: "https://github.com/rishika105/Ecommerce",
    tags: ["Angular", "Spring Boot", "MySQL", "Cloudinary", "JWT"],
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    title: "AI Story Builder",
    description: "An AI-powered tool that generates creative stories based on user inputs.",
    repoLink: "https://github.com/rishika105/AI-Story-Builder",
    tags: ["AI", "React", "Node.js", "OpenAI API"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
  ];

  return (
    <>
      <div className="relative bg-zinc-950 min-h-screen flex w-screen justify-center items-center overflow-hidden">
        <Navbar />

        {/* hero section */}
        <Squares
          speed={0.2}
          squareSize={38}
          direction="diagonal"
          borderColor="#222222"
          hoverFillColor="#222"
        />

        <div className="flex justify-center flex-col items-center absolute space-y-6 text-white">
          <div className="flex mx-auto">
            <SplitText
              text="Hello, I am Rishika!"
              className="text-6xl font-bold"
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
              className=" text-2xl font-semibold md:w-[100%] w-[90%]"
            >
              A Passionate Full-Stack Developer | Exploring New Technologies
            </GradientText>
          </div>
          <div className="text-gray-300 md:w-[50%] w-[90%]  flex items-center text-xl font-medium">
            I'm a software enthusiast passionate about problem-solving, web
            development, and gaining knowledge in blockchain. I love staying
            updated with tech trends, and continuously learning to adapt.
          </div>


          <div className="m-40 flex justify-center text-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              onClick={() => {
                // Reset hover state
                document.activeElement.blur(); // Remove focus from button
                // Delay navigation slightly
                setTimeout(() => {
                  window.open(
                    'https://mail.google.com/mail/?view=cm&fs=1&to=yourmail@example.com&su=Let%27s%20Connect&body=Hi%20there!',
                    '_blank'
                  );
                }, 100); // 100ms delay
              }}
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-4 py-2"
            >
              <SiMinutemailer />
              <span>Let's Connect</span>
            </HoverBorderGradient>

          </div>

        </div>

        {/* sec-2 */}
        {/* <div>
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            {/* // Content goes here 
          </SpotlightCard>
        </div> */}
      </div>




      <h1 className="text-3xl font-bold p-3 flex justify-center items-center bg-[#060606]">
        About me
      </h1>


      <div className="relative mt-0">
        <div ref={containerRef} style={{ height: "400px", width: "100%", position: "relative" }}>
          {/* <SplashCursor containerRef={containerRef} /> */}
          <h1 className="text-3xl font-bold p-5 flex justify-center items-center mt-10 bg-[#060606]">
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
      </div>

      <div
        className="h-[30rem] w-full bg-[#060606] flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1
          className="md:text-4xl text-xl lg:text-6xl font-bold text-center text-white relative z-20">
          Code in action. Ideas in motion.
        </h1>
        <div className="w-[40rem] h-40 relative mt-4">
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


      <h1 className="text-3xl font-bold p-5 flex justify-center items-center mt-10 bg-[#060606]">
        My Projects
      </h1>

      <div className="min-h-screen flex items-center justify-center p-4">
        <ProjectStack
          randomRotation={true}
          sensitivity={150}
          sendToBackOnClick={true}
          cardDimensions={{ width: 400, height: 520 }}
          projects={projects}
        />
      </div>

      <div style={{ width: '100%', height: '350px', position: 'relative' }}>
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>


      <div className="w-full bg-[#060606] p-8">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Contact Me
        </h1>
        <Footer />
      </div>

    </>
  );
}

export default App;
