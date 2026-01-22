'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../Container';
interface ServiceItem {
  title: string;
  heading: string;
  description: string;
}

interface ServiceProps {
  arr: ServiceItem[];
}

function CostComparison({ arr }: ServiceProps) {
  const [active, setActive] = useState(0);

  return (
    <Container>
      <div className='relative w-full lg:h-screen grid grid-cols-1 gap-2 lg:grid-cols-2 bg-black text-white overflow-hidden pl-16 sm:pl-20 md:pl-24 pr-16 sm:pr-20 md:pr-24 py-8 sm:py-8 md:pt-8 md:pb-8 lg:pt-8 lg:pb-8 '>
        {/* Grid background */}

        <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none' />
        <div
          className='absolute inset-5 pointer-events-none z-0'
          style={{
            background:
              'linear-gradient(to top left, rgb(152,13,206) 0%, transparent 40%)',
            opacity: 0.5,
            filter: 'blur(40px)',
          }}
        />
        <motion.div
          className='absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple-700/30 blur-[150px]'
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* LEft CARD */}
        <motion.div
          className='relative z-10 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-6 py-6 sm:py-8 md:py-0'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <AnimatePresence mode='wait'>
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className='
              w-full max-w-md rounded-3xl
              border border-white/10
              bg-white/5 backdrop-blur-xl
              p-4 sm:p-6 md:p-8
            '
            >
              <h3 className='text-2xl font-semibold mb-4 sm:mb-5 md:mb-6'>
                {arr[active]?.heading}
              </h3>
              <ul className='space-y-2 sm:space-y-3 md:space-y-4 text-gray-200'>
                {arr[active]?.description.split('\n').map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>{' '}
            </motion.div>
          </AnimatePresence>
        </motion.div>
        {/* Right SIDE */}
        <motion.div
          className='relative z-10 flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center px-4 sm:px-6 md:px-10 lg:px-18 py-8 sm:py-10 md:py-0'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.span
            className='text-sm flex items-center gap-2 text-gray-300'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          >
            <span className='h-2 w-2 rounded-full bg-purple-500' />
            Why it matters
          </motion.span>

          {arr.map((item, index) => (
            <motion.div
              key={item.title}
              className='flex items-center gap-2 sm:gap-3 md:gap-4'
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.1,
                ease: 'easeOut',
              }}
            >
              {/* Rocket animation */}
              <button
                onClick={() => setActive(index)}
                className={`
                 text-left text-2xl md:text-3xl font-light transition-colors duration-300
                ${
                  index === active
                    ? 'text-white'
                    : 'text-gray-500 hover:text-gray-300'
                }
              `}
              >
                {item.title}
              </button>
              <AnimatePresence>
                {index === active && (
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <Image
                      src='/rocket.png'
                      alt='rocket'
                      width={34}
                      height={34}
                      className='rotate-[-115deg]'
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
}

export default CostComparison;
