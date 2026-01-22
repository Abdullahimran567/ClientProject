'use client';

import React from 'react';
import Container from '../../Container';
import { motion, easeOut } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

function IntroSection() {
  return (
    <Container>
      <div className='relative w-full h-screen bg-black text-white overflow-hidden flex items-center justify-center px-6'>
        <video
          className='absolute inset-0 h-full w-full object-cover opacity-50'
          src='/videos/bgvid4.mp4'
          autoPlay
          loop
          muted
          playsInline
        />
        <motion.div
          className='relative z-10 flex flex-col items-center text-center gap-6 max-w-4xl px-6'
          initial='hidden'
          animate='visible'
          variants={fadeUp}
        >
          <span className='flex items-center gap-2 text-sm tracking-widest uppercase'>
            <span className='h-2 w-2 rounded-full bg-purple-500' />
            Services
          </span>

          <h1 className='text-4xl md:text-5xl lg:text-6xl font-light leading-tight font-semibold'>
            Helping Brands to Grow with
            <br />
            Digital Products and Solutions
          </h1>
        </motion.div>
      </div>
    </Container>
  );
}

export default IntroSection;
