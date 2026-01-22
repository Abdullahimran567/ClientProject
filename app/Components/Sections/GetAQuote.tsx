'use client';
import React from 'react';
import GetAQuoteForm from '../Forms/GetAQuoteForm';

function GetAQuote() {
  return (
    <div
      className="w-full min-h-[800px] flex items-center justify-center bg-black overflow-hidden py-12"
      style={{
        backgroundImage: "url('/contact-bg.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-6xl   flex items-center justify-center m-auto px-4 sm:px-6 lg:px-8 py-6">
       <GetAQuoteForm />
      </div>
    </div>
  );
}

export default GetAQuote;
