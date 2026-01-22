import React from 'react';
import AboutusSliderCard from '../Cards/AboutusSliderCard';
import Container from '../Container';
interface Cardprops {
  Imageurl: string;
  text: string;
  color: number[];
}
const data: Cardprops[] = [
  { Imageurl: '/Images/npm.svg', text: 'Npm', color: [202, 56, 55] },
  { Imageurl: '/Images/reactIcon.svg', text: 'React', color: [97, 218, 251] },
  { Imageurl: '/Images/sass.svg', text: 'Sass', color: [206, 100, 153] },
  { Imageurl: '/Images/html.svg', text: 'HTML', color: [226, 79, 38] },
  { Imageurl: '/Images/redux.svg', text: 'Redux', color: [117, 73, 87] },
  { Imageurl: '/Images/nodejs.svg', text: 'Node Js', color: [130, 203, 41] },
  { Imageurl: '/Images/mongodb.svg', text: 'MongoDb', color: [108, 172, 72] },
  { Imageurl: '/Images/next.svg', text: 'Next Js', color: [255, 255, 255] },
  {
    Imageurl: '/Images/bootstrap.svg',
    text: 'BootStrap',
    color: [121, 82, 79],
  },
  {
    Imageurl: '/Images/redux-saga.svg',
    text: 'Redux Saga',
    color: [108, 172, 72],
  },
  { Imageurl: '/Images/docker.svg', text: 'Docker', color: [26, 126, 162] },
  {
    Imageurl: '/Images/cloudinary.svg',
    text: 'Cloudinary',
    color: [242, 216, 100],
  },
  { Imageurl: '/Images/firebase.svg', text: 'Firebase', color: [244, 129, 12] },
  { Imageurl: '/Images/aws.svg', text: 'AWS', color: [255, 155, 5] },
];
function AboutSlider() {
  return (
    <Container>
      <div className='relative w-full overflow-hidden bg-black text-white pl-16 sm:pl-20 md:pl-24 pr-16 sm:pr-20 md:pr-24  '>
        <div className='relative z-10 flex items-center h-24 sm:h-28 md:h-32 lg:h-36'>
          <div id='home-slider' className='flex gap-6'>
            {[...data, ...data].map((item, index) => (
              <AboutusSliderCard
                Imageurl={item.Imageurl}
                text={item.text}
                color={item.color}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AboutSlider;
