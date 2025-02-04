import "./App.css";
import Navbar from "./components/Navbar";
import SplitText from "./components/SplitText";
import Squares from "./components/Squares";

function App() {
  return (
    <>

   <Navbar />
   

    <div className="bg-zinc-950 flex justify-center items-center w-screen h-[600px] mt-[27px]">
     <Squares
          speed={0.2}
          squareSize={38}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#222222"
          hoverFillColor="#222"
        />
     </div>

     {/* <div>
     <SplitText
          text="Hello, I am Rishika!"
          className="text-5xl font-bold text-center"
          delay={40}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
     </div>  */}



      </>
  );
}

export default App;
