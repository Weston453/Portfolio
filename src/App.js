import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
