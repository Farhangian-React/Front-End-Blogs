import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/services/postService";
// import CoverImage from "./CoverImage"; // اگر استفاده نمی‌شود، حذف شود

export default async function LastBlogList({query}) { 
  const  {posts}  = await getPosts(query);

  if (!posts.length) return <Empty resourceName="پستی" />;
return (
   <div className="columns-1  w-full  mx-auto"> 
    {posts.map((post) => {
    return ( // حتماً از return استفاده کنید
        <div key={post._id}> {/* یا <> و </> */}
     
               <div
        key={post._id}
        // این دیو باید طوری استایل بگیرد که در ستون‌ها نشکند (break-inside: avoid)
        className="mb-8 break-inside-avoid border border-secondary-100 
                 rounded-2xl shadow-xl bg-white" 
    >
        {/* blog iamge */}
        {/* **نکته:** برای ارتفاع طبیعی، از object-cover اجتناب کنید یا از آن به صورت هوشمندانه استفاده کنید */}
 <Link href={`/blogs/${post.slug}`} className="block w-full"> 
    <Image
        src={post.coverImageUrl}
        alt={post.title || "blog cover"}
        // **نیاز به تعریف width و height برای کارکرد بهینه Next.js Image**
        width={1000} // مثال: یک عرض بزرگتر از حد انتظار
        height={1000} // مثال: یک ارتفاع بزرگتر از حد انتظار
        
        // این کلاس‌ها کار می‌کنند اگر Next.js Image بتواند آن‌ها را به img نهایی پاس دهد
        className="object-contain transition-all ease-out duration-300 rounded-2xl w-full h-auto" 
    />
</Link>

        
        {/* blog content */}
        <div className="p-4 rounded-b-lg flex flex-col flex-1 min-h-full"> 
            <Link href={`/blogs/${post.slug}`}>
                <p className="text-sm mb-4 font-bold text-secondary-700 line-clamp-2">
                    {post.title}
                </p>
            </Link>

        
        </div>
    </div>
        </div>
    );
})}
      
    </div>
);
}
