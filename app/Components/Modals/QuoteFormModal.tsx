'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import FormSection from '../Forms/FormSection';

interface ModalProps {
  onClicked: () => void;
}

export default function QuoteFormModal({ onClicked }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className='fixed inset-0 z-[999] flex items-center justify-center px-4 sm:px-6'>
      {/* Backdrop */}
      <div
        className='absolute inset-0 bg-black/80 backdrop-blur-sm'
        onClick={onClicked}
      />

      {/* Modal Container */}
      <div
        className='
          relative z-10
          w-full max-w-6xl
          max-h-[90vh]
          overflow-y-auto
          rounded-3xl
          bg-black
          border border-white/10
          shadow-2xl
        '
      >
        {/* Close Button */}
        <button
          onClick={onClicked}
          className='
            sticky top-4 right-4 ml-auto mr-4 mt-4
            w-10 h-10
            flex items-center justify-center
            rounded-full
            bg-white/10
            text-white
            hover:bg-white/20
            transition
          '
        >
          ✕
        </button>

        {/* FORM */}
        <div className='relative'>
          {/* Override section spacing for modal */}
          <div className='[&>section]:py-12 [&>section]:px-6 sm:[&>section]:px-10'>
            <FormSection />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
