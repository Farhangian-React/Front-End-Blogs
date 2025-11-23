"use client";

import NavLink from "./NavLink";
import { useAuth } from "@/context/AuthContext";
import  Image  from "next/image";
import { GiBookStorm } from "react-icons/gi";
import Link from "next/link";
import { AiFillUnlock } from "react-icons/ai";
import { HiUser } from "react-icons/hi2";

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
  <Link  href="/"> <div className='flex flex-row justify-center items-center  mr-6'>
  <GiBookStorm className="w-8 h-8 text-primary-400 mt-1 "/>
    <p className='text-xl text-primary-400  font-thin  pr-1 '> فرهنگ بلاگ  </p>
  </div></Link>
  <div className="flex items-center gap-x-10">
            {navLinks.map((navLink) => {
              return (
                <div key={navLink.id}>
                  <NavLink path={navLink.path}>{navLink.children}</NavLink>
                </div>
              );
            })}
          </div>
           <div>
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
      </div>
      </nav>
    </header>
  );
}
export default Header;
