'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import NavBtn from '../Atoms/NavBtn';
import SpeaktoExpertbtn from '../Atoms/speaktoExpertbtn';
import Otherbtn from '../Atoms/Otherbtns';
import Hamburgerbtn from '../Atoms/HamburgerBtn';
import NavlinksModal from '../Modals/NavlinksModal';
import Otherbtn2 from '../Atoms/OtherBtn2';
const navLinks = [
  { label: 'Home', link: '/' },
  { label: 'About Us', link: '/about-us' },
  { label: 'Services', link: '/services' },
  { label: 'Blog', link: '/blog' },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [checkDimension, setCheckDimension] = useState(true);
  const [showNavlinkModal, setNavlinkModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setCheckDimension(window.innerWidth >= 1024);

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {checkDimension && !isScrolled && (
        <div className='bg-black/0 backdrop-blur-lg w-full flex fixed top-0 left-0 z-50 sm:flex-row sm:h-16 items-center sm:items-center sm:justify-between gap-4 sm:gap-0 transition-all duration-300 px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-0'>
          <div className='w-full sm:w-1/4 flex justify-center sm:justify-start'>
            <Image
              src='/Images/SuriLogo.png'
              alt='logo'
              width={120}
              height={120}
              className='object-contain transition-all duration-300'
            />
          </div>

          <div className='hidden lg:flex w-full lg:w-1/2 lg:items-center lg:justify-center lg:gap-3'>
            {navLinks.map(link => (
              <NavBtn key={link.label} label={link.label} link={link.link} />
            ))}
          </div>

          <div className='w-full sm:w-1/4 flex justify-center gap-1 sm:justify-end items-center'>
            <SpeaktoExpertbtn />
            <Otherbtn2 url={'/Images/mailIcon.png'} width={15} height={35} />
            <Otherbtn2 url={'/Images/PhoneIcon.png'} width={15} height={35} />
            <div className='lg:hidden'>
              <Hamburgerbtn
                url={'/Images/Hamburgericon.png'}
                onClicked={() => setNavlinkModal(true)}
              />
            </div>
          </div>
        </div>
      )}

      {checkDimension && isScrolled && (
        <motion.div
          initial={{ opacity: 0, width: '95%' }}
          animate={isScrolled ? { opacity: 1, width: '70%' } : { opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 20,
            duration: 0.5,
          }}
          className='bg-black/30 backdrop-blur-lg border-gray-700 border py-3 px-6 sm:px-12 rounded-full shadow-lg fixed top-6 left-1/2 -translate-x-1/2 flex items-center gap-6 sm:gap-16 min-w-fit max-w-[95%] sm:max-w-[1400px] z-40'
        >
          <div className='flex justify-start sm:justify-start flex-shrink-0'>
            <Image
              src='/Images/SuriLogo.png'
              alt='logo'
              width={100}
              height={100}
              className='object-contain transition-all duration-300'
            />
          </div>

          <div className='flex-1 flex items-center justify-center gap-3 whitespace-nowrap min-w-0'>
            {navLinks.map(link => (
              <NavBtn key={link.label} label={link.label} link={link.link} />
            ))}
          </div>

          <div className='flex justify-end gap-2 sm:gap-3 items-center flex-shrink-0'>
            <SpeaktoExpertbtn />
            <Otherbtn2 url={'/Images/mailIcon.png'} width={15} height={35} />
            <Otherbtn2 url={'/Images/PhoneIcon.png'} width={15} height={35} />
          </div>
        </motion.div>
      )}

      {!checkDimension && (
        <div className='bg-black/0 backdrop-blur-lg w-full flex fixed top-0 left-0 z-50 sm:flex-row sm:h-16 items-center sm:items-center sm:justify-between gap-4 sm:gap-0 transition-all duration-300 px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-0'>
          <div className='w-full sm:w-1/4 flex justify-center sm:justify-start'>
            <Image
              src='/Images/SuriLogo.png'
              alt='logo'
              width={120}
              height={120}
              className='object-contain transition-all duration-300'
            />
          </div>

          <div className='hidden lg:flex w-full lg:w-1/2 lg:items-center lg:justify-center lg:gap-3'>
            {navLinks.map(link => (
              <NavBtn key={link.label} label={link.label} link={link.link} />
            ))}
          </div>

          <div className='w-full sm:w-1/4 flex justify-center gap-1 sm:justify-end items-center'>
            <SpeaktoExpertbtn />

            <div className='lg:hidden'>
              <Hamburgerbtn
                onClicked={() => setNavlinkModal(!showNavlinkModal)}
              />
            </div>
          </div>
        </div>
      )}

      {showNavlinkModal && (
        <NavlinksModal onClicked={() => setNavlinkModal(false)} />
      )}
    </>
  );
}

export default Navbar;
