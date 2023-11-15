import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import SocialIcons from './components/SocialIcons';
import About from './components/About';
import { FaStepForward } from 'react-icons/fa';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import WAVES from 'vanta/dist/vanta.WAVES.min';

function App() {

  const [darkMode, setDarkMode] = useState(true);
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  //function to initally check computer media for dark mode preference
  const userMediaDarkMode = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      //setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }

  //initial App load
  useEffect(() => {
    userMediaDarkMode(); //call media check for darkmode preference
  }, []);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          shininess: 56.00,
          waveHeight: 26.50,
          waveSpeed: 1.25,
          zoom: 0.92
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  //Dark mode stuff

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  //monitor darkmode change for class add and remove
  useEffect(() => {
    /*console.log(darkMode);
    console.log("Theme: ", localStorage.theme);*/

    // Whenever the user explicitly chooses light mode
    if (!darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      // Whenever the user explicitly chooses dark mode
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  }, [darkMode]);

  //End dark mode stuff

  return (
    <>
      <div ref={vantaRef} className='w-full h-screen absolute top-0 left-0 z-0'></div>
      <div className='z-10 relative'>
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
      <Home />
      </div>
      <SocialIcons />
      <About />
      <Skills />
      {/* <Projects />
      <Contact /> */}
    </>
  )
}

export default App
