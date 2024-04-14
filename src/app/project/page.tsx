"use client";
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { count } from 'console';
type projectProps = {
    
    
};

const projects: {[key:number]:{[key:string]:string}}  = {0:{"name":"Digital Living", "desc":"The website motto is to find the best residential place with proximities including all personalized facilities for the individuals relocating place due to work/ education/health care Frontend, HTML, CSS, JS implemented, and for backend leaflet.js implemented."}, 1:{"name":"Parakh", "desc":"Under Smart India Hackathon, formulation of algorithms to create real time quizzes based on student's ability."}, 2:{"name":"Life Expectency Prediction", "desc":"Using machine learning algorithms and ensemble learning to precisely predict the expected life span of an individual."}, 3:{"name":"Loan Amounting", "desc":"Project on loan amount prediction based on credit history and other variables using python various libraries and machine learning models."}, 4:{"name":"Dino Dash", "desc": "A 2D runner game where the player avoids obstacles with the input being the user's real life physical motion detected through an image recognition algorithm implemented with OpenCV."}, 5:{"name":"Decentralized Incident Reporting", "desc": "Using blockchain as a means of security, we made an incident reporting system which allows citizens to report incidents while being anonymous and being assured that the data isn't being tampered with."}};
var count0: number = 0;
var count1: number = 1;
var count2: number = 2;
var count3: number = 3;
var count4: number = 4;

const Project:React.FC<projectProps> = () => {
    const [project, setProject] = useState(false);
    // setTimeout(() => {
    //     setProject(false);
    // }, 2000);
    const [button1, setButton1] = useState('h-ht2 w-60');
    const [button2, setButton2] = useState('h-ht1 w-80 ');
    const [button3, setButton3] = useState('h-ht2 w-60 ');
    const [button4, setButton4] = useState('h-20 w-40 translate-x-44 mt-8 opacity-0 ');
    const [button5, setButton5] = useState('h-20 w-40 -translate-x-44 mt-8 opacity-0 ');

    const [desc_class, setDesc_class] = useState('transition-all duration-700 ease-in opacity-100 ');



    const handleProjectLeft = () => {

        
        if (count4 == 5){
            count4 = 0;
        }
        else{
            count4 = (count4 + 1)%6;
        }

        setTimeout(() => {
            count1 = count2;
            count2 = count3;
            count3 = count4;        
        }, 500);

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

        setDesc_class('transition-all duration-700 ease-in opacity-0');
        setTimeout(() => {
            setDesc_class('transition-all duration-700 ease-in opacity-100 ')
        }, 1000);// Your code to execute after the delay goes here

    }

    const handleProjectRight = () => {
        setButton3('transition-all duration-700 ease-in h-20 w-40 translate-x-40 translate-y-3 opacity-0 ');
        if (count0 == 0){
            count0 = 5;
        }
        else{
            count0 = (count0 - 1)%6;
        }
        count4 = count3;
        setTimeout(() => {count3 = count2;
        count2 = count1;
        count1 = count0;
    }, 500);
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

        setDesc_class('transition-all duration-700 ease-in opacity-0');
        setTimeout(() => {
            setDesc_class('transition-all duration-700 ease-in opacity-100 ')
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
    <div className="flex w-screen flex-col h-screen overflow-hidden"> 
   
    <div className='flex w-screen justify-center place-items-center box h-1/3'>
        
        <p className='font-sans text-8xl bg-gradient-to-r from-maroon to-r8dark bg-clip-text text-transparent pb-4
         font-bold justify-center items-center my-5'>
            Projects</p></div>
    <div className='flex w-screen justify-start items-center h-2/5 '>
        <button onClick={handleProjectLeft} className='z-50 left-0 ml-20'><Image className='rotate-180'src="/arrow.png" alt="arrow" width={30} height={30} /></button>
        
    <div className='relative w-3/4 ml-20 items-center mt-32 h-full '>
        <button className={`${button5} text-pgText absolute left-0 font-sans text-2xl font-semibold bg-gradient-to-r from-pgPeach to-pgLight rounded-bd2 `}>{projects[count0]["name"]} </button>
        <button className={`text-pgText ${button1} absolute mt-4 top-0 left-0 font-sans text-2xl font-semibold bg-gradient-to-r from-pgPeach to-pgLight rounded-bd2`}> {projects[count1]["name"]}  </button>
        <button className={`text-pgText ${button2} absolute -translate-x-40 top-0 font-sans left-1/2 text-2xl font-semibold bg-gradient-to-r from-pgPeach to-pgLight rounded-bd2`}> {projects[count2]["name"]}</button>
        <button className={`text-pgText ${button3} absolute mt-4 right-0 top-0 font-sans text-2xl font-semibold bg-gradient-to-r from-pgPeach to-pgLight rounded-bd2`}> {projects[count3]["name"]} </button>
        <button className={`${button4} text-pgText absolute right-0 ml-20 font-sans text-2xl font-semibold bg-gradient-to-r from-pgPeach to-pgLight rounded-bd2 `}> {projects[count4]["name"]}</button>
    </div>
        <button onClick={handleProjectRight} className='z-50 right-0 ml-20'><Image src="/arrow.png" alt="arrow" width={30} height={30} /></button>

    </div>
    <div className="w-full h-1/3 flex justify-center text-3xl text-center">
        <h1 className={`${desc_class}`}>{projects[count2]["desc"]}</h1>
    </div>
    </div>
    </>)}
    </>
    
    
);
}
export default Project;
