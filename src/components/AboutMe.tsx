import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

export const AboutMe = () => {
  const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <Carousel activeIndex={index} onSelect={() => { }}>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia harum deserunt eaque excepturi deleniti ex, non atque et officiis aperiam quos similique porro error facere quis consequatur reiciendis? Veritatis, neque!</p>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};