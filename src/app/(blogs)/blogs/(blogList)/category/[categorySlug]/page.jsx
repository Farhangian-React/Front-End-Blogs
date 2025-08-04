import PostList from "@/components/blog/PostList";
import queryString from 'query-string';
async function Category({params,searchParams}){
  const queries = queryString.stringify(searchParams);
const {categorySlug}=params;
const res=await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/post/list?categorySlug=${categorySlug}&${queries}`);
  const {data} =await res.json();
  const {posts} = data || {};
  console.log(categorySlug);
  
  return(
    <div>
        {posts.length === 0 ? (
            <p className="text-lg text-slate-600 text-center">پستی در این دسته بندی پیدا نشد</p>
        ):( <PostList posts={posts}/>)}
    </div>
  );
}
export default Category;
  
