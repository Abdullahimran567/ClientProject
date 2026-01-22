import { Metadata } from 'next';

import IntroVideoDiv from './Components/Sections/IntroVideoDiv';

import FAQs from './Components/Sections/FAQs';
import OurServices from './Components/Sections/OurServices';
import SuitingTalent from './Components/Sections/SuitingTalent';
import Objectives from './Components/Sections/about-us/Objectives';
import InfoSection from './Components/Sections/services page/Information';
import Certification from './Components/Sections/Certification';
import CaseStudies from './Components/Sections/CaseStudies';
import BForm from './Components/Sections/BForm';
import TextTestimonials from './Components/Sections/TextTestimonials';
import CostComparison from './Components/Sections/CostComparision';
import SuriHelps from './Components/Sections/SuricatHelps';
const services: { title: string; heading: string; description: string }[] = [
  {
    title: 'A Rules Engine',
    heading: '',
    description:
      'This captures important regulatory requirements and checks documents against them.',
  },
  {
    title: 'An Advisory Layer',
    heading: '',
    description:
      'This helps interpret context and meaning, but always leaves the decision to humans. Behind the scenes, Suricat runs on a secure, enterprise-grade environment built for medical device companies and for easy integration with your existing QMS.',
  },
];

const cost: { title: string; heading: string; description: string }[] = [
  {
    title: 'TRANSPARENCY & OVERSIGHT',
    heading: 'Meeting Regulatory Expectations with Clear Human Control',
    description:
      'Regulators expect transparency, accountability, and human oversight in decision-making. Suricat enables teams to clearly demonstrate how decisions are made, ensuring humans remain in control while maintaining traceable and well-documented processes.',
  },
  {
    title: 'AUDIT READINESS',
    heading: 'Prepare Faster and Reduce Compliance Friction',
    description:
      'Suricat helps organizations catch issues early and prepare for audits more efficiently. By standardizing documentation and workflows, teams can reduce audit stress while maintaining consistency and regulatory alignment.',
  },
  {
    title: 'COMPLIANCE CONFIDENCE',
    heading: 'Stronger Documentation, Stronger Trust',
    description:
      'With Suricat, teams improve consistency, strengthen compliance workflows, and build confidence in their documentation. Clear evidence and structured processes help organizations prove compliance without relying solely on automated decisions.',
  },
];

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <IntroVideoDiv />
      <Objectives />
      <InfoSection />
      <CaseStudies />
      <SuriHelps />
      <OurServices arr={services} />
      <CostComparison arr={cost} />

      <TextTestimonials />

      <BForm />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Home',
  description: 'Eforte is a platform for creating and managing your business',
};
