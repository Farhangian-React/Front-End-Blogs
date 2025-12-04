 "use client"
 import blog from "../../img/blog2.png";
 import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
export default function ImagesBanner(){

 useEffect(()=> {
      AOS.init({
        disable: "phone",
        duration: 700,
        easing: "ease-out-cubic",
      })
  },[]);
  return(
 <div
 data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
  className="flex justify-center w-full md:w-[50%]">
        <Image className="w-[90%] h-[90%] mx-auto" src={blog} alt=""/>
    </div>
  );
}