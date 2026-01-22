import React from 'react';
import InfoSubSection from './services page/InfoSubSection';

function SuriHelps() {
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

export default SuriHelps;

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
    title: 'Key Things Suricat Helps With',
    heading: '',
    description:
      'Suricat includes the evidence behind every insight so your team can easily understand what it found and why.',
    image: '/Images/ai.webp',
    listheading: 'Services Include:',
    list: [
      'Finding conflicting information in documents',
      'Showing which rules and regulations each document relates to',
      'Highlighting possible risks',
      'Supporting design control and traceability',
      'Comparing document versions',
      'Showing how documents relate to each other',
      'Providing recommendations with clear evidence and sources',
    ],
  },
];
