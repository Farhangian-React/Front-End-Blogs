import Image from "next/image";
import Link from "next/link";
import BlogInteraction from "./BlogInteraction";
import { FaClock } from "react-icons/fa6";
import Author from "./Author";
// import CoverImage from "./CoverImage"; // اگر استفاده نمی‌شود، حذف شود

export default async function BlogList({ posts }) { 
 
 // کامپوننت کمکی برای رندر یک کارت مجزا (بدون تغییر در منطق کارت)
const PostCard = ({ post }) => (
    <div
        key={post._id}
        // این دیو باید طوری استایل بگیرد که در ستون‌ها نشکند (break-inside: avoid)
        className="mb-8 break-inside-avoid border border-secondary-100 
                   rounded-lg shadow-xl bg-white" 
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
                <h2 className="mb-4 font-bold text-secondary-700 line-clamp-2">
                    {post.title}
                </h2>
            </Link>

            {/* blog category and author */}
            <div className="flex items-center justify-between mt-auto">
                <Author {...post.author} />
                <div className="flex items-center text-xs text-secondary-500">
                    <FaClock className="w-4 h-4 stroke-secondary-500 ml-1" />
                    <span className="ml-1"> خواندن:</span>
                    <span className="ml-1 leading-3">{post.readingTime}</span>
                    <span>دقیقه</span>
                </div>
            </div>
            {/* blog interactioin */}
            <BlogInteraction post={post} />
        </div>
    </div>
);


// 3. ساختار نهایی با استفاده از column-count برای Masonry
return (
    // کلاس‌های Masonry: column-count-3 برای 3 ستون
    // و gap-x-6 برای فاصله بین ستون‌ها.
    // **نکته مهم:** این کلاس‌ها باید در tailwind.config.js تعریف شده باشند یا از استایل‌های اینلاین استفاده شود.
   
   <div className="columns-1 md:columns-2 lg:columns-3 w-[93%]  mx-auto"> 
        
            
      {/* رندر کردن مستقیم همه پست‌ها */}
    {posts.map((post) => {
    return ( // حتماً از return استفاده کنید
        <div key={post._id}> {/* یا <> و </> */}
     
            <PostCard key={post._id} post={post} />
        </div>
    );
})}
      
    </div>
);
}
