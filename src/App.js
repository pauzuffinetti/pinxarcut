import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';  
import About from './components/About/About';
// import Equipo from './components/Equipo/Equipo';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import Events from './components/Events/Events';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
       <Hero />
      <About />
      {/* <Equipo /> */}
      <Products />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
