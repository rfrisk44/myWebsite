import React, { useRef } from 'react';

const HorizontalScroll = ({ children }) => {
  // Ref for the container element
  const containerRef = useRef(null);

  // Event handler for horizontal scrolling
  const handleHorizontalScroll = (event) => {
    // Calculate the amount to scroll horizontally based on the scroll wheel delta
    const delta = event.deltaY || event.detail || event.wheelDelta;
    const scrollDistance = 100; // Adjust this value as needed
    const scrollDirection = delta < 0 ? -1 : 1;
    console.log('*******')

    // Scroll horizontally by adjusting the scrollLeft property of the container
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollDistance * scrollDirection;
    }
  };

  return (
    <div className="horizontal-scroll-container" onWheel={handleHorizontalScroll} ref={containerRef}>
      {children}
    </div>
  );
};

export default HorizontalScroll;
