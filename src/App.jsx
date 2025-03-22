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

import springbootIcon from "./assets/springboot.png";
import Folder from "./components/Folder";
import Hyperspeed from "./components/Hyperspeed";
import Threads from "./components/Threads";
import Stack from "./components/Stack";
import Aurora from "./components/Aurora";
import Footer from "./components/Footer";
import SplashCursor from "./components/SplashCursor";
import { useRef } from "react";



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
      title: "Real-time Traffic Visualization",
      description: "Live traffic data visualization using TomTom API and React.",
      repoLink: "https://github.com/yourusername/traffic-visualizer",
      img: "/traffic.png", // Add your own image path or URL
    },
    {
      id: 2,
      title: "Blockchain Supply Chain",
      description: "Fraud-proof product tracking with IoT + Blockchain.",
      repoLink: "https://github.com/yourusername/supplychain-blockchain",
      img: "/blockchain.png",
    },
    {
      id: 3,
      title: "Fintech Wallet",
      description: "A MERN-based digital wallet with real-time analytics.",
      repoLink: "https://github.com/yourusername/fintech-wallet",
      img: "/wallet.png",
    },
  ];



  const images = [
    { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
    { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
    { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
    { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
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
          <SplashCursor containerRef={containerRef} />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
          {/* GitHub */}
          <PinContainer title="GitHub" href="https://github.com/rishika105">
            <div className="flex flex-col items-center justify-center p-6 w-[250px] h-[15rem] rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 text-white text-center">
              <h3 className="text-lg font-bold">GitHub</h3>
              <p className="text-sm text-slate-200 mt-2">
                Check out my projects and open-source contributions.
              </p>
            </div>
          </PinContainer>

          {/* LinkedIn */}
          <PinContainer title="LinkedIn" href="https://linkedin.com/in/rishika">
            <div className="flex flex-col items-center justify-center p-6 w-[250px] h-[15rem] rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-white text-center">
              <h3 className="text-lg font-bold">LinkedIn</h3>
              <p className="text-sm text-slate-200 mt-2">
                Connect with me for professional networking and opportunities.
              </p>
            </div>
          </PinContainer>

          {/* LeetCode */}
          <PinContainer title="LeetCode" href="https://leetcode.com/rishika">
            <div className="flex flex-col items-center justify-center p-6 w-[250px] h-[15rem] rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 text-white text-center">
              <h3 className="text-lg font-bold">LeetCode</h3>
              <p className="text-sm text-slate-200 mt-2">
                Explore my coding solutions and problem-solving skills.
              </p>
            </div>
          </PinContainer>

          {/* Email */}
          <PinContainer title="Email" href="mailto:rishika@example.com">
            <div className="flex flex-col items-center justify-center p-6 w-[250px] h-[15rem] rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-white text-center">
              <h3 className="text-lg font-bold">Email</h3>
              <p className="text-sm text-slate-200 mt-2">
                Reach out to me for collaborations or queries.
              </p>
            </div>
          </PinContainer>
        </div>

        {/* 
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
        /> */}

        {/* <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        /> */}
   

        <Footer />

      </div>

      {/* <div className="absolute mx-auto" style={{ height: "500px" }}>
  <Stack
    randomRotation={true}
    sensitivity={180}
    sendToBackOnClick={false}
    cardDimensions={{ width: 200, height: 200 }}
    cardsData={images}
  />
</div> */}

    </>
  );
}

export default App;
