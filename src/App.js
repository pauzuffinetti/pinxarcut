import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';  
import Historia from './components/Historia/Historia';
import Equipo from './components/Equipo/Equipo'; 
import Jamones from './components/Jamones/Jamones';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import Events from './components/Events/Events';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Historia />
      <Equipo />
      <Jamones />
      <Products />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
