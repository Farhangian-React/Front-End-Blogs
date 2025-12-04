"use client";

import NavLink from "./NavLink";
import { useAuth } from "@/context/AuthContext";
import { GiBookStorm } from "react-icons/gi";
import Link from "next/link";
import { HiOutlineLogin } from "react-icons/hi";
import { PiUserLight } from "react-icons/pi";
import { BiChevronDown } from "react-icons/bi";
import {Avatar} from "@mui/material";
import { PiHouseLight } from "react-icons/pi";
import { PiListPlusThin } from "react-icons/pi";
import { PiKeyReturnLight } from "react-icons/pi";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react/components/Menu"; 
import CollapsMenu from "./CollapsMenu";


const navLinks = [
  {
    id: 1,
    children: "خانه",
    path: "/",
  },
  {
    id: 2,
    children: "بلاگ ها",
    path: "/blogs",
  },
];

function Header() {
    const { logout } = useAuth();

  const logoutHandler = async () => {
    await logout();
  };

  const { user, isLoading } = useAuth();

  return (
  

  <header
      className={` glowing bg-cover bg-center  mb-0 sticky top-0 z-20 transition-all duration-200 bg-transparent 
       drop-shadow-lg   backdrop-blur-md 
        ${
        isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"
      }`}
      // style={{backgroundImage: 'url("https://eramblog.com/img/wall.jpg")'}}

    >
     
     <nav dir='rtl' className='  sticky top-0 flex justify-between w-[100%] bg-transparent h-[60px]  drop-shadow-lg  py-3  mx-auto z-20 backdrop-blur-md px-5 '>
    <div className="md:hidden flex justify-center items-center ">
<CollapsMenu/>
  </div>
  <Link  href="/"> <div className='flex flex-row justify-center items-center  mr-6'>
  <GiBookStorm className="w-8 h-8 text-primary-400 mt-1 "/>
    <p className='text-xl text-primary-400  font-thin  pr-1 '> فرهنگ بلاگ  </p>
  </div></Link>
  <div className="hidden md:flex items-center gap-x-10">
            {navLinks.map((navLink) => {
              return (
                <div key={navLink.id}>
                  <NavLink path={navLink.path}>{navLink.children}</NavLink>
                </div>
              );
            })}
          </div>
           <div>





{/*
            {user ? (
              <NavLink path="/profile">
              {user.name}
              </NavLink>
            ) : (
              <div className="flex flex-row-reverse justify-between ml-2 ">
              <NavLink path="/signin">
              <button className="flex flex-row-reverse mx-2 text-secondary-700">
                ورود
                <AiFillUnlock className="mt-1 ml-1 text-secondary-700 "/></button>
              </NavLink>

                <NavLink path="/signup">
                <button className="flex flex-row-reverse mx-2 text-secondary-700">
                عضویت
                <HiUser className="mt-1 ml-1 text-secondary-700"/></button>
              </NavLink>
              </div>
            )}





*/}


 { user ? (

    <Menu >
      <MenuHandler >
      <button className=' flex flex-row justify-center self-center py-1 rounded-xl
      btn-bezh text-secondary-900 border border-primary-500 outline-none duration-200
        transition-all ease-in-out hover:border-primary-300 focus:outline-none focus:border-primary-300 
        focus:shadow-input-focus focus:bg-[#ebe2d9]
 '
     type='submit' >  <PiUserLight className="w-5 h-5 mt-0.5 text-primary-600 font-bold mr-1"/>  
      <BiChevronDown className="w-4 h-4 mt-2 text-primary-600 font-bold "/></button>

      </MenuHandler>
      <MenuList className=" w-[250px] ml-5 mt-5 space-y-3 rounded-md ">
      <MenuItem className="flex flex-row justify-start border-b-2 pt-3 ">
     <Avatar/>

  <p className="pt-3 pr-2"> {user.name}</p>

</MenuItem>
       <Link className="hover:border-none focus:outline-none focus:border-none" href="/profile"> <MenuItem className="flex flex-row-reverse justify-end py-2">
      <p className='text-sm  text-secondary-600 hover:text-primary-900 mx-2 '> حساب کاربری </p>  <PiHouseLight className="w-4 h-4 mt-1 text-secondary-600"/> 

</MenuItem></Link>
            <Link className="hover:border-none focus:outline-none focus:border-none" href="/profile/post"> <MenuItem className="flex flex-row-reverse justify-end py-2 ">
      <p className='text-sm  text-secondary-600 hover:text-primary-900 mx-2 '>  پست ها   </p>  <PiListPlusThin className="w-4 h-4 mt-1 text-secondary-600"/> 

</MenuItem></Link>
 <Link className=" hover:border-none focus:outline-none focus:border-none" href="/"> <MenuItem className="flex flex-row-reverse justify-end py-2">
      <p   onClick={logoutHandler} className='text-sm text-secondary-600 hover:text-red-600 mx-2 '>  خروج   </p>  <PiKeyReturnLight className="w-4 h-4 mt-1  text-secondary-600"/> 

</MenuItem></Link>
    
      </MenuList>
    </Menu>
  ) :
 (<Link className="block py-2" href="/signin">
  <div className="btn-gray  flex flex-row-reverse rounded-2xl font-bold  text-secondary-800 text-[14px] px-2 py-1">
     <HiOutlineLogin className="w-5 h-5 mt-1 mx-1.5 text-primary-600 "/>
   <button  type='submit' > ورود</button> 
   
  </div> </Link>
)}





      </div>
      </nav>
    </header>
  );
}
export default Header;
