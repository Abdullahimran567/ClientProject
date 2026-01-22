'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../Container';
const data: {
  title: string;
  heading: string;
  description: string;
  image: string;
}[] = [
  {
    title: 'DART',
    heading: 'AI Screening and training tool',
    description:
      'We believe that good talent remains with a company who cares about their professional and personal growth.',
    image: '/Images/ui-ux.webp',
  },
  {
    title: 'EXCEPTIONAL TALENT',
    heading: 'Tailored Talent Solutions for Your Project Success',
    description:
      "At eForte, we’re a software development company providing managed talent for your project needs– we handpick experienced IT professionals tailored for startups, SMEs, and public sector. Our lead software experts choose skilled professionals who go beyond meeting expectations. We're not just providing software engineers; we’re managing your dedicated team members for you, focused on delivering quality solutions and expertly solving problems for your success.",
    image: '/Images/IntroTS.jpg',
  },
  {
    title: 'TRY BEFORE YOU COMMIT',
    heading: 'TRY BEFORE YOU COMMIT',
    description:
      "Try eForte's premium IT staffing solution risk-free for a week. Enhance your business operations confidently, knowing you've found the perfect IT match. You do not pay anything upfront till we find you the talent and you have tested their capabilities for a week.",
    image: '/Images/TryCommit.png',
  },
  {
    title: 'CULTURAL FIT',
    heading: 'Strengthening Collaboration through eForte Cultural Fit ',
    description:
      "At eForte, we’re determined at making sure our team fits well with yours. Our engineers are not just tech experts; they make efforts in becoming part of your team's way of doing things, making sure everyone works together smoothly. It's not just about getting tasks done; it's about building a strong connection between cultures for successful results.",
    image: '/Images/CulturalFit.jpg',
  },
  {
    title: 'RELIABLE REPLACEMENTS',
    heading:
      'Swift Access to Pre-Screened Talent for Seamless Project Continuity',
    description:
      'Count on our continuous support. In the unlikely event of a replacement requirement, tap into our pre-screened talent pool for swift access to alternative candidates. This ensures your project remains on track with zero downtime. We provide you with the replacement and they takeover from the previous resource with 3 days overlapping period at no cost to you.',
    image: '/Images/diff_image_5.png',
  },
];

function SuitingTalent() {
  const [active, setActive] = useState(0);
  const item = data[active];

  return (
    <Container>
      <section className='relative w-full bg-[#0b0b0f] text-white px-14 sm:px-14 md:px-14 lg:px-20 py-12 md:py-16 lg:py-12 overflow-hidden'>
        {/* Background Glow */}
        <motion.div
          className='absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[200px]'
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

        {/* Header */}
        <motion.div
          className='relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16'
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          >
            <motion.p
              className='flex items-center gap-2 text-sm text-gray-400 mb-2 md:mb-3'
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
            >
              <span className='w-2 h-2 bg-purple-500 rounded-full' />
              Our Work
            </motion.p>
            <motion.h2
              className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-light leading-tight'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            >
              10+ Years Exp but <br />
              <span className='font-semibold '>Countless Innovations</span>
            </motion.h2>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className='flex flex-wrap gap-3 md:gap-4 lg:gap-6 text-sm'
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
          >
            {data.map((d, index) => (
              <motion.button
                key={index}
                onClick={() => setActive(index)}
                className={`transition flex items-center gap-2 ${
                  active === index
                    ? 'text-white'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: 0.6 + index * 0.1,
                  ease: 'easeOut',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence>
                  {active === index && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      ↳
                    </motion.span>
                  )}
                </AnimatePresence>
                {d.title}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center'>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <AnimatePresence mode='wait'>
              <motion.div key={active}>
                <motion.h3
                  className='text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold mb-4 md:mb-5 lg:mb-6'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  {item.heading}
                </motion.h3>
                <motion.p
                  className='text-gray-400 leading-relaxed text-sm sm:text-base'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Image (FIXED) */}
          <motion.div
            className='relative w-full h-[280px] sm:h-[300px] md:h-[350px] lg:h-[420px] rounded-2xl overflow-hidden bg-black'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <AnimatePresence mode='wait'>
              <motion.div
                key={active}
                className='relative w-full h-full'
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='object-cover'
                  sizes='(max-width: 1024px) 100vw, 50vw'
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </Container>
  );
}

export default SuitingTalent;
