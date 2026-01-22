import React from 'react';
import AboutSlider from '../../Sliders/AboutSlider';

function SliderSection() {
  return (
    <section className='w-full min-h-[500px] px-12 sm:px-12 py-16 flex flex-col gap-10 bg-black'>
      {/* Text */}
      <div className='text-white flex flex-col items-center text-center max-w-4xl mx-auto gap-6'>
        <h3 className='text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight '>
          Advanced Tech Stack for <br />
          Performance, Scalability & <br />
          Innovation
        </h3>

        <p className='text-sm sm:text-base text-white/70 max-w-2xl leading-relaxed'>
          Our team of experts is well-versed in all types of advanced
          technologies and their right uses, ensuring no compromise on your
          business growth.
        </p>
      </div>

      {/* Slider */}
      <AboutSlider />
    </section>
  );
}

export default SliderSection;
