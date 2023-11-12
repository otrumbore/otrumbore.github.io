import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import SocialIcons from './components/SocialIcons';
import About from './components/About';

function App() {

  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

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
