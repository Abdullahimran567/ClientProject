'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const IntroVideoDiv: React.FC = () => {
  return (
    <div className='relative h-screen w-screen overflow-hidden flex flex-col justify-center items-center'>
      {/* Background video */}
      <video
        className='absolute inset-0 h-full w-full object-cover opacity-50'
        src='/videos/Bgvid3.mp4'
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content */}
      <div className='w-full h-full px-6 lg:px-14 flex flex-col items-center justify-between text-center z-20 text-gray-300'>
        {/* Heading */}
        <div className='w-full h-3/5 flex flex-col justify-end items-center'>
          <motion.h1
            className='font-bold text-xl sm:text-2xl lg:text-3xl leading-snug lg:leading-tight tracking-tight lg:tracking-wide text-shadow-lg'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className='text-2xl sm:text-3xl lg:text-5xl'> Suri-cat </span>
            <br /> The Compliance Intelligence Architecture Layer <br /> for
            Medical Device Companies
          </motion.h1>

          {/* Subtext */}
        </div>
      </div>
    </div>
  );
};

export default IntroVideoDiv;
