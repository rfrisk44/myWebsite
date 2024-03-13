import React from "react";
import img1 from "./images/pexels-tyler-lastovich-699122.webp";
import img2 from "./images/shahadat-rahman-voM1Z9cGPCU-unsplash.webp";
import {Container} from 'react-bootstrap'

const Service = () => {
  return (
    <Container className="text-center">
        <h1 className="text-decoration-underline">Services</h1>
      <div className="services text-center d-flex">
        <div className="service-item">
          <img src={img1} alt="Coding" style={{borderRadius:'1.2rem'}}/>
          <div className="text">
            <h4>Website in a Day</h4>
            <p>
              A website that is built in a shorter amount of time, at the cost
              of customization.
            </p>
          </div>
        </div>
        <div className="service-item">
          <img src={img2} alt="Coding" style={{borderRadius:'1.2rem'}}/>
          <div className="text">
            <h4>Custom Website</h4>
            <p>
              A fully customized website tailored to your liking.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Service;
