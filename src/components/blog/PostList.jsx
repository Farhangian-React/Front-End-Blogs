"server"
import CoverImage from "@/components/blog/CoverImage";
import Link from "next/link";
import { FaClock } from "react-icons/fa6";
import Author from "@/components/blog/Author";
import PostInteraction from "@/components/blog/PostInteraction";


async function PostList({posts}){

 return posts.length > 0 ? (
        <div className="grid grid-cols-12 gap-8  w-full h-full">
            {posts.map((post)=>(
            <div key={post._id} className=" col-span-12 sm:col-span-6 lg:col-span-4 border 
             border-secondary-300 p-2 rounded-lg ">
                <CoverImage {...post}/>
                <div>
                    <Link href={`/blogs/${post.slug}`}>
                    <h2 className="mb-4 text-secondary-700 font-bold">
                        {post.title}
                    </h2>
                    </Link>
                    <div className="flex flex-row justify-between items-center mb-2">
                        <Author {...post.author}/>
                        <div className="flex flex-row items-center text-[10px] text-slate-500 ">
                            <FaClock className="w-4 h-4 text-gray-400 ml-1"/>
                            <span className="ml-1">خواندن :</span>
                            <span className="ml-1 leading-3">{post.readingTime}</span>
                            <span>دقیقه</span>
                        </div>

                    </div>     
                  <PostInteraction post={post}/>
                </div>
            </div>
        ))}
        </div>
     ):null;
    }
export default PostList