import React from 'react';
import InfoSubSection from './InfoSubSection';

function InfoSection() {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      {data.map(item => (
        <InfoSubSection
          key={item.heading}
          label={item.label}
          title={item.title}
          heading={item.heading}
          description={item.description}
          image={item.image}
          listheading={item.listheading}
          list={item.list}
        />
      ))}
    </div>
  );
}

export default InfoSection;

const data: {
  label: string;
  title: string;
  heading: string;
  description: string;
  image: string;
  listheading: string;
  list: string[];
}[] = [
  {
    label: 'Our Expertises',
    title: 'The Problem We Solve',
    heading: '',
    description:
      'Medical device companies deal with huge amounts of documents — procedures, design files, risks, quality records, audits, and more.These documents often live in different places and don’t always match',
    image: '/Images/development.webp',
    listheading: 'Services Include:',
    list: [
      'Confusing or conflicting information',
      'Stressful and last-minute audit preparation',
      'Slow document reviews',
      'Difficulty tracing how everything connects',
      'Higher risk of mistakes or auditor findings',
      'Heavy workload on Regulatory and Quality teams',
    ],
  },
];
