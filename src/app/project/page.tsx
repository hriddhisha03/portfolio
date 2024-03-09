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
    const [button4, setButton4] = useState('h-ht1 w-80 ');
    const handleProject = () => {
        //animation for button1
        setButton1('h-ht1 w-80 translate-x-');
        
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
        <button className='left-0 ml-20'><Image className='rotate-180'src="/arrow.png" alt="arrow" width={30} height={30} /></button>
        
    <div className='relative w-3/4 ml-20 items-center mt-32 h-full '>
        <button className={`text-pgText ${button1} absolute mt-4 top-0 left-0 font-sans text-4xl font-semibold bg-gradient-to-r from-pgPeach to-pgLight rounded-bd2`}>Project 1</button>
        <button className={`text-pgText ${button2} absolute -translate-x-40 top-0 font-sans left-1/2 text-4xl font-semibold bg-gradient-to-r from-pgPeach to-pgLight rounded-bd2`}>Project 2</button>
        <button className={`text-pgText ${button3} absolute mt-4 right-0 top-0 font-sans text-4xl font-semibold bg-gradient-to-r from-pgPeach to-pgLight rounded-bd2`}>Project 3</button>

    </div>
    <button className='right-0 ml-20'><Image src="/arrow.png" alt="arrow" width={30} height={30} /></button>
    </div>
    </div>
    </>)}
    </>
    
    
);
}
export default project;
/*<div className='flex w-screen items-center h-2/5 '>
    
        <button className='ml-3 mr-2'><Image className='rotate-180' src="/arrow.png" alt="arrow" width={30} height={30} /></button>
        <button onClick={handleProject} className={`${button1} text-pgText font-sans text-4xl ml-12 font-semibold bg-gradient-to-r from-pgPeach to-pgLight rounded-bd2`}>Project 1</button>
        <button className='h-ht1 w-80 text-pgText font-sans text-6xl ml-80 font-semibold bg-gradient-to-r from-pgPeach via-pgLight to-pgPeach rounded-bd2'>Project 2</button>
        <button className='h-ht2 w-60 text-pgText font-sans text-4xl ml-80 font-semibold bg-gradient-to-r from-pgLight to-pgPeach rounded-bd2'>Project 3</button> 
        <button className='pl-10 mr-3'><Image src="/arrow.png" alt="arrow" width={30} height={30} /></button>
        {` ${button4} absolute right-0 translate-x-20`}
    </div>*/