'use client';
import React, { useState, useRef } from 'react';

interface VideoProps {
  VideoLink?: string;
  LogoLink?: string;
  name?: string;
}

function VideoTestimonialCard({
  VideoLink = '',
  LogoLink = '',
  name = '',
}: VideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className='relative w-11/12 max-w-[300px] rounded-xl p-4 border-1 border-gray-200   bg-white flex flex-col gap-3'>
      {/* VIDEO WRAPPER (allows overflow) */}
      <div
        className='relative mx-auto 
        w-[calc(100%-1.5rem)] max-w-[260px]
        h-[240px] sm:h-[270px]
        overflow-visible'
      >
        {/* VIDEO MASK (clips video only) */}
        <div className='relative w-full h-full overflow-hidden rounded-lg shadow-md group'>
          <video
            ref={videoRef}
            src={VideoLink}
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
          />
        </div>

        {/* CUT EFFECT */}
        <div className='absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full translate-x-[-50%] translate-y-[50%] z-10'></div>

        {/* PLAY BUTTON (lifted by default) */}
        <button
          onClick={handlePlayPause}
          className='absolute bottom-0 left-0
          z-30
          border-2 border-white
          bg-[linear-gradient(213deg,#dd0dce_-39.81%,#540dce_85.21%)]
          text-white rounded-full w-14 h-14
          flex items-center justify-center
          shadow-[0_8px_10px_rgba(0,0,0,0.35)]
          translate-x-[-25%]
          translate-y-[30%]
          scale-90'
        >
          {isPlaying ? (
            <svg className='w-8 h-8' viewBox='0 0 40 40' fill='white'>
              <rect x='12' y='10' width='5' height='20' rx='1' />
              <rect x='23' y='10' width='5' height='20' rx='1' />
            </svg>
          ) : (
            <svg className='w-8 h-8 ml-1' viewBox='0 0 40 40' fill='white'>
              <path d='M15 10 L15 30 L28 20 Z' />
            </svg>
          )}
        </button>
      </div>

      {/* BOTTOM SECTION */}
      <div className='flex flex-col w-full px-2 min-h-[60px]'>
        <div className='flex justify-start items-center'>
          {LogoLink && (
            <img src={LogoLink} alt={name} className='h-7 object-contain' />
          )}
        </div>

        <div className='flex justify-end items-end flex-1'>
          {name && (
            <p className='font-extrabold text-base text-gray-900'>{name}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoTestimonialCard;
