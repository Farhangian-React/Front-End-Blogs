"server"
import Image from "next/image";
import Link from "next/link";
  import BlogList from "@/components/blog/BlogList";
  import Pagination from "@/components/ui/Pagination";
  import { getPosts } from "@/services/postService";
  import setCookiesOnReq from "@/utils/setCookieOnReq";
  import { cookies } from "next/headers";
  import queryString from "query-string";
import ListCategory from "./ListCategory";

export default async function BoxCategory({searchParams}) { 
      const queries = queryString.stringify(searchParams);
      // set headers:
      const cookieStore = cookies();
      const options = setCookiesOnReq(cookieStore);
     const { posts, totalPages } = await getPosts(queries, options);
  
    const { q: searchValue } = searchParams;
  
    const resultsText = posts.length > 1 ? "نتایج" : "نتیجه";


    return(
      <>
 <ListCategory/>

            <div className="w-[95%] max-w-[1150px] mx-auto h-[30px]  leading-[30px] border-b-2 border-[#ccc] rtl mt-[25px]  mb-8 ">
      <span className=" border-b-2 border-blue-400" >اخرین مطالب مجله </span>
    </div>
          {searchValue ? (
            <p className="mb-4 text-secondary-700">
              {posts.length === 0
                ? "هیچ پستی با این مشخصات یافت نشد"
                : `نشان دادن ${posts.length} ${resultsText} برای `}
              <span className="font-bold">&quot;{searchValue}&quot;</span>
            </p>
          ) : null}
    
          {posts.length > 0 ? <BlogList posts={posts} /> : null}
          <div className="mt-5 mb-12 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
          </div>
    
        
        </>

    );
}

