import React from 'react';
import Home from "./Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

import {
  Routes,
  Route
} from 'react-router-dom';

 export  default function RouteConfit() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} />


      </Routes>
    
  );
}