import { useEffect } from 'react';
import './App.css';
import Featured from './Components/Featured/Featured';
import Introduction from './Components/Introduction/Introduction';
import Navbar from './Components/Navbar/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";
import Services from './Components/services/Services';
import FeaturedWork from './Components/FeaturedWork/FeaturedWork';
import Footer from './Components/footer/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className='bg-indigo-950'>
      <div className="main bg-cover min-h-screen" id="home">
        <Navbar data-aos="zoom-y-out"/>
        <Featured data-aos="zoom-y-out"/>
      </div>
      <div className='flex justify-center' id="about">
        <Introduction data-aos="zoom-y-out"/>
      </div>
      <div id="services">
        <Services/>
      </div>
      <div id="work">
        <FeaturedWork/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;