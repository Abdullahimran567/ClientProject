import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import NextLink from 'next/link';

interface OtherBtnProps {
  url: string;
  width?: number;
  height?: number;
  href?: string;
}

function Otherbtn2({ url, width = 40, height = 40, href }: OtherBtnProps) {
  const size = Math.max(width, height);

  const buttonContent = (
    <Button
      variant='OtherBtn'
      className='p-0 flex items-center justify-center bg-black/30 backdrop-blur-lg border-gray-700 cursor-pointer '
      style={{ width: size, height: size }}
    >
      <Image
        src={url}
        alt='logo'
        width={width}
        height={height}
        className='object-contain'
      />
    </Button>
  );

  return href ? (
    <NextLink href={href} target='blank'>
      {buttonContent}
    </NextLink>
  ) : (
    buttonContent
  );
}

export default Otherbtn2;
