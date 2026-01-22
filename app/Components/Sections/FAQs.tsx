'use client';

import React from 'react';
import FaqAccordian from '../Atoms/FaqAccordian';
import Container from '../Container';

const vals = [
  {
    q: 'How soon can I hire Software Engineers?',
    a: 'You can hire Software Engineers within 3-7 working days. We strive to present you with a list of best-suited candidates promptly, often sooner, depending on your required tech stack.',
  },
  {
    q: "What does eForte's Recruitment Process look like?",
    a: 'We leverage our in-house AI tool to thoroughly assess candidates and ensure we hire the best talent. We consider their technical expertise, interpersonal skills, and compatibility with your company culture.',
  },
  {
    q: 'How do you track productivity? How do you handle Underperformers?',
    a: 'We monitor productivity with Time Tracking Software. For underperformers, we provide feedback, additional training, and clear expectations.',
  },
  {
    q: 'How do you make sure your staff is staying abreast of the latest technologies?',
    a: 'We prioritize our AI tool as the primary means to keep our staff updated on the latest technologies.',
  },
  {
    q: 'How does your staff augmentation process flow look like?',
    a: 'When we receive the criteria of your requirement, we review our database to identify suitable candidates.',
  },
  {
    q: 'What steps are taken after selecting the ideal candidate?',
    a: 'After selecting the candidates, the next step involves scheduling interviews and onboarding.',
  },
  {
    q: 'How do you guarantee the quality of your IT staffing services?',
    a: "We offer eForte's premium IT staffing solution risk-free for a week.",
  },
  {
    q: 'What happens if I want to hire a resource for few months only?',
    a: 'We offer part-time contracts with full management support.',
  },
  {
    q: 'Can staff augmentation be used for long-term projects?',
    a: 'Yes, our services are adaptable to long-term projects.',
  },
  {
    q: 'How Staff Augmentation differs from Project Outsourcing?',
    a: 'Staff Augmentation allows you to retain control, while Project Outsourcing transfers ownership.',
  },
  {
    q: "How is eForte's pricing structured?",
    a: 'We use a monthly service plan model.',
  },
  {
    q: 'Apart from providing the resource what other benefits does eForte provides?',
    a: 'We handle HR, payroll, insurance, workspace, IT equipment, and compliance.',
  },
  {
    q: 'What happens if the selected resource resigns?',
    a: 'We provide a replacement within 3–5 working days.',
  },
];

const FAQs = () => {
  return (
    <Container>
      <section className=' w-full flex flex-col lg:flex-row items-start justify-center bg-black px-12 sm:px-16 py-12 lg:py-20'>
        {/* LEFT SIDE */}
        <div className='flex flex-col justify-center gap-6 text-white mb-8 lg:mb-0 lg:w-[35%]'>
          <span className='flex items-center gap-2 text-sm text-gray-300'>
            <span className='h-2 w-2 rounded-full bg-purple-500' />
            FAQs
          </span>

          <h2 className='text-4xl lg:text-5xl font-light leading-tight'>
            Transformation with <br />
            <span className='font-normal'>Smart UX &</span> <br />
            <span className='font-normal'>Scalable Tech</span>
          </h2>

          <p className='text-gray-300 text-sm lg:text-base leading-relaxed max-w-md'>
            You have the vision—we engineer for the future. At Digital Gravity,
            we embrace modern technology with creativity to deliver AI-powered
            UX and scalable digital products.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className='lg:w-[65%] w-full flex flex-col gap-4 lg:px-8'>
          {vals.map((item, index) => (
            <FaqAccordian key={index} question={item.q} answer={item.a} />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default FAQs;
