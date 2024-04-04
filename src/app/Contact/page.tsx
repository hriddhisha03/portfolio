"use client";
import React from 'react';
import Image from 'next/image';

type ContactProps = {};

const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/hriddhisha-halder/');
};

const handleGithub = () => {
    window.open('https://github.com/hriddhisha03');
};
const Contact: React.FC<ContactProps> = () => {

    return <>
        <div className="flex flex-col items-center bg-black h-screen w-screen overflow-hidden">
            <div className="w-full h-1/4 pt-10 justify-center flex">
                <h1 className="font-sans font-semibold text-8xl text-white">Contact Me</h1>
            </div>
            <div className="h-3/4 w-full flex space-x-80 justify-center pt-20">
                    <button onClick={handleLinkedIn} className="bg-blue-800 text-2xl font-semibold h-1/2 w-1/6 rounded-full flex flex-col items-center justify-center transition-all duration-700 ease-in-out transform hover:rounded-bd1">LinkedIn<Image src="/LinkedIn.png" alt="hero" width={50} height={50}/></button>
                    <button onClick={handleGithub} className="bg-github text-2xl font-semibold h-1/2 w-1/6 rounded-full flex flex-col items-center justify-center transition-all duration-700 ease-in-out transform hover:rounded-bd1">GitHub<Image src="/github.png" alt="hero" height={50} width={50}/></button>
                    <button className="bg-zinc-100 font-semibold h-1/2 w-1/6 rounded-full flex flex-col items-center justify-center text-blue-500 text-2xs transition-all duration-700 ease-in-out transform hover:rounded-bd1">hriddhisha03@gmail.com<Image src="/gmail.png" alt="hero" height={50} width={50}/></button>
            </div>

        </div>

    </>

};

export default Contact;