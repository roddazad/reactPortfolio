import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import AboutBody from '../components/AboutBody'

export default function About() {
  return (
    <>
    <div className="empty-space"></div>
    <div className="bar">
      <Nav />
    </div>
    <div className="project-box-about">
        <AboutBody />
    
    </div>
    <Footer />
    
    </>

  );
} 

