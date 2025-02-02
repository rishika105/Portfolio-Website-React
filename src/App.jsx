import './App.css'
import Navbar from './components/Navbar';
import Squares from './components/Squares';


function App() {

return (
<>
<Navbar />

  
<Squares 
speed={0.2} 
squareSize={38}
direction='diagonal' // up, down, left, right, diagonal
borderColor='#fff'
hoverFillColor='#222'
/>
</>

 );
}

export default App
