"use client";
import React from 'react';


import Landing from '../components/Landing';
type pageProps = {
  
};

const page:React.FC<pageProps> = () => {
  
  return (
    <>
    <div className='h-screen w-screen overflow-hidden'>
    <Landing />
    </div>
    </> 
  );
}

export default page;
  
