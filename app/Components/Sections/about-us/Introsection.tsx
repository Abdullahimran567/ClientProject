'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Container from '../../Container';
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const textSwap: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

function IntroSection() {
  const [showdetail, setshowdetail] = useState<boolean>(false);

  return (
    <Container>
      <section className='relative w-full lg:h-screen px-12 lg:px-16 py-16 text-white overflow-hidden'>
        {/* Background Video */}
        <video
          className='absolute inset-0 w-full h-full object-cover'
          src='/videos/aboutus.mp4'
          autoPlay
          loop
          muted
          playsInline
        />

        <div className='absolute inset-0 bg-black/60' />

        <motion.div
          variants={fadeUp}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='relative z-10 h-full grid grid-cols-1 lg:grid-cols-3 items-center gap-12'
        >
          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className='flex flex-col gap-4 text-center lg:text-left'
          >
            <p className='text-2xl lg:text-3xl font-semibold'>
              Polymath Team <br />{' '}
              <span className='text-xl lg:text-2xl font-light'>
                driven by innovation ...
                <br /> providing only the best solutions for your ideas.
              </span>
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className='relative flex justify-center items-center'
          >
            <div className='absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] rounded-full bg-purple-500/40 blur-[120px]' />
          </motion.div>
          <div className='w-full flex items-center justify-center'>
            <AnimatePresence mode='wait'>
              {!showdetail && (
                <motion.div
                  key='short'
                  variants={textSwap}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  transition={{ duration: 0.4 }}
                  className='text-white   h-full w-full  text-xs sm:text-base flex flex-col justify-center items-center
                         max-w-xl text-center lg:text-left lg:ml-auto
                         font-light leading-snug'
                >
                  <p>
                    eForte was established in 2013 as a software development and
                    technology solutions firm for it being the best way to gain
                    and share knowledge for transforming lives and making
                    progress.
                    <br />
                    <br />
                    The small initiative is now 40+ strong and during this time
                    we have not only mastered range of web software development
                    frameworks but we have become highly proficient in speaking
                    the language of business to accommodate our partners.
                  </p>

                  <button
                    onClick={() => setshowdetail(true)}
                    className='self-center lg:self-start pt-2 text-sm text-purple-400
                           hover:text-purple-300 transition-colors'
                  >
                    Read more
                  </button>
                </motion.div>
              )}

              {showdetail && (
                <motion.div
                  key='long'
                  variants={textSwap}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  transition={{ duration: 0.4 }}
                  className='text-white h-full text-xs sm:text-base flex flex-col justify-end
                         max-w-xl text-center lg:text-left lg:ml-auto
                         font-light leading-snug gap-4 gradient-scrollbar'
                >
                  <div className='max-h-[320px] sm:max-h-[380px] overflow-y-auto pr-2'>
                    <p className='opacity-90'>
                      eForte was established in 2013 as a software development
                      and technology solutions firm for it being the best way to
                      gain and share knowledge for transforming lives and making
                      progress.
                      <br />
                      <br />
                      The small initiative is now 40+ strong and during this
                      time we have not only mastered range of web software
                      development frameworks but we have become highly
                      proficient in speaking the language of business to
                      accommodate our partners.
                      <br />
                      <br />
                      In the spirit of constant improvement, we have transformed
                      from Agile masters to Scrum experts. We are now able to
                      give back to community by sharing our knowledge and
                      expertise.
                      <br />
                      <br />
                      We do have open space environment for our Scrum teams to
                      function properly but to keep their focus we have
                      introduced a system as simple as it is effective: Full
                      focus, one Team, one Client.
                      <br />
                      <br />
                      Our dedication to transparency, constant feedback,
                      programming excellence and innovative approach towards
                      solving problems and providing solutions has been
                      recognized by our long-term technology partners. We hope
                      that you will soon join their ranks and discover the sheer
                      joy of working with eForte.
                    </p>
                  </div>

                  <button
                    onClick={() => setshowdetail(false)}
                    className='self-center lg:self-start text-sm text-purple-400
                           hover:text-purple-300 transition-colors'
                  >
                    Read less
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>
    </Container>
  );
}

export default IntroSection;
