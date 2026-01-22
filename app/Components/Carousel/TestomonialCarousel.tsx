'use client';
import React, { useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import VideoTestimonialCard from '../Cards/VideoTestomonialCard';

export function EmblaCarousel() {
  // Create autoplay instance
  const autoplay = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false, // don’t stop permanently
    })
  );

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'center', slidesToScroll: 1 },
    [autoplay.current]
  );

  return (
    <div
      className='embla'
      ref={emblaRef}
      // Pause autoplay on hover
      onMouseEnter={() => autoplay.current.stop()}
      // Resume autoplay on hover out
      onMouseLeave={() => autoplay.current.reset()}
    >
      <div className='embla__container'>
        <div className='embla__slide'>
          <VideoTestimonialCard
            VideoLink='./videos/IntroVideo.mp4'
            name='Abdullah'
          />
        </div>
        <div className='embla__slide'>
          <VideoTestimonialCard
            VideoLink='/videos/IntroVideo.mp4'
            name='Uzair'
          />
        </div>
        <div className='embla__slide'>
          <VideoTestimonialCard
            VideoLink='/videos/IntroVideo.mp4'
            name='Uzair'
          />
        </div>
        <div className='embla__slide'>
          <VideoTestimonialCard
            VideoLink='/videos/IntroVideo.mp4'
            name='Uzair'
          />
        </div>
        <div className='embla__slide'>
          <VideoTestimonialCard
            VideoLink='/videos/IntroVideo.mp4'
            name='Uzair'
          />
        </div>
      </div>
    </div>
  );
}
