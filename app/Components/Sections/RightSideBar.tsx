'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Otherbtn from '../Atoms/Otherbtns';
import GetAQuoteBtn from '../Atoms/GetAQuoteBtn';
import { useScroll } from '../ScrollContext';

function RightSideBar() {
  const [show, setShow] = useState(false);
  const { scrollToForm } = useScroll();

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sidebarVariants: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
    exit: { x: 0, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className='fixed right-0 top-0 h-full  w-12 md:w-14 lg:w-16 flex flex-col items-center justify-center bg-transparent gap-10  z-40'
          variants={sidebarVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          <div>
            <GetAQuoteBtn onScrollToForm={scrollToForm} />
          </div>
          <div className='flex flex-col gap-2'></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default RightSideBar;
