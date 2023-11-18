import React from 'react';
import Header from '../components/generic/Header';
import Footer from '../components/generic/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className='  flex flex-col min-h-[100vh]'>
      <header><Header /></header>
         <main className='flex-1'>{children}</main>
      <footer> <Footer /></footer>
    </div>
  );
};

export default MainLayout;