import "./App.css";
import GradientText from "./components/GradientText";
import LogoWall from "./components/LogoWall";
import Navbar from "./components/Navbar";
import SplitText from "./components/SplitText";
import reactbits from "./assets/react.svg";
import Squares from "./components/Squares";
import { PinContainer } from "./components/PinContainer";
import LetterGlitch from "./components/LetterGlitch";

function App() {
  const logoImgs = [
    {
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      altText: "HTML5 Logo",
    },
    {
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      altText: "React Bits Logo",
    },
    {
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      altText: "React Bits Logo",
    },
    {
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      altText: "React Bits Logo",
    },
    {
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      altText: "React Bits Logo",
    },
    {
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      altText: "React Bits Logo",
    },
    {
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      altText: "React Bits Logo",
    },
    {
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      altText: "React Bits Logo",
    },
    {
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      altText: "React Bits Logo",
    },
    {
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      altText: "React Bits Logo",
    },
    {
      imgUrl: "https://cdn.worldvectorlogo.com/logos/angular-icon.svg",
      altText: "React Bits Logo",
    },
    {
      imgUrl:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      altText: "React Bits Logo",
    },
    {
      imgUrl: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
      altText: "React Bits Logo",
    },
    {
      imgUrl: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      altText: "React Bits Logo",
    },
    {
      imgUrl:
        "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      altText: "React Bits Logo",
    },
    {
      imgUrl: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      altText: "React Bits Logo",
    },
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
        <div style={{ height: "600px", width: "100%", position: "relative" }}>
          <h1 className="text-3xl font-bold p-3 flex bg-[#060606]">
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


      <h1 className="text-3xl font-bold p-3 flex bg-[#060606]">
        My Experiences
      </h1>

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
      </div>
    </>
  );
}

export default App;
