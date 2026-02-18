import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1>About</h1>

         <nav>
        <Link to="mission">Mission</Link> | 
        <Link to="vision">Vision</Link> | 
        <Link to="culture">Culture</Link>
      </nav>

        <Outlet/>
  
    </div>
  )
}

export default About