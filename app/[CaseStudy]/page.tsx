import React from 'react';
import IntroSection from '../Components/Sections/CaseStudy/IntroSection';
import TechnologiesSection from '../Components/Sections/CaseStudy/TechnologiesSection';
import BForm from '../Components/Sections/BForm';
import DetailsSection from '../Components/Sections/CaseStudy/DetailsSection';

import { data } from './data';
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { CaseStudy: 'Krank' },
    { CaseStudy: 'Investment-markets' },
    { CaseStudy: 'Oddysee' },
    { CaseStudy: 'Prism' },
    { CaseStudy: 'Scheduling-Engine' },
    { CaseStudy: 'Sellsmart' },
    { CaseStudy: 'Validatr' },
    { CaseStudy: 'Dostpay' },
    { CaseStudy: 'emerge-forward' },
    { CaseStudy: 'komb' },
    { CaseStudy: 'food-cast' },
    { CaseStudy: 'crowd-check' },
    { CaseStudy: 'instApp-deal' },
  ];
}

interface CaseStudyParams {
  params: {
    CaseStudy: string;
  };
}

interface PageData {
  page: string;
  introSection: {
    title: string;
    description: string;
    image: string;
    link: string;
    theme: number[];
  };
  technologySection: {
    theme: number[];
    frontEnd: { name: string; info: string; image: string }[];
    BackEnd: { name: string; info: string; image: string }[];
    Database: { name: string; info: string; image: string }[];
    Others: { name: string; info: string; image: string }[];
  };
  Details: {
    title: string;
    theme: number[];
    sections: {
      heading: string;
      description: string;
      image: string;
      format: string;
    }[];
  };
}

async function page({ params }: CaseStudyParams) {
  const { CaseStudy } = params;

  const p = data.find(item => item.page === CaseStudy);

  if (!p) {
    return <div>Page not found</div>;
  }

  return (
    <div className='relative'>
      <IntroSection
        title={p.introSection.title}
        description={p.introSection.description}
        image={p.introSection.image}
        theme={p.introSection.theme}
        link={p.introSection.link}
      />

      <TechnologiesSection
        theme={p.technologySection.theme}
        frontend={p.technologySection.frontEnd}
        backend={p.technologySection.BackEnd}
        database={p.technologySection.Database}
        others={p.technologySection.Others}
      />
      <DetailsSection
        title={p.Details.title}
        sections={p.Details.sections}
        theme={p.Details.theme}
      />

      <BForm />
    </div>
  );
}

export default page;
