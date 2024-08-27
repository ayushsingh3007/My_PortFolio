import React from 'react'
import project from '../data/projects.json'
function Project() {
  return (
    <>
      <div className="container project my-3">
        <h1>Project</h1>
        <div className="row d-flex justify-content-center align-item-center">
          {
            project.map((data) => {
              return (<>
                <div key={data.id} className="my-5 mx-3 col-sm-2 col-md-4 col-lg-3">
                  <div className="card" style={{width:'18rem',border:'1px solid yellow',boxShadow:'5px 5px 10px 10px rgba(101,175,10,0.5)'}}>
                    <div className="img d-flex justify-content-center align-item-center p-3" >
                    <img src={data.imageSrc} className="card-img-top" style={{width:'250px',height:'200px',border:'2px solid yellow',borderRadius:'10px'}} alt="..."/>
                    </div>
                      <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.description}</p>
                        <button className="btn btn-primary mx-3">demo</button>
                        <button className="btn btn-warning">code</button>
                      </div>
                  </div>
                </div>
              </>)
            })
          }
        </div>
      </div>
    </>
  )
}

export default Project
