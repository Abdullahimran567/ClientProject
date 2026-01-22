'use client';
import React, { useState } from 'react';
import QuoteFormModal from '../Modals/QuoteFormModal';

interface GetAQuoteBtnProps {
  onScrollToForm?: () => void;
}

function GetAQuoteBtn({ onScrollToForm }: GetAQuoteBtnProps) {
  const [showModal, setshowModal] = useState(false);

  const handleClick = () => {
    if (onScrollToForm) {
      onScrollToForm();
    } else {
      setshowModal(true);
    }
  };

  return (
    <>
      <div>
        <button
          className='cursor-pointer w-12 lg:w-14 h-36  bg-[linear-gradient(213deg,#dd0dce_-39.81%,#540dce_85.21%)] text-white font-bold hover:w-20 transition-all duration-300 ease-in-out rounded-tl-lg rounded-bl-lg flex items-center justify-center'
          onClick={handleClick}
        >
          <span className='block -rotate-90 whitespace-nowrap transform origin-center'>
            {' '}
            Get a Quote
          </span>
        </button>
      </div>

      {showModal && (
        <QuoteFormModal
          onClicked={() => {
            setshowModal(false);
          }}
        />
      )}
    </>
  );
}

export default GetAQuoteBtn;
