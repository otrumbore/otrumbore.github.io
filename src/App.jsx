import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import SocialIcons from './components/SocialIcons';
import About from './components/About';
import { FaStepForward } from 'react-icons/fa';
import Skills from './components/Skills';

function App() {

  const [darkMode, setDarkMode] = useState(true);

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
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
      <Home />
      <SocialIcons />
      <About />
      <Skills />
    </>
  )
}

export default App
