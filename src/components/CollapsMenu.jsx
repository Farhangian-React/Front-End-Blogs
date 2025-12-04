"use client"
import {useState} from 'react';
import { IoBookOutline } from "react-icons/io5";
import { LuMonitor } from "react-icons/lu";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BiChevronDownSquare } from "react-icons/bi";
import { HiMenuAlt3 } from "react-icons/hi";
import { Drawer } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { IoClose } from "react-icons/io5";
import { HiOutlineLogin } from "react-icons/hi";
import { Avatar } from "@mui/material";
import { CiEdit } from "react-icons/ci";
import { BiHomeSmile } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiProgress } from "react-icons/si";
import Link from 'next/link';

export default function CollapsMenu (){
   
    const [open, setOpen] = useState(false);
 const [open1, setOpen1] = useState(false);

    const handleToggle = () => setOpen1(!open1);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    return(
        
< >
 <button

onClick={handleDrawerOpen}

    >
      <HiMenuAlt3 className='h-6 w-6 text-[#384033]' />
    </button>
   <Drawer open={open} onClose={handleDrawerClose}
   className='backdrop-blur-lg'
   sx={{
flexShrink: 0, '& .MuiDrawer-paper': {position:"relative",bgcolor:"#fff",width:"270px" ,direction:"rtl",height:"100vh",borderTopLeftRadius:"30px"}
   
   }}
     
        anchor="right"
     
   >
<div className='flex flex-col justify-start'>
       
         
<div className='flex justify-between w-full self-end border-b-2 border-secondary-200 my-5 pb-2 '>
    <div className='flex flex-row justify-center items-center  mr-3'>
     <SiProgress className="w-6 h-6 text-primary-500 "/>
       <p className='text-lg text-primary-500  font-bold  pr-2 '>آینده ی برتر </p>
     </div>
            <IconButton 
             title='Title'
            onClick={handleDrawerClose}>
        <IoClose className='h-5 w-5 text-secondary-900 ml-2  hover:text-red-800'/> 
          </IconButton>
         </div>   

 <ul dir='ltr' className='flex flex-col justify-start pr-3'>
   <Link className="block py-2" href="/products"><li className='px-3 flex flex-row-reverse'> 
  <BiHomeSmile className="w-4 h-4 mt-1 text-primary-500 mx-1.5"/>
  <p className='text-sm font-bold text-primary-500 hover:text-primary-600 hover:scale-105'> خانه  </p> 
</li></Link>
 <Link className="block py-2" href="/products"><li className='px-3 flex flex-row-reverse'> 
  <IoBookOutline className="w-4 h-4 mt-1 text-secondary-600 mx-1.5"/>
  <p className='text-sm font-bold text-secondary-600 hover:text-primary-600 hover:scale-105'>دوره های آموزشی  </p> 
</li></Link>
  <Link  className="block py-2" href="/bootcamp"><li className='px-3 flex flex-row-reverse'>
   <LuMonitor className="w-4 h-4 mt-1 text-secondary-600 mx-1.5"/>
     <p className='text-sm font-bold text-secondary-600 hover:text-primary-600 hover:scale-105'>بوت کمپ </p>
  </li></Link>
  <Link className="block py-2" href="/admin"><li className='px-3 flex flex-row-reverse'>
    <AiOutlineSafetyCertificate className="w-4 h-4 mt-1 text-secondary-600 mx-1.5"/> 
     <p className='text-sm font-bold text-secondary-600 hover:text-primary-600 hover:scale-105'>استخدامی بچه ها</p>
 </li></Link>
 <li className='px-3 flex flex-row-reverse py-2'>
   <button
   className='flex flex-row-reverse border-none bg-transparent'
      onClick={handleToggle}
      > <BiChevronDownSquare className="w-4 h-4 mt-1 text-secondary-600 mx-1.5"/> 
   <p className='text-sm font-bold text-secondary-600 hover:text-primary-600 hover:scale-105'> ارتباط با ما </p>
  </button> 
  {open1 && (
                    <ul dir='rtl' className="mt-8  absolute bg-transparent space-y-2 mr-3  z-10">
                        {/* Menu Item 1 */}
                     <li className='flex flex-row'>
  <IoLogoWhatsapp  className="w-4 h-4 mt-2 text-secondary-600 mx-1.5"/>
 <p className='text-sm   text-secondary-600 mr-2 mt-1.5'> واتساپ</p></li>
<a href='https://www.linkedin.com/in/elham-65-farhangianan'><li className='flex flex-row'>
  <FaLinkedin   className="w-4 h-4 mt-2 text-secondary-600 mx-1.5"/>
 <p className='text-sm text-secondary-600  mr-2 mt-1.5'>لینکدین </p></li></a>
 <a href='https://t.me/Farhangianeli'> <li className='flex flex-row'>
  <FaTelegram   className="w-4 h-4 mt-2 text-secondary-600 mx-1.5"/>
   <p className='text-sm text-secondary-600  mr-2 mt-1.5'> تلگرام</p></li></a>
 <a href='https://github.com/Farhangian-React'><li className='flex flex-row'>
  <FaGithubSquare  className="w-4 h-4 mt-2 text-secondary-600 mx-1.5"/>
  <p className='text-sm text-secondary-600  mr-2 mt-1.5'> گیت هاب</p></li></a>
  
   
  
</ul>
  )}
 </li>
 </ul>
 {/*<li><p className='text-sm py-5 text-gray-500'>شبکه های اجتمایی</p></li>
 <a href='https://wa.me/989300318282'><li className='flex flex-row'>
  <IoLogoWhatsapp  className="w-4 h-4 mt-1 text-secondary-700 mx-1.5"/>
 <p className='text-sm font-bold  text-secondary-700 mr-2 mt-1.5'> واتساپ</p></li></a>
<a href='https://www.linkedin.com/in/elham-65-farhangianan'><li className='flex flex-row'>
  <FaLinkedin   className="w-4 h-4 mt-1 text-secondary-700 mx-1.5"/>
 <p className='text-sm font-bold text-secondary-700  mr-2 mt-1.5'>لینکدین </p></li></a>
 <a href='https://t.me/Farhangianeli'> <li className='flex flex-row'>
  <FaTelegram   className="w-4 h-4 mt-1 text-secondary-700 mx-1.5"/>
   <p className='text-sm font-bold text-secondary-700  mr-2 mt-1.5'> تلگرام</p></li></a>
 <a href='https://github.com/Farhangian-React'><li className='flex flex-row'>
  <FaGithubSquare  className="w-4 h-4 mt-1 text-secondary-700 mx-1.5"/>
  <p className='text-sm font-bold  text-secondary-700  mr-2 mt-1.5'> گیت هاب</p></li></a>
*/}

  
</div> 
  
 </Drawer>
 </>
    )
 }
 