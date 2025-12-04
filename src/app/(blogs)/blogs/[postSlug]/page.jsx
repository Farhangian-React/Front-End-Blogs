import Image from "next/image";
import { notFound } from "next/navigation";
import RelatedPost from "@/components/blog/RelatedPost";
import BlogComments from "@/components/blog/comments/BlogComments";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { toLocalDateString } from "@/utils/toLocalDate";
import ShamsiRelativeTime from "@/components/ui/ShamsiRelativeTime";
import BlogList from "@/components/blog/BlogList";
import { getPosts } from "@/services/postService";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import queryString from "query-string";
import LastBlogList from "@/components/blog/LastBlogList";


export async function generateMetadata({ params }) {

  try {
    const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/slug/${params.postSlug}`,
    { cache: "no-store" }
  );

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
  const {
    data: { post },
  } = await res.json();

if (!post ) {
  return { title: "فرهنگ بلاگ" };
}


const finalTitle = `فرهنگ بلاگ/ ${post.title}`;

return {
  title: finalTitle,
  openGraph: { title: finalTitle },
};
  }catch (err) {
    console.error("❌ Metadata Error:", err);
    return { title: "فرهنگ بلاگ" };
  }
}


async function BlogDetail({ params }) {
  const query = "sort=latest&limit=6";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/slug/${params.postSlug}`,
    { cache: "no-store" }
  );
  const {
    data: { post },
  } = await res.json();
if (!post) notFound();
  return (
    <div  className="grid grid-cols-1 md:grid-cols-12 gap-2 overflow-hidden  " >
    <div className=" order-1 md:order-2 md:col-span-10  bg-white p-4 
     text-secondary-600  mx-auto my-12 rounded-xl">
      <ShamsiRelativeTime shamsiDate={toLocalDateString(post.createdAt)} post={post} />
      <div className="flex flex-row justify-start">
       <HiChevronDoubleLeft className="w-4 h-4 text-primary-400 mt-2 ml-1"/>
       <p className="text-2xl text-justify text-primary-300 font-bold  pb-8">
        {post.title}
      </p></div>
  <div className="relative overflow-hidden rounded-lg mb-10">
  <Image
    src={post.coverImageUrl}
    alt="n"
    width={800}  // هر مقداری می‌خواهی بده
    height={post.coverImageHeight ?? 600}
    className="object-contain mx-auto"
  />
</div>
           <p className="text-xl text-justify text-secondary-800 font-bold pb-5">{post.briefText}</p>
           <p className="text-justify text-secondary-600 text-md leading-loose">{post.text}</p>
           <p className="text-xl text-justify text-secondary-800 font-bold pb-5">{post.tags?.[0]?.title1 || null } </p> 
           <p className="text-justify text-secondary-600 text-md leading-loose">{post.tags?.[0]?.title2 || null}</p>
           <p className="text-xl text-justify text-secondary-800 font-bold py-5"> {post.tags?.[1]?.title1 || null} </p>
           <p className="text-justify text-secondary-600 text-md leading-loose">{post.tags?.[1]?.title2 || null}</p>
           <p className="text-xl text-start text-secondary-800 font-bold py-5"> {post.tags?.[2]?.title1 || null} </p>
           <p className="text-justify text-secondary-600 text-md leading-loose">{post.tags?.[2]?.title2 || null}</p>
           <p className="text-xl text-start text-secondary-800 font-bold py-5"> {post.tags?.[3]?.title1 || null} </p>
           <p className="text-justify text-secondary-600 text-md leading-loose	">{post.tags?.[3]?.title2 || null}</p>
           
           <p className="text-xl text-start text-secondary-800 font-bold py-5"> {post.tags?.[4]?.title1 || null} </p>
           <p className="text-justify text-secondary-600 text-md leading-loose	">{post.tags?.[4]?.title2 || null}</p>
          
           <p className="text-xl text-start text-secondary-800 font-bold py-5"> {post.tags?.[5]?.title1 || null} </p>
           <p className="text-justify text-secondary-600 text-md leading-loose	">{post.tags?.[5]?.title2 || null}</p>
  
           <p className="text-xl text-start text-secondary-800 font-bold py-5"> {post.tags?.[6]?.title1 || null} </p>
           <p className="text-justify text-secondary-600 text-md leading-loose	">{post.tags?.[6]?.title2 || null}</p>
            
           <p className="text-xl text-start text-secondary-800 font-bold py-5"> {post.tags?.[7]?.title1 || null} </p>
           <p className="text-justify text-secondary-600 text-md leading-loose	">{post.tags?.[7]?.title2 || null}</p>
          
           <p className="text-xl text-start text-secondary-800 font-bold py-5"> {post.tags?.[8]?.title1 || null} </p>
           <p className="text-justify text-secondary-600 text-md leading-loose	">{post.tags?.[8]?.title2 || null}</p>
  
           <p className="text-xl text-start text-secondary-800 font-bold py-5"> {post.tags?.[9]?.title1 || null} </p>
           <p className="text-justify text-secondary-600 text-md leading-loose	">{post.tags?.[9]?.title2 || null}</p>
          
           <p className="text-xl text-start text-secondary-800 font-bold py-5"> {post.tags?.[10]?.title1 || null} </p>
           <p className="text-justify text-secondary-600 text-md leading-loose	">{post.tags?.[10]?.title2 || null}</p>
  
      
      { post.related.length > 0 && <RelatedPost posts={post.related} />}
 
      <BlogComments post={post} />

    </div>
    <div className="order-2 md:order-1 hidden md:block md:col-span-2 mt-[48px] sticky top-0   py-4 ">
         <div className="w-[95%] max-w-[1150px] mx-auto h-[30px]  leading-[30px] border-b-2 border-[#ccc] rtl mt-[25px]  mb-8 ">
      <span className=" border-b-2 border-blue-400" >اخرین مطالب مجله </span>
    </div>
   <LastBlogList   query={query} />
    </div>
    </div>
  );
}
export default BlogDetail
