'use client';
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import Container from '../Container';
const data: { image: string; heading: string; description: string }[] = [
  {
    image: '/Images/C1.png',
    heading: 'SOC 2 Type 2 Certification',
    description:
      'This certification verifies that eForte maintains stringent security protocols and operational excellence over an extended period of time.',
  },
  {
    image: '/Images/C2.png',
    heading: 'ISO 27001 Certified',
    description:
      'Our ISO 27001 standard ensures enhanced security for data, reduces risk across business operations, and demonstrates a robust ability to counter evolving security threats.',
  },
  {
    image: '/Images/C3.jpeg',
    heading: 'NIST AI Risk Management Framework Compliant',
    description:
      'eForte has achieved compliance with the NIST AI Risk Management Framework, showcasing strong governance, effective risk management, and transparency in the design and deployment of all AI systems.',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // easeOut curve (TS-safe)
    },
  },
};

function Certification() {
  return (
    <Container>
      <div className='w-full flex flex-col bg-gradient-to-b from-[#0A0B1A] to-[#05060F] text-white'>
        {/* Header Section */}
        <motion.div
          className='w-full flex flex-col gap-6 items-center justify-center py-16 px-12'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            className='px-4 py-1 rounded-full text-xs tracking-widest text-white 
          bg-[linear-gradient(213deg,#dd0dce_-39.81%,#540dce_85.21%)] font-semibold'
          >
            UNCOMPROMISED DIGITAL SECURITY
          </motion.div>

          <motion.div
            variants={itemVariants}
            className='text-3xl lg:text-5xl font-semibold text-center'
          >
            Secure-by-Design Data Practices
          </motion.div>

          <motion.div
            variants={itemVariants}
            className='max-w-3xl text-center text-gray-400 text-sm lg:text-base leading-relaxed'
          >
            We implement stringent security controls and robust protocols to
            safeguard all digital assets and data. Our layered security
            framework is designed to address evolving threats, ensuring
            reliability and peace of mind for our clients.
          </motion.div>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          className='w-full grid grid-cols-1 lg:grid-cols-3 gap-12 px-6 lg:px-20 pb-20'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='flex flex-col gap-6 items-center text-center'
            >
              <div className='w-28 h-28 relative'>
                <Image
                  src={item.image}
                  alt={item.heading}
                  fill
                  className='object-contain rounded-full'
                />
              </div>

              <h3 className='font-semibold text-lg lg:text-xl'>
                {item.heading}
              </h3>

              <p className='text-gray-400 text-sm leading-relaxed max-w-xs'>
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
}

export default Certification;
