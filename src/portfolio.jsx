//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import './Navbar.css'
import Image from './Image'
import Header from './Header'
import Paragraph from './Paragraph'



function App() {
  
  function TopNavbar() {
    return (
      
  <div className="navbar">
<div className="Port">
  <h2>Portfolio.</h2>
</div>
   <ul>
     <li><a href="/">Home</a></li>
     <li><a href="/">About Me</a></li>
     <li><a href="/contact">Contact</a></li>
   </ul>
 </div>
);
}

  return (
    <>
     <TopNavbar/> 
    <Image/>
    <Header/>
    
    <Paragraph/>
   
    </>
    
  )
  }
export default App
