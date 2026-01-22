import React from 'react';
import HomeSlider from '../Components/Sliders/HomeSlider';
import Introsection from '../Components/Sections/about-us/Introsection';
import Objectives from '../Components/Sections/about-us/Objectives';
import CardParallax from '../Components/Sections/about-us/CardParallax';
import Container from '../Components/Container';

import SliderSection from '../Components/Sections/about-us/SliderSection';
function page() {
  return (
    <div className=''>
      <Introsection />
      <HomeSlider />
      <Objectives />
      <SliderSection />
      <Container>
        <div className='relative min-h-[200vh] flex flex-col gap-2 py-12 px-12 lg:px-16'>
          <div className='flex justify-center items-center w-full text-white'>
            <p className='text-3xl lg:text-5xl font-semibold '>
              Creating solutions that <br /> fuel growth and success
            </p>
          </div>
          <CardParallax />
        </div>
      </Container>
    </div>
  );
}

export default page;
