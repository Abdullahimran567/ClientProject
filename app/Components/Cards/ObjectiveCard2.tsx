'use client';
import React, { useState } from 'react';

interface ObjectiveItem {
  title: string;
  description: string;
}

interface Props {
  title: string;
  objectives: ObjectiveItem[];
}

const ObjectiveCard2: React.FC<Props> = ({ title, objectives }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={`
        relative w-full group border-b border-white/10 pb-6 transition-all duration-300
        after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-white
        after:origin-left after:scale-x-0 after:transition-transform after:duration-300
        ${isOpen ? 'after:scale-x-100' : 'group-hover:after:scale-x-100'}
      `}
    >
      <div
        className='flex justify-between items-center cursor-pointer select-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className='text-2xl lg:text-3xl font-light tracking-wide text-white group-hover:text-purple-200 transition-colors'>
          {title}
        </h3>

        <div
          className={`
            flex items-center justify-center w-8 h-8 rounded-full border border-white/20 
            transition-transform duration-300 ease-in-out
            ${isOpen ? 'rotate-180 bg-white/10' : 'rotate-0 group-hover:bg-white/5'}
          `}
        >
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='text-white'
          >
            <path
              d='M6 10L6 2M6 10L2 6M6 10L10 6'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </div>

      <div
        className={`
    overflow-hidden transition-all duration-300 ease-out
    ${isOpen ? 'max-h-[9999px] mt-4 opacity-100' : 'max-h-0 mt-0 opacity-0'}
  `}
      >
        <ul className='objective-list text-base font-light text-gray-300 leading-relaxed max-w-lg'>
          {objectives.map((obj, index) => (
            <li key={index} className='flex flex-col gap-1'>
              <strong className='font-bold'>{obj.title}</strong>
              {obj.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ObjectiveCard2;
