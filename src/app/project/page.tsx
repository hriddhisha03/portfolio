"use client";
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
type projectProps = {
    
};

const project:React.FC<projectProps> = () => {
    const [project, setProject] = useState(false);
    // setTimeout(() => {
    //     setProject(false);
    // }, 2000);
    const [button1, setButton1] = useState('h-ht2 w-60');
    const [button2, setButton2] = useState('h-ht1 w-80 ');
    const [button3, setButton3] = useState('h-ht2 w-60 ');
    const [button4, setButton4] = useState('h-20 w-40 translate-x-44 mt-8 opacity-0 ');
    const [button5, setButton5] = useState('h-20 w-40 -translate-x-44 mt-8 opacity-0 ');



    const handleProjectLeft = () => {
        //animation for button1
        setButton1('transition-all duration-700 ease-in h-20 w-40 -translate-x-40 opacity-0 ');
        setTimeout(() => {
            setButton1('h-ht2 w-60')// Your code to execute after the delay goes here
        }, 1000);
        setButton2('transition-all duration-700 ease-in h-ht2 w-60 -translate-x-button2 translate-y-4  ');
        setTimeout(() => {
            setButton2('h-ht1 w-80')// Your code to execute after the delay goes here
        }, 1000);
        setButton3('transition-all duration-700 ease-in h-ht1 w-80 -translate-x-button3 -translate-y-4 ');
        setTimeout(() => {
            setButton3('h-ht2 w-60')//default value of button3 Your code to execute after the delay goes here
        }, 1000);
        setButton4('transition-all duration-700 ease-in h-ht2 w-60  translate-y-4 opacity-100');
        setTimeout(() => {
            setButton4('h-20 w-40 translate-x-44 mt-8 opacity-0')//default value of button3 Your code to execute after the delay goes here
        }, 1000);

    }

    const handleProjectRight = () => {
       setButton3('transition-all duration-700 ease-in h-20 w-40 translate-x-40 translate-y-3 opacity-0 ');
       console.log('button3',button3); 
       setTimeout(() => {
        setButton3('h-ht2 w-60 ')// Your code to execute after the delay goes here
       }, 1000);
        setButton2('transition-all duration-700 ease-in h-ht2 w-60 translate-x-buttonright translate-y-4 ');
        setTimeout(() => {
            setButton2('h-ht1 w-80')// Your code to execute after the delay goes here
        }, 1000);
        setButton1('transition-all duration-700 ease-in h-ht1 w-80 translate-x-buttonright1 -translate-y-4');
        setTimeout(() => {
            setButton1('h-ht2 w-60')// Your code to execute after the delay goes here
        }, 1000);
        setButton5('transition-all duration-700 ease-in h-ht2 w-60 -translate-y-4 mt-8 opacity-100');
        setTimeout(() => {
            setButton5('h-20 w-40 mt-8 -translate-x-44 mt-8 opacity-0')// Your code to execute after the delay goes here
        }, 1000);

    }

    return( 
    <>
    
    
    {project?(<><div className={`w-screen h-screen  `}>
    <button className="bg-gradient-to-r from-color1 to-color2 h-full w-full hover:text-black "> 
        <p className="font-sans text-8xl bg-gradient-to-r from-maroon to-r8dark bg-clip-text text-transparent pb-4
         font-bold">Projects</p>
    </button>
    </div></>):(<>
    <div className="flex w-screen flex-col h-screen"> 
   
    <div className='flex w-screen justify-center place-items-center box h-1/3'>
        
        <p className='font-sans text-8xl bg-gradient-to-r from-maroon to-r8dark bg-clip-text text-transparent pb-4
         font-bold justify-center items-center my-5'>
            Projects</p></div>
    <div className='flex w-screen justify-start items-center h-2/5 '>
        <button onClick={handleProjectLeft} className='z-50 left-0 ml-20'><Image className='rotate-180'src="/arrow.png" alt="arrow" width={30} height={30} /></button>
        
    <div className='relative w-3/4 ml-20 items-center mt-32 h-full '>
        <button className={`${button5} text-pgText absolute left-0 font-sans text-4xl font-semibold bg-gradient-to-r from-pgPeach to-pgLight rounded-bd2 `}>Project </button>
        <button className={`text-pgText ${button1} absolute mt-4 top-0 left-0 font-sans text-4xl font-semibold bg-gradient-to-r from-pgPeach to-pgLight rounded-bd2`}>Project </button>
        <button className={`text-pgText ${button2} absolute -translate-x-40 top-0 font-sans left-1/2 text-4xl font-semibold bg-gradient-to-r from-pgPeach to-pgLight rounded-bd2`}>Project </button>
        <button className={`text-pgText ${button3} absolute mt-4 right-0 top-0 font-sans text-4xl font-semibold bg-gradient-to-r from-pgPeach to-pgLight rounded-bd2`}>Project </button>
        <button className={`${button4} text-pgText absolute right-0 ml-20 font-sans text-4xl font-semibold bg-gradient-to-r from-pgPeach to-pgLight rounded-bd2 `}>Project </button>
    </div>
        <button onClick={handleProjectRight} className='z-50 right-0 ml-20'><Image src="/arrow.png" alt="arrow" width={30} height={30} /></button>

    </div>
    </div>
    </>)}
    </>
    
    
);
}
export default project;
/*<div className='flex w-screen items-center h-2/5 '>
    
        <button className='ml-3 mr-2'><Image className='rotate-180' src="/arrow.png" alt="arrow" width={30} height={30} /></button>
        <button onClick={handleProjectLeft} className={`${button1} text-pgText font-sans text-4xl ml-12 font-semibold bg-gradient-to-r from-pgPeach to-pgLight rounded-bd2`}>Project 1</button>
        <button className='h-ht1 w-80 text-pgText font-sans text-6xl ml-80 font-semibold bg-gradient-to-r from-pgPeach via-pgLight to-pgPeach rounded-bd2'>Project 2</button>
        <button className='h-ht2 w-60 text-pgText font-sans text-4xl ml-80 font-semibold bg-gradient-to-r from-pgLight to-pgPeach rounded-bd2'>Project 3</button> 
        <button className='pl-10 mr-3'><Image src="/arrow.png" alt="arrow" width={30} height={30} /></button>
        {` ${button4} absolute right-0 translate-x-20`}
    </div>*/