"use client";
import useMoveBack from "@/hook/useMoveBack";
import Image from "next/image";
import { IoMdArrowRoundBack } from "react-icons/io";
import errorimg from "../img/gift.gif";

function NotFound() {
  //const moveBack = useMoveBack();
  const moveBack = useMoveBack();
  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10">
          <div>
            <h1 className="text-xl font-bold text-secondary-700 mb-8">
              صفحه ای که دنبالش بودید، پیدا نشد
            </h1>
            
            <Image className="w-[80%] h-[60%] mx-auto" src={errorimg} alt="aa"/>
              <div className="flex flex-row-reverse w-1/2 mx-auto justify-around border-2 my-5 rounded-xl px-0.5 py-0.5 border-solid border-secondary-300  ">
            <button
              onClick={moveBack}
              className="flex items-center gap-x-2 text-secondary-500"
            >
                 <p className="text-md text-primary-700 px-1 ">برگشت</p>
              <IoMdArrowRoundBack className="w-6 h-6 text-primary-900" />
              
            </button>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
