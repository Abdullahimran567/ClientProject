import React from 'react';
import TextTestimonialCard from '../Cards/TextTestimonialCard';
import TestSlider from '../Sliders/TestSlider';
import Container from '../Container';
function TextTestimonials() {
  return (
    <Container>
      <div className='relative w-full bg-white flex flex-col  gap-4 py-12'>
        <div className='absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none' />
        <div className='flex flex-col items-start justify-start px-16'>
          <span className='text-sm flex items-center gap-2 lg:pl-6 text-black'>
            <span className='h-2 w-2 rounded-full bg-purple-500' />
            Founding Team
          </span>

          <div className=' text-xl lg:text-4xl lg:pl-6 font-semibold'>
            <h1>Meet our Team</h1>
          </div>
        </div>
        <div className='w-full flex gap-6 mb-16 justify-center   '>
          <div className='w-full lg:w-5/6'>
            <TestSlider />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default TextTestimonials;
