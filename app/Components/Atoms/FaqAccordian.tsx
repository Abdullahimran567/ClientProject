'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqAccordianProps {
  question: string;
  answer: string;
}

const FaqAccordian: React.FC<FaqAccordianProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full border rounded-2xl px-4  border-gray-700 cursor-pointer hover:border-gray-200 '>
      <button
        className='w-full flex justify-between items-center py-4 text-left text-white font-medium cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className='ml-4'>{isOpen ? '−' : '+'}</span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key='content'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='overflow-hidden text-gray-300 text-sm lg:text-base '
          >
            <div className='py-2 border-t border-white/50'>{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqAccordian;
