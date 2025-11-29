"server"
import Image from "next/image";
import Link from "next/link";

export default async function ListCategory() { 
    

await new Promise((res)=> setTimeout(res,2000));
  const res= await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/list`);
  const {
    data : {categories},
} = await res.json();
    return(
      <>
   <div className="items-center w-[95%] rounded-lg bg-white mt-8 mb-16 py-2 mx-auto shadow-lg ">
    {/* 
       تغییر بزرگ: items-start برای تراز عمودی سطرها از بالا
       حذف space-y-8: این کلاس در رپر، بین ردیف‌ها فاصله ایجاد می‌کند و ممکن است تراز را خراب کند.
    */}
    <div className="flex flex-wrap space-x-6 justify-center items-start">
    
    {categories.map((category) => {
        return (
          <li 
            key={category._id} 
            // در اینجا از کلاس‌های داخلی برای فاصله استفاده می‌کنیم و عرض را ثابت نگه می‌داریم
            className="flex flex-col justify-center space-y-5 w-24 text-center my-6  " // p-1 برای اطمینان از وجود فضای اطراف
          > 
           <Image
              src={category.icon}
              width={32}
              height={32}
              alt="icon"
              className="block mx-auto"
            />     
            <Link href={`/blogs/category/${category.slug}`}>
              {category.title}
            </Link>
          </li>
        );
    })}
</div>
</div>

   
        </>

    );
}

