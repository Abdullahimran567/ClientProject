import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div className='w-full max-w-[1600px] mx-auto flex justify-center bg-black'>
      {children}
    </div>
  );
}

export default Container;
