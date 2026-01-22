'use client';
import { url } from 'inspector';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { motion, Variants } from 'framer-motion';
import { article } from 'motion/react-client';

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const itemVariants2: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function CaseStudies() {
  return (
    <section className='relative w-full flex flex-col items-center gap-16 py-20 px-12 bg-[#0b0b14]'>
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none' />
      {data.map((item, index) => (
        <motion.div
          key={index}
          className='w-11/12 max-w-7xl rounded-2xl overflow-hidden
                     bg-gradient-to-r from-[#0f1020] to-[#0b0b14]
                     shadow-xl z-2'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className='grid grid-cols-1 lg:grid-cols-2 items-stretch'>
            {/* LEFT CONTENT */}
            <motion.div className='p-6 lg:p-12 flex flex-col gap-5 text-white '>
              <motion.span
                variants={itemVariants}
                className='text-sm uppercase tracking-widest
                           bg-[linear-gradient(213deg,#dd0dce_-39.81%,#540dce_85.21%)]
                           bg-clip-text text-transparent'
              >
                {item.title}
              </motion.span>

              <motion.h2
                variants={itemVariants}
                className='text-2xl lg:text-4xl font-semibold'
              >
                {item.heading}
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className='text-gray-300 leading-relaxed  text-sm'
              >
                {item.description}
              </motion.p>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className='mt-6 w-fit px-6 py-3 rounded-full
                           bg-[linear-gradient(213deg,#dd0dce_-39.81%,#540dce_85.21%)]
                           text-white font-medium'
              >
                <Link href={``}>Discover More</Link>
              </motion.button>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              className='relative w-full min-h-[300px] lg:min-h-[400px] flex items-center justify-center'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {/* <div
                className='absolute inset-0 bg-center bg-cover'
                style={{ backgroundImage: `url(${item.image})` }}
              /> */}
              <Image src={`${item.image}`} alt='' width={400} height={400} />
              <div className='absolute inset-0 bg-black/20' />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

export default CaseStudies;

const data: {
  image: string;
  title: string;
  heading: string;
  description: string;
  link: string;
}[] = [
  {
    image: '/Images/Suri2.jpg',
    title: 'Suricat',
    heading: 'What Suricat does',
    description:
      'Suricat reads and analyzes your existing documents and shows you where things don’t match, where risks may exist, and what needs attention. Suricat does not make decisions for you and does not change your records. It simply gives you clear, helpful insights that your team reviews and approves. This keeps your experts in control and aligns with FDA expectations for safe and responsible software use.',
    link: '/Krank',
  },
];
