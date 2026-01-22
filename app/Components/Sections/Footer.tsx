import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavBtn from '../Atoms/NavBtn';
import Otherbtn from '../Atoms/Otherbtns';

function Footer() {
  return (
    <div className='relative w-full overflow-hidden text-white'>
      <div className='absolute inset-0 bg-gradient-to-b from-[#05000c] via-[#0b0118] to-[#05000a]' />
      <div className='absolute inset-0 opacity-60 blur-3xl bg-[radial-gradient(circle_at_top,_rgba(140,27,255,0.35)_0%,_rgba(4,0,14,0)_45%),radial-gradient(circle_at_bottom,_rgba(255,77,191,0.25)_0%,_rgba(5,0,10,0)_55%)]' />

      <div className='relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 sm:px-10 lg:px-12 lg:py-16'>
        <div className='flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/15 bg-white/5 px-6 py-6 sm:flex-row sm:py-8'>
          <Image
            src='/Images/SuriLogo.png'
            alt='Footer Logo'
            width={160}
            height={160}
            className='object-contain'
          />
          <div className='flex w-full max-w-md items-center flex-col gap-4 sm:flex-row sm:gap-3'>
            <div className='relative w-full'>
              <input
                type='email'
                placeholder='Subscribe to our newsletter'
                className='w-full rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white placeholder:text-white/50 backdrop-blur-md outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30'
              />
              <span className='pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(140,27,255,0.15)]' />
            </div>

            <button className='w-full sm:w-auto bg-[linear-gradient(213deg,#dd0dce_-39.81%,#540dce_85.21%)] text-white font-bold rounded-full px-5 py-2  transition duration-200 '>
              <span className='relative z-10'>Subscribe</span>
            </button>
          </div>
          <div className='flex  items-center justify-center gap-3'>
            <Otherbtn
              url='/Images/LinkedInIcon.png'
              href='https://pk.linkedin.com/company/eforte-solutions?original_referer=https%3A%2F%2Fwww.google.com%2F'
            />
            <Otherbtn
              url='/Images/FaceBookIcon.png'
              href='https://www.facebook.com/eForteSolutions/'
            />
            <Otherbtn
              url='/Images/TwitterIcon.png'
              href='https://x.com/eforte_net'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 gap-8 rounded-3xl border border-white/10 bg-black/30 px-6 py-10 text-sm sm:grid-cols-2 lg:grid-cols-4'>
          <div className='flex flex-col gap-6 [&_button]:w-full [&_button]:justify-start [&_button]:text-left [&_button]:whitespace-normal [&_button]:leading-relaxed [&_button]:px-0 [&_button]:py-0 [&_button]:bg-transparent [&_button]:hover:bg-transparent [&_button]:text-sm'>
            <h2 className='text-2xl font-semibold bg-gradient-to-r from-fuchsia-400 via-purple-400 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_3px_12px_rgba(121,40,202,0.35)]'>
              Contact Us
            </h2>
            <h4>
              <b>Suricat, Inc.</b>
              <br />
              3790 El Camino Real, Suite 325
              <br />
              Palo Alto, CA 94306
            </h4>

            <h4>
              info@suricat.ai
              <br />
              415-690-7882
            </h4>

            <h4></h4>
          </div>

          <div className='flex flex-col gap-3 [&_button]:w-full [&_button]:justify-start [&_button]:text-left [&_button]:whitespace-normal [&_button]:leading-relaxed [&_button]:px-0 [&_button]:py-0 [&_button]:bg-transparent [&_button]:hover:bg-transparent [&_button]:text-sm [&_button]:text-white/80'>
            <h2 className='text-2xl font-semibold bg-gradient-to-r from-fuchsia-400 via-purple-400 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_3px_12px_rgba(121,40,202,0.35)]'>
              Overview
            </h2>
            <NavBtn label='About Us' />
            <NavBtn label='Services' />
            <NavBtn label='Our Work' />
            <NavBtn label='Blog' />
            <NavBtn label='Contact Us' />
          </div>

          <div className='flex flex-col gap-3 [&_button]:w-full [&_button]:justify-start [&_button]:text-left [&_button]:whitespace-normal [&_button]:leading-relaxed [&_button]:px-0 [&_button]:py-0 [&_button]:bg-transparent [&_button]:hover:bg-transparent [&_button]:text-sm [&_button]:text-white/80'>
            <h2 className='text-2xl font-semibold bg-gradient-to-r from-fuchsia-400 via-purple-400 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_3px_12px_rgba(121,40,202,0.35)]'>
              Smart Technology Solutions
            </h2>
            <NavBtn label='Web Development' />
            <NavBtn label='UI/UX Design' />
            <NavBtn label='Ecommerce Web Development' />
            <NavBtn label='Mobile App Development' />
            <NavBtn label='Artificial Intelligence' />
            <NavBtn label='Chatbot Development' />
            <NavBtn label='Virtual Reality Development' />
            <NavBtn label='Augmented Reality Development' />
          </div>

          <div className='flex flex-col gap-3 [&_button]:w-full [&_button]:justify-start [&_button]:text-left [&_button]:whitespace-normal [&_button]:leading-relaxed [&_button]:px-0 [&_button]:py-0 [&_button]:bg-transparent [&_button]:hover:bg-transparent [&_button]:text-sm [&_button]:text-white/80'>
            <h2 className='text-2xl font-semibold bg-gradient-to-r from-fuchsia-400 via-purple-400 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_3px_12px_rgba(121,40,202,0.35)]'>
              Digital Growth & Marketing
            </h2>
            <NavBtn label='Digital Marketing' />
            <NavBtn label='Search Engine Optimization' />
            <NavBtn label='Ecommerce Web Development' />
            <NavBtn label='Pay-Per-Click Advertising' />
            <NavBtn label='Social Media Marketing' />
            <NavBtn label='Influencer Marketing' />
            <NavBtn label='Branding & Creative Design' />
          </div>
        </div>

        <div className='border-t border-white/20 pt-4 text-sm text-white/60 flex justify-center'>
          © {new Date().getFullYear()} eForte. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
