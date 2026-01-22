'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import ParallaxCard from '../../Cards/ParallaxCard';
import { section } from 'motion/react-client';

/* -------------------- Types -------------------- */

interface CardData {
  heading: string;
  subheading: string;
  description: string;
  image: string;
  Num1: string;
  N1description: string;
  Num2: string;
  N2description: string;
}

/* -------------------- Data -------------------- */

const cards: CardData[] = [
  {
    heading: 'Real Estate',
    subheading: 'We offer more than just web development!',
    description:
      'Web Design & Development, Mobile App Development, Digital Marketing, SEO, ERP Software Solutions',
    image: '/Images/real-estate.webp',
    Num1: '10 +',
    N1description: 'Years of experience in web development.',
    Num2: '90 +',
    N2description: 'Clients across various industries.',
  },
  {
    heading: 'Healthcare',
    subheading: 'We offer more than just digital marketing!',
    description:
      'Hospital Management Systems, Mobile Health Apps, Secure APIs, Data Analytics',
    image: '/Images/health.webp',
    Num1: '10 +',
    N1description: 'Years of experience in digital marketing.',
    Num2: '85 +',
    N2description: 'Clients across various digital marketing.',
  },
  {
    heading: 'Fashion',
    subheading: 'We offer more than just E-commerce!',
    description:
      'Web Design & Development, Mobile App Development, Digital Marketing, SEO, ERP Software Solutions',
    image: '/Images/fashion.webp',
    Num1: '10 +',
    N1description: 'Years of experience in the E-commerce.',
    Num2: '65 +',
    N2description: 'Clients across various E-commerce.',
  },

  {
    heading: 'Corporate',
    subheading: 'We offer more than just UI-UX Design!',
    description:
      'Web Design & Development, Mobile App Development, Digital Marketing, SEO, ERP Software Solutions',
    image: '/Images/corporate.webp',
    Num1: '10 +',
    N1description: 'Years of experience in the UI-UX Design.',
    Num2: '95 +',
    N2description: 'Clients across various UI-UX Design.',
  },
  {
    heading: 'Technology',
    subheading:
      'We offer more than just Artificial Intelligence and VR Development!',
    description:
      'Web Design & Development, Mobile App Development, Digital Marketing, SEO, ERP Software Solutions',
    image: '/Images/tech.webp',
    Num1: '10 +',
    N1description:
      'Years of experience in the Artificial Intelligence and VR Development.',
    Num2: '60 +',
    N2description:
      'Clients across various Artificial Intelligence and VR Development.',
  },
  {
    heading: 'Home & Living',
    subheading: 'We offer more than just Search Engine Optimization!',
    description:
      'Web Design & Development, Mobile App Development, Digital Marketing, SEO, ERP Software Solutions',
    image: '/Images/home.webp',
    Num1: '10 +',
    N1description: 'Years of experience in the Search Engine Optimization.',
    Num2: '78 +',
    N2description: 'Clients across various Search Engine Optimization.',
  },
];

/* -------------------- Child Component -------------------- */

interface ParallaxItemProps {
  card: CardData;
  index: number;
  scrollYProgress: MotionValue<number>;
}

const ParallaxItem: React.FC<ParallaxItemProps> = ({
  card,
  index,
  scrollYProgress,
}) => {
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${index * 5}px`, `${-index * 5}px`]
  );

  // Softer scaling to avoid clipping on small screens
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    index === 0 ? [1, 0.92] : [1, 0.88]
  );

  return (
    <motion.div
      style={{ y, scale }}
      className='sticky top-[12vh] lg:top-16 w-11/12 max-w-6xl will-change-transform'
    >
      <ParallaxCard
        heading={card.heading}
        subheading={card.subheading}
        description={card.description}
        image={card.image}
        Num1={card.Num1}
        N1description={card.N1description}
        Num2={card.Num2}
        N2description={card.N2description}
      />
    </motion.div>
  );
};

/* -------------------- Main Component -------------------- */

const CardParallax: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [mobile, setmobile] = useState(false);

  useEffect(() => {
    setmobile(window.innerWidth <= 768);
  }, []);

  return (
    <>
      {!mobile && (
        <section
          className='
        relative w-full bg-black
        flex flex-col items-center gap-10
        pt-[20vh] pb-[15vh]  lg:pb-[25vh]
        min-h-[400vh]
      '
        >
          {cards.map((card, index) => (
            <ParallaxItem
              key={index}
              card={card}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}

          {/* Spacer so last card animates fully */}
          <div className=' h-0  lg:h-[10vh]' />
        </section>
      )}

      {mobile && (
        <section
          className='  relative w-full bg-black
        flex flex-col items-center gap-10
        pt-[20vh] pb-[15vh]  lg:pb-[25vh]
        min-h-[400vh]'
        >
          {' '}
          {cards.map((card, index) => (
            <ParallaxCard
              heading={card.heading}
              subheading={card.subheading}
              description={card.description}
              image={card.image}
              Num1={card.Num1}
              N1description={card.N1description}
              Num2={card.Num2}
              N2description={card.N2description}
              key={index}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default CardParallax;
