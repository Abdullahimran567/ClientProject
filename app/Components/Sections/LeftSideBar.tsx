'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Otherbtn from '../Atoms/Otherbtns';

function LeftSideBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sidebarVariants: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
    exit: { x: -100, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className='fixed left-0 top-0 h-full w-12 md:w-14 lg:w-16 flex flex-col items-center justify-center bg-transparent gap-2 z-40'
          variants={sidebarVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          <Otherbtn
            url='/Images/LinkedInIcon.png'
            href='https://pk.linkedin.com/company/eforte-solutions?original_referer=https%3A%2F%2Fwww.google.com%2F'
          />
          <Otherbtn
            url='/Images/FaceBookIcon.png'
            href='https://www.facebook.com/eForteSolutions/'
          />
          <Otherbtn
            url='/Images/TwitterIcon.png'
            href='https://x.com/eforte_net'
          />
          <Otherbtn url='/Images/InstagramIcon.png' />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LeftSideBar;
