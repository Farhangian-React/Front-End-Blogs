'use client';

import React, { useState } from 'react';
import Ssignin from './Ssignin';
import Ssignout from './Ssignout';
import SinginS from './SinginS';
import SingoutS from './SingoutS';
import Link from 'next/link';

export default function AuthFormContainer() {
    // isActive: false برای ورود (Login)، true برای ثبت نام (Register)
    const [isActive, setIsActive] = useState(false); 

    const handleRegisterClick = () => {
        setIsActive(true);
    };

    const handleLoginClick = () => {
        setIsActive(false);
    };

    const handleFormSubmit = (e, formType) => {
        e.preventDefault();
        console.log(`فرم ${formType} ارسال شد. در اینجا منطق API اجرا می‌شود.`);
    };

    // 1. کلاس کانتینر بر اساس State (معادل container.classList.add/remove('active'))
    const containerClasses = `container1 ${isActive ? 'active' : ''}`;
    
    return (
        <>
        <div className='hidden md:flex'>
        <div className={containerClasses}>
            {/* اشکال منحنی */}
            <div className="curved-shape"></div>
            <div className="curved-shape2"></div>

            {/* ---------------------------------------------------- */}
            {/* 1. بخش ورود (Login) - نمایش داده می‌شود اگر isActive === false */}
            {/* ---------------------------------------------------- */}
           <Ssignin handleRegisterClick={handleRegisterClick} isActive={isActive}/>

            {/* محتوای اطلاعات ورود */}
            <div className="info-content Login" style={{ display: isActive ? 'none' : 'block' }}>
               <p className="animation text-justify text-3xl  font-bold" style={{ '--D': 0, '--S': 20 }}>خوش آمدید!</p>
                  <p className="animation text-right text-sm pt-2" style={{ '--D': 1, '--S': 21 }}>از حضور شما در کنار 
                    <span className='text-primary-500 font-bold text-md'> فرهنگ بلاگ</span> خوشحالیم. اگر به کمک نیاز دارید، در خدمت شما هستیم.</p>
            </div>

            {/* ---------------------------------------------------- */}
            {/* 2. بخش ثبت نام (Register) - نمایش داده می‌شود اگر isActive === true */}
            {/* ---------------------------------------------------- */}
         <Ssignout handleLoginClick={handleLoginClick} isActive={isActive} />

            {/* محتوای اطلاعات ثبت نام */}
            <div className="info-content Register" style={{ display: isActive ? 'block' : 'none' }}>
                <p className="animation text-justify text-3xl  font-bold" style={{ '--li': 17, '--S': 0 }}>خوش آمدید!</p>
                <p className="animation text-right text-sm pt-2" style={{ '--li': 18, '--S': 1 }}>از حضور شما در کنار 
                    <span className='text-primary-500 font-bold text-md'> فرهنگ بلاگ</span> خوشحالیم. اگر به کمک نیاز دارید، در خدمت شما هستیم.</p>
            </div>

        </div>
        </div>
     
       
         <div className="relative flex flex-col  md:hidden justify-center mx-auto w-screen">
         <div className="flex flex-col justify-center mx-auto w-[80%]" >
                <p className=" text-center text-3xl  font-bold mb-1" >خوش آمدید!</p>
                <div className='flex flex-row justify-center '>
                <p className=" text-center text-sm pt-2">از حضور شما در کنار </p> 
                    <Link className='mt-1.5 px-1' href="/"><span className='text-[#d3ccc6] text-md '> فرهنگ بلاگ</span></Link>
                <p className=" text-center text-sm pt-2"> خوشحالیم.</p>
           </div>
            </div>
   <SinginS handleRegisterClick={handleRegisterClick} isActive={isActive}/>

           
         <SingoutS handleLoginClick={handleLoginClick} isActive={isActive} />

        
      
        </div>
        </>
    );
}
