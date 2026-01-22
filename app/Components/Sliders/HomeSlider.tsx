import React from 'react';
import SliderCard from '../Cards/SliderCard';
import Container from '../Container';

const images: string[] = [
  'https://eforte.io/images/Trusted_Brands_2.png',
  'https://eforte.io/images/Trusted_Brands_3.png',
  'https://eforte.io/images/Trusted_Brands_4.png',
  'https://eforte.io/images/Trusted_Brands_5.png',
  'https://eforte.io/images/Trusted_Brands_6.png',
  'https://eforte.io/images/Trusted_Brands_7.png',
  'https://eforte.io/images/Trusted_Brands_8.png',
  'https://eforte.io/images/Trusted_Brands_1.png',
  'https://eforte.io/images/Trusted_Brands_2.png',
  'https://eforte.io/images/Trusted_Brands_3.png',
  'https://eforte.io/images/Trusted_Brands_4.png',
  'https://eforte.io/images/Trusted_Brands_5.png',
  'https://eforte.io/images/Trusted_Brands_6.png',
  'https://eforte.io/images/Trusted_Brands_7.png',
  'https://eforte.io/images/Trusted_Brands_8.png',
  'https://eforte.io/images/Trusted_Brands_1.png',
];

function HomeSlider() {
  return (
    <Container>
      <div className='relative w-full overflow-hidden bg-black text-white pl-16 sm:pl-20 md:pl-24 pr-16 sm:pr-20 md:pr-24  '>
        {/* Grid background */}
        <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none' />

        <div className='relative z-10 flex items-center h-24 sm:h-28 md:h-32 lg:h-36'>
          <div id='home-slider' className='flex gap-6'>
            {[...images, ...images].map((image, index) => (
              <SliderCard key={index} Imageurl={image} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HomeSlider;
