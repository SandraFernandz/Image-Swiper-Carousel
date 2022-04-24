import React from 'react';
import { SliderData } from './SliderData';

function ImageSlider() {
  return (
    <>
      {SliderData.map((slide, index) => {
        return <img src={slide.image} alt="sky" key={index} />;
      })}
    </>
  );
}

export default ImageSlider;
