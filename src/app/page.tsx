"use client";
import React from 'react';


import Landing from '../components/Landing';
type PageProps = {
  
};

const Page:React.FC<PageProps> = () => {
  
  return (
    <>
    <div className='h-screen w-screen overflow-hidden'>
    <Landing />
    </div>
    </> 
  );
}

export default Page;
  
