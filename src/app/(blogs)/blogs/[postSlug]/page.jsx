import Image from "next/image";
import { notFound } from "next/navigation";
import RelatedPost from "@/components/blog/RelatedPost";
import BlogComments from "@/components/blog/comments/BlogComments";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { toLocalDateString } from "@/utils/toLocalDate";
import ShamsiRelativeTime from "@/components/ui/ShamsiRelativeTime";
async function BlogDetail({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/slug/${params.postSlug}`,
    { cache: "no-store" }
  );
  const {
    data: { post },
  } = await res.json();
if (!post) notFound();
  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto bg-white p-5 mt-12 rounded-xl">
      <ShamsiRelativeTime shamsiDate={toLocalDateString(post.createdAt)} post={post} />
      <div className="flex flex-row justify-start">
       <HiChevronDoubleLeft className="w-4 h-4 text-primary-400 mt-2 ml-1"/>
       <p className="text-2xl text-justify text-primary-300 font-bold  pb-8">
        {post.title}
      </p></div>
      <div className="relative aspect-video aspect-h-9 overflow-hidden rounded-lg mb-10">
        <Image
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
          fill
          src={post.coverImageUrl}
          alt="n"
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
  );
}
export default BlogDetail
