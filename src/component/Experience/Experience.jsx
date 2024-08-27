import React from 'react'
import experience from "../data/experience.json"
function Experience() {
  return (
    <>
     <div className="container exp">
     <h1>Experience</h1>
     {
        experience.map((data)=>{
        return(
          <>
            <div key={data.id} className='exp-item text-center my-5'>
                <div className="left">
                    <img src={`/assets/${data.imageSrc}`} alt="" />
                </div>
                <div className="right">
                    <h2>{data.role}</h2>
                    <h4>
                    <span style={{color:'yellowgreen'}}> {data.startDate}</span>
                     {data.endDate} {data.location}</h4>
\                </div>
            </div>
          </>  
        )
        })
     }
    </div> 
    </>
  )
}

export default Experience;
