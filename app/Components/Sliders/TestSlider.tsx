'use client';

import TextTestimonialCard from '../Cards/TextTestimonialCard';
import Container from '../Container';

interface CardProps {
  description: string;
  logo: string;
  image: string;
  name: string;
  post: string;
}

const data: CardProps[] = [
  {
    description:
      'Provides overall strategy and product leadership, ensuring the platform aligns with regulatory expectations while delivering real business value.',
    logo: '/Images/company-logo.png',
    image: '/Images/Some_man.jpg',
    name: 'Mujeeb',
    post: 'CEO',
  },
  {
    description:
      'Leads system architecture and engineering, focusing on scalable, secure, and compliant technical foundations.',
    logo: '/Images/company-logo.png',
    image: '/Images/Some_man.jpg',
    name: 'Fahad',
    post: 'CTO',
  },
  {
    description:
      'Brings over 20+ years of experience in medical device regulatory and quality strategy, guiding compliance-driven product decisions.',
    logo: '/Images/company-logo.png',
    image: '/Images/Some_man.jpg',
    name: 'Kim',
    post: 'Regulatory Strategy',
  },
  {
    description:
      'Advises on quality systems and regulatory submissions, helping teams meet compliance requirements with confidence and consistency.',
    logo: '/Images/company-logo.png',
    image: '/Images/Some_man.jpg',
    name: 'Matt',
    post: 'Quality & Regulatory Advisor',
  },
];

export default function TestSlider() {
  return (
    /* SECTION BACKGROUND */
    <section className='w-full  py-16 sm:py-20'>
      <Container>
        {/* MASK — this fixes black gaps */}
        <div className='relative overflow-hidden bg-white'>
          {/* TRACK */}
          <div
            className='
            flex
            gap-6 sm:gap-8
            w-max
            animate-marquee
            hover:[animation-play-state:paused]
          '
          >
            {[...data, ...data].map((item, index) => (
              <TextTestimonialCard
                key={index}
                description={item.description}
                logo={item.logo}
                image={item.image}
                name={item.name}
                post={item.post}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
