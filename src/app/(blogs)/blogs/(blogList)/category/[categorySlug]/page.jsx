import BlogList from "@/components/blog/BlogList";
import ListCategory from "@/components/blog/ListCategory";
import queryString from "query-string";
import Footer from "@/components/Footer";

/* -------------------------- 1️⃣ METADATA -------------------------- */
export async function generateMetadata({ params ,searchParams}) {
  const resolvedParams = await params; // ⬅️ اصلاح کلیدی
  const resolvedSearchParams = await searchParams; // ⬅️ اصلاح کلیدی

  const { categorySlug } = resolvedParams;
  const queries = queryString.stringify(resolvedSearchParams);

  let posts = [];

  try {
    const postListResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/post/list?categorySlug=${categorySlug}&${queries}`,
      { cache: "no-store" }
    );

    if (!postListResponse.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

   const data = await postListResponse.json();
posts = data?.data?.posts || [];

if (!posts || posts.length === 0) {
  return { title: "فرهنگ بلاگ" };
}

const categoryTitle = posts[0]?.category?.title || "دسته‌بندی";
const finalTitle = `فرهنگ بلاگ/ ${categoryTitle}`;

return {
  title: finalTitle,
  openGraph: { title: finalTitle },
};
  }catch (err) {
    console.error("❌ Metadata Error:", err);
    return { title: "فرهنگ بلاگ" };
  }
}

/* -------------------------- 2️⃣ PAGE COMPONENT -------------------------- */
export default async function Category({ params, searchParams }) {
  const resolvedParams = await params; // ⬅️ اصلاح کلیدی
  const resolvedSearchParams = await searchParams; // ⬅️ اصلاح کلیدی

  const { categorySlug } = resolvedParams;
  const queries = queryString.stringify(resolvedSearchParams);

  let posts = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/post/list?categorySlug=${categorySlug}&${queries}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json();
    posts = data?.data?.posts || [];
  } catch (err) {
    console.error("❌ Fetch Error:", err);
    return (
      <>
        <ListCategory />
        <div className="w-[95%] max-w-[1150px] mx-auto mt-[25px] mb-8">
          <p className="text-lg text-red-600">خطا در بارگیری محتوا.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <ListCategory />

      <div className="w-[95%] max-w-[1150px] mx-auto h-[30px] leading-[30px] border-b-2 border-[#ccc] rtl mt-[25px] mb-8 ">
        {posts.length > 0 && (
          <span key={posts[0]._id} className="border-b-2 border-blue-400">
            {posts[0].category.title}
          </span>
        )}
      </div>

      <div>
        {posts.length === 0 ? (
          <p className="text-lg text-secondary-600 text-center mt-10">
            پستی در این دسته‌بندی یافت نشد
          </p>
        ) : (
          <BlogList posts={posts} />
        )}
      </div>

      <Footer />
    </>
  );
}
