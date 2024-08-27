import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from '../Home/Home';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';

function Routing() {
  return (
  

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
  );
}

export default Routing;
