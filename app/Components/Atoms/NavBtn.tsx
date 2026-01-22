import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
interface NavBtnProps {
  label: string;

  link?: string;
}
function NavBtn({ label, link = '' }: NavBtnProps) {
  return (
    <Button
      variant='navBtn'
      size='lg'
      className='text-white cursor-pointer group relative'
    >
      <Link href={link}>
        <span className='relative inline-block'>
          {label}
          <span
            className='
              absolute left-0 bottom-0 w-full h-[2px] bg-white
              scale-x-0 origin-left transition-transform duration-300
              group-hover:scale-x-100
            '
          />
        </span>
      </Link>
    </Button>
  );
}

export default NavBtn;
