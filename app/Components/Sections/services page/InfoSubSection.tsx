'use client';

import React from 'react';
import Image from 'next/image';
import { motion, easeOut, easeInOut } from 'framer-motion';

interface InfoSectionProps {
  label: string;
  title: string;
  heading: string;
  description: string;
  image: string;
  listheading: string;
  list: string[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function InfoSubSection({
  label,
  title,
  heading,
  description,
  image,
  listheading,
  list = [],
}: InfoSectionProps) {
  return (
    <motion.section
      className='w-full bg-black py-18 text-white px-10 flex items-center justify-center '
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeUp}
    >
      <div className='max-w-7xl mx-auto px-6 flex flex-col gap-16 items-center justify-center'>
        <motion.div className='text-center' variants={fadeUp}>
          <span className='flex justify-center items-center gap-2 text-sm tracking-widest uppercase'>
            <span className='h-2 w-2 rounded-full bg-purple-500' />
            {label}
          </span>

          <h2 className='mt-4 text-4xl lg:text-6xl font-light'>{title}</h2>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-3 items-center gap-12'>
          <motion.div className='flex flex-col gap-6' variants={stagger}>
            <motion.h3
              className='text-3xl lg:text-4xl font-light'
              variants={fadeUp}
            >
              {heading}
            </motion.h3>

            <motion.p
              className='text-gray-300 leading-relaxed max-w-md'
              variants={fadeUp}
            >
              {description}
            </motion.p>

            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='w-fit px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition'
            >
              Discover More
            </motion.button>
          </motion.div>

          <motion.div
            className='flex justify-center'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: easeOut }}
            viewport={{ once: true }}
          >
            <motion.div
              className='relative w-[260px] h-[360px] lg:w-[320px] lg:h-[420px] rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(168,85,247,0.35)]'
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: easeInOut }}
            >
              {image && (
                <Image
                  src={image}
                  alt={heading}
                  fill
                  className='object-cover'
                />
              )}
            </motion.div>
          </motion.div>

          <motion.div
            className='ml-5 flex flex-col gap-6 items-start justify-center'
            variants={stagger}
          >
            <motion.h4 className='text-lg font-medium' variants={fadeUp}>
              {listheading}
            </motion.h4>

            <ul className='space-y-3'>
              {list.map((item, index) => (
                <motion.li
                  key={index}
                  className='flex items-center gap-3'
                  variants={fadeUp}
                >
                  <span className='h-1.5 w-1.5 rounded-full bg-purple-500' />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default InfoSubSection;
