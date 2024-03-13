import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'; // Import default styles
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import nail1 from './images/nailsOne.PNG';
import nail2 from './images/nailsTwo.PNG'
import nail3 from './images/nailsThree.PNG';
import land1 from './images/landscapingOne.PNG'
import land2 from './images/landscapingTwo.PNG'
import land3 from './images/landscapingThree.PNG'


const ProjectCarousel = () => {
  // State to manage modal visibility and selected image
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open the modal and set selected image
  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  // Function to render a button over the image
  const renderButton = (image) => (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <img src={image} alt="Project" style={{ width: '100%', height: '100%' }} />
      <button className='view' onClick={() => openModal(image)}>View Image</button>
    </div>
  );

  return (
    <div className='carouselContainer'>
      <AwesomeSlider  bullets={true} buttons={true} infinite={true} animation='cubeAnimation'>
        <div>
          <Carousel className='projectContainer' interval={2000} autoPlay={true} showThumbs={false} showIndicators={false} showStatus={false} showArrows={false} swipeable={true} infiniteLoop={true}>
              {renderButton(nail1)}
              {renderButton(nail2)}
              {renderButton(nail3)}
          </Carousel>
        </div>
        <div>
          <Carousel className='projectContainer' interval={2000} autoPlay={true} showThumbs={false} showIndicators={false} showStatus={false} showArrows={false} swipeable={true} infiniteLoop={true}>
              {renderButton(land1)}
              {renderButton(land2)}
              {renderButton(land3)}
          </Carousel>
        </div>
      </AwesomeSlider>
      
      {/* Modal component */}
      {modalIsOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={selectedImage} alt="Projects" style={{ maxWidth: '90%', maxHeight: '90%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }} />
          <button style={{ position: 'absolute', top: '20px', right: '20px', padding: '10px 20px', fontSize: '16px', borderRadius: '5px', background: 'white', border: 'none', cursor: 'pointer' }} onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
}

export default ProjectCarousel;
