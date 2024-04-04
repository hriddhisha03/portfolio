"use client";
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
type LandingProps = {

  
};

const Landing:React.FC<LandingProps> = () => {
    const router = useRouter();
    
    //for hriddhisha text animation
    const [state, setstate] = useState(false);
    setTimeout(() => {
        setstate(true);
    }, 300);
    
    //for project button animation
    const [project, setproject] = useState({'hover':false, 'click':false});
    
    const [certificate, setCerti] = useState(false);
    const [about, setAbout] = useState(false);
    const [contact, setContact] = useState(false);
    const handleProject = () => {
        setproject({'hover':false, 'click':true});
        
        setTimeout(() => {
            router.push('/project')// Your code to execute after the delay goes here
        }, 500);
    
    }
    const handleAbout = () => {
        
        setTimeout(() => {
            router.push('/about')// Your code to execute after the delay goes here
        }, 1000);
    }

    const handleCertificates = () => {
        
        setTimeout(() => {
            router.push('/Certificates')// Your code to execute after the delay goes here
        }, 1000);
    }
    return (
        <> 
         <div className="bg-black my-20 mx-16 font-sans text-white border-b-4 border-white pb-5 px-5">
            <h2 className={`font-sans text-7xl font-semibold transition-opacity-transform ease-in duration-700 ${state ? "opacity-100" : "opacity-0 -translate-x-20 " }`}>I'm</h2>
            <h1 className={`font-bold text-8xl transition-opacity-transform ease-in duration-500 ${state ? "opacity-100" : "opacity-0 -translate-x-20"}` }>Hriddhisha Halder</h1>
         </div>
         <div className="w-10/12 mx-20 h-80 flex"> 
{/*project button*/}
<div className={`flex h-full transition-width ease-in duration-300 ${project ['hover']? "w-3/4": "w-1/2"} ${project['click']?"scale-300 translate-x-96 -translate-y-24": null}`}>
    <button onClick={handleProject} className="bg-gradient-to-r  from-color1 to-color2 h-full rounded-bd1 w-full hover:text-black "
      onMouseEnter={() => setproject({'hover':true, 'click':false})}
      onMouseLeave={() => setproject({'hover':false, 'click':false})}> 
        <p className="text-6xl font-semibold bg-gradient-to-r from-maroon to-r8dark bg-clip-text text-transparent pb-1">Projects</p>
    </button>
    
</div>
{/*about, contact, certificates button*/}
<div className={`flex flex-col w-1/2 h-full items-center `}>
    
    <div className={`flex w-full transition-height ease-in duration-300 ${about || contact ? "h-3/4": "h-1/2"} `}>
        <div className={`flex h-full transition-width ease-in duration-300 ${about ? "w-3/4": "w-1/2"}`}>
        <button onClick={handleAbout} className="bg-gradient-to-r from-color2 to-color3 h-full w-full rounded-bd1 mx-2"
        onMouseEnter={() => setAbout(true)}
        onMouseLeave={() => setAbout(false)}>
            <p className="text-3xl font-semibold text-beige">About</p>
        </button>
    </div>
    <div className={`flex w-1/2 h-full transition-width ease-in duration-300 ${contact ? "w-3/4": "w-1/2"}`}>
        <button className="bg-gradient-to-r from-color3 to-color4 h-full w-full top-0 rounded-bd1 mr-2"
                onMouseEnter={() => setContact(true)}
                onMouseLeave={() => setContact(false)}>
            <p className="text-3xl font-semibold text-peach">Contact</p>
        </button>
    </div>
    </div>
    <div className={`flex w-full mt-2 transition-height ease-in duration-300 ${certificate ? "h-3/4": "h-1/2"}`}> 
        <button onClick={handleCertificates} className="bg-gradient-to-r from-color2 to-color4 h-full w-full rounded-bd1 mx-2 " 
        onMouseEnter={() => setCerti(true)}
        onMouseLeave={() => setCerti(false)}>
            <p className='text-3xl font-semibold bg-gradient-to-r from-beige to-peach bg-clip-text text-transparent'>Certificates</p> </button>
    </div>
</div>

</div>
        </>                                                             
    );
}
export default Landing; 
