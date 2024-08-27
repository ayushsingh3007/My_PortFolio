import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
   <>
    <div className='container navbar nav_bar'>

     <div className='left nav_items'>Portfolio</div>
     <div className='right navbar'> 
      
       <Link to="/" className='right nav_items'> Home</Link>
       <Link to="/project" className='right nav_items'> Project</Link>
       <Link to="/skills" className='right nav_items'> Skills</Link>
        <Link to="/experience" className='right nav_items'>Experience</Link>
        <Link to="/contact" className='right nav_items'>Contact Me</Link>


     </div>
                  </div>

   </>

  )
}
