
import Link from "next/link";
import BoxCategory from "@/components/blog/BoxCategory";
import Footer from "@/components/Footer";
import ImagesBanner from "./ImagesBanner";
  export const metadata = {
  title: "فرهنگ بلاگ - ساخت وبلاگ - ساخت وبلاگ رایگان - مجله ی اینترنتی ",
  description: "blogs",
};

  // export const dynamic = "force-dynamic";
  
 export default async function Home({ searchParams }) {
   // const queries = queryString.stringify(searchParams);
    // set headers:
   // const cookieStore = cookies();
   // const options = setCookiesOnReq(cookieStore);
  
    // const res = await fetch(
    //   `${process.env.NEXT_PUBLIC_API_URL}/post/list?${queries}`,
    //   { cache: "no-store", ...options }
    // );
    // const {
    //   data: { posts },
    // } = await res.json();
  
 
  
return(
  <>
    <div className="flex flex-col md:flex-row justify-center">
 <div  className="flex flex-col justify-center w-full md:w-[50%]">
      <h1 className="font-bold text-center text-xl md:text-4xl text-secondary-800 mb-6 mt-10">
        اپلیکیشن مدیریت بلاگ
      </h1>

      <div>
        <p className="text-center text-secondary-500 text-md md:text-lg leading-loose">
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
   <ImagesBanner/>
    </div>
    <BoxCategory  searchParams={searchParams}/>
     <Footer/>
    </>
);
}
