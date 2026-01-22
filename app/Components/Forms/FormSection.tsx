'use client';

import React from 'react';
import Container from '../Container';

export default function FormSection() {
  return (
    <section
      id='form-section'
      className='w-full px-12 relative py-28 bg-black/90 overflow-hidden'
    >
      <div
        className='absolute inset-5 pointer-events-none z-0'
        style={{
          background:
            'linear-gradient(to bottom right, rgb(152,13,206) 0%, transparent 40%)',
          opacity: 0.5,
          filter: 'blur(40px)',
        }}
      />
      <div className='relative container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 z-2'>
        <div className='max-w-7xl mx-auto text-center'>
          {/* Heading */}
          <h2 className='text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight'>
            Accelerate Your AI Transformation.
          </h2>

          <p className='text-2xl md:text-3xl text-white/60 mb-16 relative inline-block'>
            Get a strategic roadmap and quote in 24 hours.
            <span className='absolute left-0 -bottom-2 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500' />
          </p>

          {/* Form */}
          <form className='space-y-10 text-left'>
            {/* Row 1 */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {[
                ['Business name', 'Business name', 'business-name'],
                ['First Name', 'First name', 'first-name'],
                ['Last Name', 'Last name', 'last-name'],
              ].map(([label, placeholder, id]) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className='block text-sm font-medium text-white/60 mb-2'
                  >
                    {label}
                  </label>
                  <div className='rounded-xl p-[1px] bg-white/10 focus-within:bg-[linear-gradient(213deg,#dd0dce_-39.81%,#540dce_85.21%)] transition-all'>
                    <input
                      id={id}
                      placeholder={placeholder}
                      className='w-full p-4 rounded-xl bg-white/5 backdrop-blur-md border-0 text-white placeholder:text-white/40 outline-none transition-all'
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div>
                <label className='block text-sm font-medium text-white/60 mb-2'>
                  Phone
                </label>
                <div className='relative'>
                  <div className='rounded-xl p-[1px] bg-white/10 focus-within:bg-[linear-gradient(213deg,#dd0dce_-39.81%,#540dce_85.21%)] transition-all'>
                    <div className='absolute inset-y-0 left-0 flex items-center pl-4 text-white/40 z-10 pointer-events-none'>
                      🇺🇸
                    </div>
                    <input
                      placeholder='Phone Number'
                      className='w-full p-4 pl-14 rounded-xl bg-white/5 backdrop-blur-md border-0 text-white placeholder:text-white/40 outline-none transition-all'
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className='block text-sm font-medium text-white/60 mb-2'>
                  Email
                </label>
                <div className='rounded-xl p-[1px] bg-white/10 focus-within:bg-[linear-gradient(213deg,#dd0dce_-39.81%,#540dce_85.21%)] transition-all'>
                  <input
                    placeholder='Email'
                    className='w-full p-4 rounded-xl bg-white/5 backdrop-blur-md border-0 text-white placeholder:text-white/40 outline-none transition-all'
                  />
                </div>
              </div>

              <div>
                <label className='block text-sm font-medium text-white/60 mb-2'>
                  How did you hear about us?
                </label>
                <div className='rounded-xl p-[1px] bg-white/10 focus-within:bg-[linear-gradient(213deg,#dd0dce_-39.81%,#540dce_85.21%)] transition-all'>
                  <input
                    placeholder='Google, Facebook, LinkedIn'
                    className='w-full p-4 rounded-xl bg-white/5 backdrop-blur-md border-0 text-white placeholder:text-white/40 outline-none transition-all'
                  />
                </div>
              </div>
            </div>

            {/* Radio Groups */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 pt-6'>
              {/* Looking For */}
              <div>
                <h3 className='text-sm font-semibold text-white/60 mb-4'>
                  What are you looking for?
                </h3>
                <div className='space-y-3 text-white/80'>
                  {[
                    'AI Workflow Automation',
                    'Legacy System Modernization',
                    'Custom AI Agent Development',
                    'Strategic AI Consulting',
                    'Other / General Inquiry',
                  ].map(item => (
                    <label key={item} className='flex items-center gap-3'>
                      <input
                        type='radio'
                        name='looking-for'
                        className='h-4 w-4 accent-[#540dce]'
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              {/* Project Type */}
              <div>
                <h3 className='text-sm font-semibold text-white/60 mb-4'>
                  Project type
                </h3>
                <div className='space-y-3 text-white/80'>
                  {[
                    'Intelligent Document Processing',
                    'RPA & Process Automation',
                    'Data Foundation & Infrastructure',
                    'Generative AI / LLM Integration',
                    'M&A / Financial Automation',
                    'Healthcare / Compliance AI',
                  ].map(item => (
                    <label key={item} className='flex items-center gap-3'>
                      <input
                        type='radio'
                        name='project-type'
                        className='h-4 w-4 accent-[#540dce]'
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div>
                <h3 className='text-sm font-semibold text-white/60 mb-4'>
                  What&apos;s your budget?
                </h3>
                <div className='space-y-3 text-white/80'>
                  {[
                    'Not specified',
                    'less than $15,000',
                    '$15,000 - $50,000',
                    '$50,000 - $100,000',
                    '$100,000 - $500,000',
                    '$500,000 or more',
                  ].map(item => (
                    <label key={item} className='flex items-center gap-3'>
                      <input
                        type='radio'
                        name='budget'
                        className='h-4 w-4 accent-[#540dce]'
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Textarea */}
            <div className='pt-8'>
              <label className='block text-sm font-medium text-white/60 mb-2'>
                Tell us more about your requirements
              </label>
              <div className='rounded-xl p-[1px] bg-white/10 focus-within:bg-[linear-gradient(213deg,#dd0dce_-39.81%,#540dce_85.21%)] transition-all'>
                <textarea
                  rows={6}
                  placeholder='Briefly explain your current workflow challenges, the legacy systems involved (e.g., SAP, Oracle), and your automation goals...'
                  className='w-full p-5 rounded-xl bg-white/5 backdrop-blur-md border-0 text-white placeholder:text-white/40 outline-none transition-all resize-none'
                />
              </div>
            </div>

            {/* Submit */}
            <div className='text-center pt-10'>
              <button
                type='submit'
                className='bg-[linear-gradient(213deg,#dd0dce_-39.81%,#540dce_85.21%)] text-white font-semibold py-4 px-14 rounded-xl text-lg shadow-[0_0_40px_rgba(84,13,206,0.35)] hover:shadow-[0_0_60px_rgba(84,13,206,0.55)] transition-all duration-300 hover:scale-105'
              >
                Request AI Assessment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
