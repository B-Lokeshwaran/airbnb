import React from 'react'
import '../css/Firstdiv.css'
const Firstdiv = () => {
  return (
      <>
    <div className="first-div">
        <div className="box1">
            <div className="content">
                <h1>Go Near</h1>
                <p>plan a different kind of getaway to uncover <br/>hidden gems near you</p> 
                <button className="btn btn-danger">Explore Nearby stays</button>
             </div>
        </div>
        <div className="box2">
          <img src={require('../images/bed.jpg')} alt="bed image"/>
        </div>
    </div>
    </>
  )
}

export default Firstdiv;