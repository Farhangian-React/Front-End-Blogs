"use client";
import Image from "next/image";
import { IoMdArrowRoundBack } from "react-icons/io";
import errorimg from "@/img/gift.gif";
import Link from "next/link";
function NotFound() {
  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10">
          <div>
            <h1 className="text-xl font-bold text-secondary-700 mb-8">
              پستی که دنبالش بودید، پیدا نشد
            </h1>
            <Image className="w-[80%] h-[60%] mx-auto" src={errorimg}/>
              <div className="flex flex-row-reverse w-auto mx-auto justify-around  my-5  px-0.5 py-0.5  ">
            <Link href={"/blogs"}>
            <button
              className="flex items-center gap-x-2 text-secondary-500"
            >
                 <p className="text-md text-primary-700 px-1 ">برگشت به صفحه ی پست ها</p>
              <IoMdArrowRoundBack className="w-6 h-6 text-primary-900" />
            </button>
            </Link>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
