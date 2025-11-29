import BlogList from "@/components/blog/BlogList";
import ListCategory from "@/components/blog/ListCategory";
import queryString from "query-string";
  import Pagination from "@/components/ui/Pagination";
async function Category({ params, searchParams }) {
  const { categorySlug } = params;
  const queries = queryString.stringify(searchParams);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/list?categorySlug=${categorySlug}&${queries}`
  );
  const {
    data: { posts },
  } = await res.json();

  return (
    <>
   <ListCategory/>
          
          
<div className="w-[95%] max-w-[1150px] mx-auto h-[30px]  leading-[30px] border-b-2 border-[#ccc] rtl mt-[25px]  mb-8 ">
    {/* بررسی می‌کنیم که آرایه posts وجود دارد و حداقل یک عضو دارد */}
    {posts.length > 0 && (
        <span key={posts[0]._id} className=" border-b-2 border-blue-400" >
            {posts[0].category.title}
        </span>
    )}
</div>
  
    <div>
       <p>

       </p>
      {posts.length === 0 ? (
        <p className="text-lg text-secondary-600">{`پستی در این دسته بندی یافت نشد`}</p>
      ) : (
        <BlogList posts={posts} />
      )}
    </div>
    </>
  );
}
export default Category;
