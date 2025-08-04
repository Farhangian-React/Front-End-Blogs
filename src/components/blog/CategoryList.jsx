"server"
import Link from "next/link";
async function CategoryList(){
    await new Promise((res)=> setTimeout(res,2000));
  const res= await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/list`);
  const {
    data : {categories},
} = await res.json();
    return(
        <div className="items-start">
      <ul className="space-y-4">
      <Link href={`/blogs/`}>همه</Link>
      {categories.map((category) => {
        return (
          <li key={category._id}>
            <Link href={`/blogs/category/${category.slug}`}>
              {category.title}
            </Link>
          </li>
        );
      })}
    </ul>
        </div>
    )
}
export default CategoryList