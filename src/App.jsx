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
import { BentoGridLayout } from "./components/BentoGridLayout";
import Lanyard from "./components/Lanyard";
import { Canvas } from "@react-three/fiber";

function App() {
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

      <div className="relative mt-0">
        <div style={{ height: "400px", width: "100%", position: "relative" }}>
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


      <h1 className="text-3xl font-bold p-3 flex justify-center items-center bg-[#060606]">
        About me
      </h1>

      <BentoGridLayout />

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

        {/* <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        /> */}

<Canvas>
  <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
</Canvas>
      </div>
    </>
  );
}

export default App;
