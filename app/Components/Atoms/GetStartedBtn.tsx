import React from 'react';
import { Button } from '../ui/button';

interface GetStartedBtnProps {
  onClick: () => void;
}

function GetStartedBtn({ onClick }: GetStartedBtnProps) {
  return (
    <Button
      className='bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1.5  w-[100px] h-[35px] cursor-pointer'
      onClick={onClick}
    >
      Get Started
    </Button>
  );
}

export default GetStartedBtn;
