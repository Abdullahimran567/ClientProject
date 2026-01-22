import React from 'react';
import Image from 'next/image';

interface Cardprops {
  Imageurl: string;
}

function SliderCard({ Imageurl }: Cardprops) {
  return (
    <div
      className='
        flex items-center justify-center
        w-[80px] h-[80px]
        rounded-2xl
        bg-[#2b2d31]
        border border-white/20
        shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]
      '
    >
      <Image
        src={Imageurl}
        alt='brand logo'
        width={70}
        height={70}
        className='object-contain opacity-90'
      />
    </div>
  );
}

export default SliderCard;
