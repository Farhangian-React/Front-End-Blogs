import Link from "next/link";
import { PiCopyright } from "react-icons/pi";

import { Suspense } from "react";
import Search from "@/components/ui/Search";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
export default function Footer() {
    return(
<div className=" w-[93%] mx-auto mt-28  mb-20">
<div className="flex flex-row justify-between mx-auto w-full my-5 px-1.5 ">
<div className="flex flex-row justify-start ">
<Link className="text-blue-500 ml-1 hover:text-secondary-500" href="/blogs" >مجله اینترنتی</Link>
<Link className="text-blue-500 mx-2  hover:text-secondary-500" href="/profile/post/create">ساخت وبلاگ</Link>
<Link className="text-blue-500 mx-2  hover:text-secondary-500" href="/rules">قوانین</Link>
<Link className="text-blue-500 mx-2  hover:text-secondary-500" href="/">تماس با ما</Link>
</div>
<div className="hidden  md:flex flex-row justify-start">
    <PiCopyright className="text-secondary-700 mt-1 mx-1"/>
<p className="flex flex-row text-sm">
 تمامی حقوق این سایت متعلق به <Link className="text-blue-500 mx-1" href="/">فرهنگ بلاگ </Link> می باشد.
</p>
</div>
</div>
<div className="bg-white w-full rounded-2xl shadow-md flex flex-col mx-auto">
<div className="flex flex-col justify-center mx-auto w-2/3">
       <div className="w-full mx-auto h-[30px]  leading-[30px] border-b-2 border-[#ccc] rtl mt-[25px]  mb-8 ">
      <span className=" border-b-2 border-blue-400" >  جستجو </span>
    </div>
     <Suspense>
              <Search />
            </Suspense>
            </div>
            <div className="flex flex-row justify-center my-8  ">
                 <img    src="https://cdn.zarinpal.com/badges/trustLogo/1.svg" className='w-[100px]  h-[100px] ml-3'/>
          <img   src="/110.png" 
          className='w-[100px] h-[100px] mx-3'/>
            </div>
            </div>
            <div className="px-1.5 my-8">
                <p className="text-sm text-secondary-700 text-justify">
                    بازنشر مطالبی که گروه تحریریه مجله ارم بلاگ در وب سایت و شبکه های اجتماعی خود، منتشر می‌کند، در دیگر رسانه‌های مکتوب و مجازی به شرط ذکر منبع بلامانع است. در غیر این صورت، بدیهی است حق پیگیری قانونی مطابق با قانون حمایت از مولفین و ناشرین دیجیتال وزارت فرهنگ و ارشاد اسلامی برای مجله ارم بلاگ محفوظ خواهد بود.
                </p>
            </div>
         
   
              <ul className='flex flex-row justify-center my-10'>
       <a href='https://wa.me/989300318282' className='navicon1'><li><IoLogoWhatsapp 
       className='w-6 h-6 text-blue-400 hover:text-secondary-500 font-bold '/></li></a>
     <a href='https://www.linkedin.com/in/elham-65-farhangianan' className='navicon1'><li><FaLinkedin 
     className='w-6 h-6 text-blue-400 hover:text-secondary-500 font-bold '/></li></a>
      <a href='https://t.me/Farhangianeli' className='navicon1'><li><FaTelegram 
       className='w-6 h-6 text-blue-400 hover:text-secondary-500 font-bold '/></li></a>
       <a  href='https://github.com/Farhangian-React' className='navicon1'><li><FaGithubSquare  
       className='w-6 h-6 text-blue-400 hover:text-secondary-500 font-bold '/></li></a>
    </ul>
<div className="md:hidden  flex flex-row justify-center mt-16">
    <PiCopyright className="text-secondary-700 mt-1 mx-1"/>
<p className="flex flex-row text-sm text-secondary-600">
 تمامی حقوق این سایت متعلق به <Link className="text-blue-500 mx-1" href="/">فرهنگ بلاگ </Link> می باشد.
</p>
</div>
</div>
    );
}