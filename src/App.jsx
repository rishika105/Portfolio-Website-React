import "./App.css";
import GradientText from "./components/GradientText";
import LogoWall from "./components/LogoWall";
import Navbar from "./components/Navbar";
import SplitText from "./components/SplitText";
import reactbits from "./assets/react.svg";
import SpotlightCard from "./components/SpotlightCard";
import Squares from "./components/Squares";
import { PinContainer } from "./components/PinContainer";

function App() {
  const logoImgs = [
    { imgUrl: reactbits, altText: "React Bits Logo" },
    { imgUrl: reactbits, altText: "React Bits Logo" },
    { imgUrl: reactbits, altText: "React Bits Logo" },
    { imgUrl: reactbits, altText: "React Bits Logo" },
    { imgUrl: reactbits, altText: "React Bits Logo" },
    { imgUrl: reactbits, altText: "React Bits Logo" },
    { imgUrl: reactbits, altText: "React Bits Logo" },
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

      <div style={{ height: "600px", width: "100%", position: "relative" }}>
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

    <div className="flex w-full flex-wrap">
    <div className="h-[40rem] w-full flex items-center justify-center">
        <PinContainer
          title="/rishika.github.com"
          href="https://github.com/rishika105"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
             Github
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
              I have built exciting projects and open source contributions. 
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div>

      <div className="h-[40rem] w-full flex items-center justify-center">
        <PinContainer
          title="/rishika.github.com"
          href="https://github.com/rishika105"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
             Linked In
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
              I have built exciting projects and open source contributions. 
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div>


      <div className="h-[40rem] w-full flex items-center justify-center">
        <PinContainer
          title="/rishika.github.com"
          href="https://github.com/rishika105"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
             Leetcode
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
              I have built exciting projects and open source contributions. 
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div>


      <div className="h-[40rem] w-full flex items-center justify-center">
        <PinContainer
          title="/rishika.github.com"
          href="https://github.com/rishika105"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
             Email
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
              I have built exciting projects and open source contributions. 
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div>
    </div>
    </>
  );
}

export default App;
