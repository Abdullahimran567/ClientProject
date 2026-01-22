'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import NavBtn from '../Atoms/NavBtn';

const navLinks = [
  { label: 'Home', link: '/' },
  { label: 'About Us', link: '/about-us' },
  { label: 'Services', link: '/services' },
  { label: 'Process', link: '/process' },
];

interface ModalProps {
  onClicked: () => void;
}

/* -------------------- Animations -------------------- */

const modalVariants: Variants = {
  hidden: {
    x: '-100%',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 120,
    },
  },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: 'easeInOut',
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
    },
  }),
};

function NavlinksModal({ onClicked }: ModalProps) {
  return (
    <div className='fixed inset-0 z-[998] bg-transparent' onClick={onClicked}>
      <motion.aside
        className='fixed top-0 left-0 z-[999] h-full w-2/3 md:w-1/3 bg-black/70 backdrop-blur-lg text-white p-6 flex flex-col gap-6'
        variants={modalVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        onClick={e => e.stopPropagation()}
      >
        <div className='flex justify-end'>
          <button
            onClick={onClicked}
            className='text-4xl font-bold leading-none'
            aria-label='Close menu'
          >
            ×
          </button>
        </div>

        <nav className='flex flex-col gap-4 mt-4'>
          {navLinks.map((link, i) => (
            <motion.div
              key={link.label}
              variants={itemVariants}
              initial='hidden'
              animate='visible'
              custom={i}
              onClick={onClicked}
            >
              <NavBtn label={link.label} link={link.link} />
            </motion.div>
          ))}
        </nav>
      </motion.aside>
    </div>
  );
}

export default NavlinksModal;
