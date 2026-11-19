import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';
import NotFound from './components/NotFound';
import WhyChooseFixora from './components/WhyChooseFixora';
import Footer from './components/Footer';
import ServiceDetails from './components/ServiceDetails';

const App = () => {
  const [selectedService, setSelectedService] = useState('');

  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero
                selectedService={selectedService}
                setSelectedService={setSelectedService}
              />
              
              <WhyChooseFixora />
            </>
          }
        />

        <Route path='/contact' element={<Contact/>}/>
 
        <Route path='/services' element={<Services  />}/>
        <Route path='/services/:id' element={<ServiceDetails/>}/>

        <Route path="/about" element={<About />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>

      <Footer />
    </div>
  );
};

export default App;