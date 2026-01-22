import Image from 'next/image';

interface CardProps {
  description: string;
  logo: string;
  image: string;
  name: string;
  post: string;
}

function TextTestimonialCard({
  description,
  logo,
  image,
  name,
  post,
}: CardProps) {
  return (
    /* OUTER FRAME */
    <div
      className='
      w-[60vw] sm:w-[320px]
      max-w-[340px]
      h-auto sm:h-[420px]
      rounded-[24px] sm:rounded-[28px]
      bg-[#f2f2f2]
      p-3 sm:p-4
      flex-shrink-0
    '
    >
      {/* INNER CARD */}
      <div
        className='
        w-full h-full
        min-h-[360px] sm:min-h-0
        rounded-[20px] sm:rounded-[22px]
        bg-white
        p-4 sm:p-6
        flex flex-col
      '
      >
        {/* QUOTE */}
        <div className='text-purple-600 text-xl sm:text-2xl font-bold mb-2 sm:mb-3'>
          {'//'}
        </div>

        {/* SCROLLABLE TEXT */}
        <div
          className='
          flex-1
          overflow-y-auto
          pr-2 sm:pr-3
          gradient-scrollbar
        '
        >
          <p className='text-sm sm:text-[15px] leading-relaxed text-gray-700'>
            {description}
          </p>
        </div>

        {/* DIVIDER */}
        <div className='my-3 sm:my-4 h-px bg-gray-200' />

        {/* BOTTOM SECTION */}
        <div className='flex items-center justify-center    gap-3'>
          {/* FOUNDER INFO */}
          <div className='flex items-center gap-2 sm:gap-3'>
            <Image
              src={image}
              alt='Founder'
              width={40}
              height={40}
              className='
                rounded-full
                object-cover
                w-9 h-9 sm:w-10 sm:h-10
              '
            />
            <div className='flex flex-col leading-tight text-right sm:text-left'>
              <p className='text-sm font-medium text-gray-900'>{name}</p>
              <p className='text-xs sm:text-sm text-gray-500 font-semibold'>
                {post}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextTestimonialCard;
