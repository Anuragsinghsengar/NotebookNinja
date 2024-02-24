import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/notecontext";

function About() {
  return (
    <>
      <div className="container" style={{color:'white',backgroundColor:'#603A28'}}>
        <div className="accordion" id="accordionExample" >
          <div className="accordion-item" style={{color:'white',backgroundColor:'#016764'}}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{color:'white',backgroundColor:'#4D4D4D'}}
                >
                About Application
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Notebook Ninja is an online notebook which is used to store
                notes online. We can store many note which could be any task
                which we need to complete or any other task
              </div>
            </div>
          </div>
          <div className="accordion-item" style={{color:'white',backgroundColor:'#016764'}}> 
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{color:'white',backgroundColor:'#4D4D4D'}}
                >
                How to Use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
              >
              <div className="accordion-body">
                First you would have to signup with a random account and then
                and then login using the password and email you signed up with
                and then store you notes
              </div>
            </div>
          </div>
          <div className="accordion-item" style={{color:'white',backgroundColor:'#016764'}}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{color:'white',backgroundColor:'#4D4D4D'}}
                >
                Why To Use
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                It is a good and very easy to use appplication you can store
                your notes and can access the notes from anywhere pc easily
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
