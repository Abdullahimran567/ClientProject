import React from 'react';
import Image from 'next/image';

interface CardProps {
  heading: string;
  subheading: string;
  image: string;
  description: string;
  Num1: string;
  N1description: string;
  Num2: string;
  N2description: string;
}

function ParallaxCard({
  heading,
  subheading,
  image,
  description,
  Num1,
  N1description,
  Num2,
  N2description,
}: CardProps) {
  return (
    <div className='rounded-3xl bg-[#5c5c61] px-6 py-6 text-white grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:gap-14  '>
      {/* LEFT CONTENT */}
      <div className='flex flex-col justify-between gap-10'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-4xl font-bold leading-tight'>{heading}</h2>
          <h3 className='text-xl font-semibold leading-tight'>{subheading}</h3>
        </div>

        <div className='flex flex-col gap-4'>
          <span className='text-sm flex items-center gap-2 text-white'>
            <span className='h-2 w-2 rounded-full bg-purple-500' />
            Our Services Include
          </span>

          <p className='text-sm leading-relaxed text-white max-w-sm'>
            {description}
          </p>
        </div>
      </div>

      {/* CENTER IMAGE */}
      <div className='flex items-center justify-center '>
        <div className='relative overflow-hidden rounded-2xl shadow-xl'>
          <Image
            src={image}
            alt=''
            width={320}
            height={420}
            className='object-cover'
          />
        </div>
      </div>

      {/* RIGHT STATS */}
      <div className='flex flex-col justify-center gap-10'>
        <div className='flex flex-col gap-1'>
          <h4 className='text-4xl font-bold'>{Num1}</h4>
          <p className='text-sm text-white max-w-xs'>{N1description}</p>
        </div>

        <div className='flex flex-col gap-1'>
          <h4 className='text-4xl font-bold'>{Num2}</h4>
          <p className='text-sm text-white max-w-xs'>{N2description}</p>
        </div>
      </div>
    </div>
  );
}

export default ParallaxCard;
