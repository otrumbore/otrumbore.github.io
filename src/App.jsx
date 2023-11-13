import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import SocialIcons from './components/SocialIcons';
import About from './components/About';
import { FaStepForward } from 'react-icons/fa';

function App() {

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    //if (darkMode) { document.documentElement.classList.add('dark'); } else { document.documentElement.classList.remove('dark'); }

    //console.log(darkMode);
    userMediaDarkMode();
    //console.log("Theme: ", localStorage.theme);

  }, []);

  //Dark mode stuff

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

  }

  const userMediaDarkMode = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setDarkMode(false);
    }
  }

  useEffect(() => {
    console.log(darkMode);
    console.log("Theme: ", localStorage.theme);
    //userMediaDarkMode();
    // Whenever the user explicitly chooses light mode
    if (!darkMode) {
      //localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      // Whenever the user explicitly chooses dark mode
      //localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    console.log(darkMode);
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
    </>
  )
}

export default App
