'use client';
import React from 'react';
import { motion, Variants, Transition } from 'framer-motion';
import Container from '../Container';
import { EmblaCarousel } from '../Carousel/TestomonialCarousel';

function Testomonials() {
  const ease: Transition['ease'] = [0.25, 0.1, 0.25, 1];

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
        ease: ease,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: ease },
    },
  };

  return (
    <Container>
      <motion.div
        className='relative w-full bg-white flex flex-col px-16 gap-6 py-12'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className='absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none' />
        <motion.span
          className='text-sm flex items-center gap-2 lg:pl-6 text-black'
          variants={itemVariants}
        >
          <span className='h-2 w-2 rounded-full bg-purple-500' />
          Client Testimonials
        </motion.span>

        <motion.div
          className='text-3xl lg:text-4xl lg:pl-6 font-semibold'
          variants={itemVariants}
        >
          <h1>
            What our Happy Client <br /> Say About Us
          </h1>
        </motion.div>

        <motion.div
          className='w-full flex gap-6 mb-16 justify-center'
          variants={itemVariants}
        >
          <div className='w-full lg:w-5/6'>
            <EmblaCarousel />
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
}

export default Testomonials;
