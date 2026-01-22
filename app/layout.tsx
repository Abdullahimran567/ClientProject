import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './Components/Sections/Navbar';
import Footer from './Components/Sections/Footer';
import LeftSideBar from './Components/Sections/LeftSideBar';
import RightSideBar from './Components/Sections/RightSideBar';
import SmoothScroll from './Components/SmoothScroll';
import { ScrollProvider } from './Components/ScrollContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning>
        <SmoothScroll>
          <ScrollProvider>
            <LeftSideBar />
            <RightSideBar />
            <Navbar />
            <main className='w-full h-full'>{children}</main>
            <Footer />
          </ScrollProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: '%s | Eforte',
    default: 'Eforte',
  },
  description: 'Eforte is a platform for creating and managing your business',
};
