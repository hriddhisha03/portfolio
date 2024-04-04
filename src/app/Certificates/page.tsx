"use client";
import React from 'react';
import Image from 'next/image';

type CertificatesProp = {

    
};


    const Certificates:React.FC<CertificatesProp> = () => {

        const [certificate_count, setCertificateCount] = React.useState(0);
        const [certificate, setCertificate] = React.useState("absolute ml-24 top-[53px] transition-opacity duration-500 ease-in-out");
const certificates: {[key:number]: {[key:string]:string} }= {
    0: {
        'name': 'Certificate 1',
        'image': '/1.png',
        'description': "Completion of Postman API fundamentals Student Expert two days workshop by Lets Upgrade and Postman"
        },
    1: {
        'name': 'Certificate 2',
        'image': '/2.png',
        'description': "INTERNSHIP COMPLETION CERTIFICATE ON DATA SCIENCE (03/2023 - 04/2023) Successfully completed data science live projects from Artifintel in association with Skillvertex"
        },
    2: {
        'name': 'Certificate 3',
        'image': '/3.png',
        'description': "MICROSOFT AZURE WORKSHOP CERTIFICATE (09/2023) For participating in 'MICROSOFT AZURE WORKSHOP' conducted byRAIT ACM"
        
        },
    3: {
        'name': 'Certificate 4',
        'image': '/4.png',
        'description': "TRAINING COMPLETION CERTIFICATE ON DATA SCIENCE (02/2023 - 03/2023)Successfully completed training in data science, held by the SkillVertex company"
        },
    4: {
        'name': 'Certificate 5',
        'image': '/5.png',
        'description': "RUST PROGRAMMING CERTIFICATE (10/2022) Attended workshop for rust programming , and secured 'A' GRADE organized by college"
        },
    5: {
        'name': 'Certificate 6',
        'image': '/6.png',
        'description': " Completion certificate for the 'Data Analytics with Specialization in Tableau' workshop offered by Jobaaj Learning!"
        },
    6: {
        'name': 'Certificate 7',
        'image': '/7.png',
        'description': "Awarded as the best facilitator for the tenure of GDSC 2023-24 AIML and Women In Tech domain"
    }
}

        const handleDown = () => {
            
            setCertificate("absolute ml-24 top-[53px] transition-all duration-500 ease-in translate-y-32 opacity-0 ")

            setTimeout(() => {
                setCertificateCount((certificate_count + 1)%7);
                setCertificate("absolute ml-24 top-[53px] transition-opacity duration-500 ease-in translate-y-0 ")
            }, 1000);
            
            
            
        }
    
        return (
        <>
            <div className="flex w-screen h-screen items-center bg-yellow-yellow"> 
        
            <div className='flex w-1/2 flex-col space-y-28 items-center box h-full'>
            
            <p className='mt-12 font-sans text-8xl bg-gradient-to-r from-maroon to-r8dark bg-clip-text text-transparent pb-4
                font-bold  items-center my-5'>Certificates</p>
                <p className= 'font-sans text-2xl text-center pl-5 text-white font-medium '>{certificates[certificate_count]["description"]}</p>
                
                </div>
            {/*right division */}
            <div className='relative h-3/4 w-1/2'>
                
                <button className=" rotate-180 z-50 absolute top-0 ml-96" ><Image src="/arrow2.png" alt="arrow" width={30} height={30} /></button>
                <Image className={`${certificate}`} src={certificates[certificate_count]["image"]} alt="arrow" width={600} height={400} />
                <button onClick={handleDown} className="z-50 absolute bottom-0 ml-96" ><Image src="/arrow2.png" alt="arrow" width={30} height={30}/></button>
            </div> 
            </div>
        
        </>
    )
    
}
export default Certificates;