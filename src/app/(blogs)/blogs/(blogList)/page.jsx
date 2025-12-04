import BlogList from "@/components/blog/BlogList";
import Pagination from "@/components/ui/Pagination";
import Search from "@/components/ui/Search";
import { getPosts } from "@/services/postService";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import queryString from "query-string";
export const metadata = {
  title: "فرهنگ بلاگ - بلاگ ها  ",
  description: "Auth",
};

// export const dynamic = "force-dynamic";

async function Page({ searchParams }) {
  const queries = queryString.stringify(searchParams);
  // set headers:
  const cookieStore = cookies();
  const options = setCookiesOnReq(cookieStore);

  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/post/list?${queries}`,
  //   { cache: "no-store", ...options }
  // );
  // const {
  //   data: { posts },
  // } = await res.json();

  const { posts, totalPages } = await getPosts(queries, options);

  const { q: searchValue } = searchParams;

  const resultsText = posts.length > 1 ? "نتایج" : "نتیجه";

  return (
    <>
    <div className="w-[85%] md:w-[60%] mx-auto my-12 "><Search/></div>
      {searchValue ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? "هیچ پستی با این مشخصات یافت نشد"
            : `نشان دادن ${posts.length} ${resultsText} برای `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
         <div className="w-[95%] max-w-[1150px] mx-auto h-[30px]  leading-[30px] border-b-2 border-[#ccc] rtl mt-[25px]  mb-8 ">
      <span className=" border-b-2 border-blue-400" >اخرین مطالب مجله </span>
    </div>
      {posts.length > 0 ? <BlogList posts={posts} /> : null}
      <div className="mt-5 mb-12 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
export default Page;
