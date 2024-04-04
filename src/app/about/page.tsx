"use client";
import React from 'react';
import Image from 'next/image';
import {useState } from 'react';
type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    
    const [resume, setResume] = useState(false);
    const [cv, setCv] = useState(false);
    const handleResume = () => {
        if(resume)
            setResume(false);
        else
            setResume(true);
    };

    const handleCv = () => {

        if(cv)
            setCv(false);
        else
            setCv(true);
    };
    
    return <>
    <div className="flex items-center bg-black h-screen w-screen overflow-hidden">
        <div className="w-2/4 h-full items-center flex pl-10">
            <h1 className="font-sans font-semibold text-8xl bg-gradient-to-r from-maroon to-r8dark bg-clip-text text-transparent">About Me</h1>
        </div>
        <div className="h-full w-3/4 flex space-x-80 justify-center items-center">
            {resume? <div><button onClick={handleResume}><Image className='-translate-x-10 translate-y-10' src="/X.png" alt="hero" width={20} height={20}/></button><Image src="/resume.png" alt="hero" width={480} height={450} /></div> : cv ? <div><button onClick={handleCv}><Image className='-translate-x-10 translate-y-10' src="/X.png" alt="hero" width={20} height={20}/></button><Image src="/cv.png" alt="hero" width={480} height={450} /></div>  :<div className='flex space-x-40'> <button className="bg-r8dark text-2xl font-semibold h-20 w-40 rounded-bd2" onClick={handleResume}>Resume</button> <button className="bg-r8dark text-2xl font-semibold h-20 w-40 rounded-bd2" onClick={handleCv}>CV</button> </div>}
        </div>
    </div>
    </>
}
export default page;