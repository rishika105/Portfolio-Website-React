import "./App.css";
import GradientText from "./components/GradientText";
import Navbar from "./components/Navbar";
import SplitText from "./components/SplitText";
import Squares from "./components/Squares";

function App() {
  return (
    <>
      <div className="relative bg-zinc-950 min-h-screen flex w-screen justify-center items-center overflow-hidden">
        <Navbar />

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
              delay={40}
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
              className=" text-2xl font-semibold"
            >
              A Passionate Full-Stack Developer | Exploring New Technologies
            </GradientText>
          </div>
          <div className="text-white md:w-[50%] w-[90%]  flex items-center text-xl font-medium">
            I'm a software enthusiast passionate about problem-solving, web
            development, and gaining knowledge in blockchain. I love staying
            updated with tech trends, and continuously learning to adapt.
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
