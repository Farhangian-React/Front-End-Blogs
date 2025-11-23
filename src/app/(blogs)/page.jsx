import blog from "../../img/blog2.png";
import Button from "@/components/ui/Button";
import Link from "next/link";
import  Image  from "next/image";
export default function Home() {
return(
    <div className="flex flex-col md:flex-row justify-center">
 <div  className="flex flex-col justify-center w-full md:w-[50%]">
      <h1 className="font-bold text-center text-2xl md:text-5xl text-secondary-800 my-10">
        اپلیکیشن مدیریت بلاگ
      </h1>

      <div>
        <p className="text-center text-secondary-500 text-lg leading-loose">
       فرهنگ بلاگ ؛ به روزترین سرویس ساخت وبلاگ در ایران
          <br /> ساخت وبلاگ دلخواهت را همین حالا شروع کن !
        </p>
        <div className="flex justify-center gap-x-8 w-full mt-10">
          <button className="border1  p-2 rounded-md  text-primary-800 dark:text-secondary-100 " >
            <Link href="/blogs">مطالعه بلاگ ها</Link>
          </button>
          <button className="btn-gray p-2 rounded-md text-primary-800 dark:text-secondary-100">
            <Link href="/profile">مدیریت بلاگ ها</Link>
          </button>
        </div>
      </div>
    </div>
    <div className="flex justify-center w-full md:w-[50%]">
        <Image className="w-[90%] h-[90%] mx-auto" src={blog} alt=""/>
    </div>
    </div>
);
}
