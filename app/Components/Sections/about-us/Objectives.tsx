'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Container from '../../Container';
import ObjectiveCard from '../../Cards/ObjectiveCard';
import ObjectiveCard2 from '../../Cards/ObjectiveCard2';
import { title } from 'process';
interface Objective {
  title: string;
  description: string;
}

const Objectives: React.FC = () => {
  const objectives: Objective[] = [
    {
      title: 'Our Mission',
      description:
        'We help medical device companies manage compliance more easily and confidently by giving teams clear insights, highlighting issues before they become problems, and supporting faster delivery of life-saving technologies.',
    },
  ];

  interface Objective2 {
    heading: string;
    objectives: { title: string; description: string }[];
  }

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <Container>
      <div className='relative h-screen w-full px-12 lg:px-16 text-white overflow-hidden py-20'>
        <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none' />
        <div
          className='absolute inset-5 pointer-events-none z-0'
          style={{
            background:
              'linear-gradient(to top right, rgb(152,13,206) 0%, transparent 40%)',
            opacity: 0.5,
            filter: 'blur(40px)',
          }}
        />
        <div className='relative z-10 flex flex-col lg:flex-row px-6 lg:px-12 gap-12 lg:gap-0'>
          <div className='w-full lg:w-5/12 flex flex-col justify-start'>
            <h2 className='text-2xl lg:text-4xl font-semibold leading-snug'>
              What Moves and <br />
              Defines Us
            </h2>
          </div>

          <motion.div
            className='w-full lg:w-7/12 flex flex-col gap-8 lg:gap-12 pl-0 lg:pl-16'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
          >
            {objectives.map((obj, index) => (
              <motion.div key={index} variants={cardVariants}>
                <ObjectiveCard
                  title={obj.title}
                  description={obj.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Objectives;
