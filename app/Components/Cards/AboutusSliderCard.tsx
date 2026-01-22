'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface Cardprops {
  Imageurl: string;
  text: string;
  color: number[];
}

function AboutusSliderCard({ Imageurl, text, color }: Cardprops) {
  const [onhover, setonhover] = useState(false);
  const rgb = `${color[0]}, ${color[1]}, ${color[2]}`;

  return (
    <div
      className='flex flex-col items-center gap-2 w-[100px]'
      onMouseEnter={() => setonhover(true)}
      onMouseLeave={() => setonhover(false)}
    >
      <div
        className={`relative flex items-center justify-center ${onhover ? 'w-[80] h-[80] lg:w-[120] lg:h-[120]' : 'w-[70] h-[70] lg:w-[80] lg:h-[80]'} rounded-2xl overflow-hidden transition-all duration-300`}
        style={{
          background: 'rgba(255,255,255,0.06)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          boxShadow: `
            inset 0 0 0 1px rgba(${rgb},0.35),
            inset 0 0 20px rgba(${rgb},0.35),
            inset 0 0 40px rgba(${rgb},0.25)
          `,
        }}
      >
        <div
          className='absolute inset-0 pointer-events-none'
          style={{
            background: `radial-gradient(
              circle at top left, 
              rgba(${rgb},0.6),
              transparent 55%
            )`,
            opacity: 0.8,
          }}
        />

        {/* Icon */}
        <Image
          src={Imageurl}
          alt='brand logo'
          width={onhover ? 78 : 48}
          height={onhover ? 78 : 48}
          className='relative z-10 opacity-95 transition-all duration-300'
        />
      </div>

      {!onhover && <h4 className='text-sm text-center'>{text}</h4>}
    </div>
  );
}

export default AboutusSliderCard;
