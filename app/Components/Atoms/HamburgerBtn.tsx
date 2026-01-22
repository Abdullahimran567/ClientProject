import React from 'react';
import { Button } from '../ui/button';
import { button } from 'motion/react-client';
import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';

interface OtherBtnProps {
  onClicked: () => void;
  url?: string;
}

function Hamburgerbtn({ onClicked }: OtherBtnProps) {
  return (
    <Button variant='OtherBtn' onClick={onClicked} className='cursor-pointer'>
      <RxHamburgerMenu color='white' />
    </Button>
  );
}

export default Hamburgerbtn;
