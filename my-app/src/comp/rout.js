import React from 'react';
import Home from './home.js';
import {Routes, Route} from 'react-router-dom'
import About from './about.js';
import Work from './work.js';
import Contact from './contact.js';

const Rout = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
      
    </>
  );
}

export default Rout;
