import React, { useEffect, useRef } from 'react'
import hero from "../data/hero.json"
import Typed from "typed.js"



function Home() {
  const typeRef =useRef(null);
  useEffect(()=>{
    const options={
      strings:["Welcome in my portfolio" , "My Name is Aysuh singh.", "MERN STACK Developer and Android Developer" ],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }
    const typed =new Typed(typeRef.current,options)
    return ()=>{
      typed.destroy()
    }
  },[])
  return (
  <>
     <div className='container home'>
      <div className="left">
        <h3 ref={typeRef}></h3>
        <button className='btn btn-outline-warning'>Download resume</button>
      </div>
      <div className="right">
        <div className="img">
          <img src={`/assets/${hero.imgSrc}`} alt="heroimg" />
        </div>
      </div>
      </div> 
  </>
  )
}

export default Home;
