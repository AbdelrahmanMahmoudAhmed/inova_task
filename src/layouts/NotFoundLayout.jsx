import React from 'react';
import Footer from '../components/generic/Footer';

const NotFoundLayout = ({ children }) => {
  return (
    <div className='  min-h-[100vh] flex flex-col'>
      <main className=' flex-1'>{children}</main>
      <footer> <Footer /></footer>
    </div>
  );
};

export default NotFoundLayout;