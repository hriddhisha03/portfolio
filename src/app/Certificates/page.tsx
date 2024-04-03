import React from 'react';
import Image from 'next/image';

type CertificatesProp = {

    
};

const Certificates:React.FC<CertificatesProp> = () => {
    
    return (
    <>
    <div className="flex w-screen h-screen items-center bg-yellow-yellow"> 
   
   <div className='flex w-1/2 flex-col space-y-28 items-center box h-full bg-white'>
       
       <p className='mt-12 font-sans text-8xl bg-gradient-to-r from-maroon to-r8dark bg-clip-text text-transparent pb-4
        font-bold  items-center my-5'>Certificates</p>
        <p className= 'font-sans text-2xl text-black '>I love you Ratna</p>
        
        </div>
    {/*right division */}
    <div className='relative h-3/4 w-1/2 bg-slate-500'>
        
        <button className=" rotate-180 z-50 absolute top-0 ml-96" ><Image src="/arrow2.png" alt="arrow" width={30} height={30} /></button>
        <Image className='absolute ml-24 top-[53px] ' src="/1.png" alt="arrow" width={600} height={400} />
        <button className="z-50 absolute bottom-0 ml-96" ><Image src="/arrow2.png" alt="arrow" width={30} height={30}/></button>
    </div> 
    </div>
    
    </>
    )
    
}
export default Certificates;