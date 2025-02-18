
import { useEffect } from 'react';
import './App.css';
import Featured from './Components/Featured/Featured';
import Introduction from './Components/Introduction/Introduction';
import Navbar from './Components/Navbar/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
          AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
          });
        }, []);
  return (
    <div>
    <div className="main bg-auto min-h-screen">
      <Navbar data-aos="zoom-y-out"/>
      <Featured data-aos="zoom-y-out"/>
    </div>
    <div className='flex bg-indigo-950 justify-center'>
    <Introduction data-aos="zoom-y-out"/>
    </div>
    </div>

  );
}

export default App;
