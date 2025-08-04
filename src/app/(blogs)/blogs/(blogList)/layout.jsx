
import { Suspense } from "react";
import CategoryList from "@/components/blog/CategoryList";
import Search from "@/components/ui/Search";
export const metadata = {
  title: "بلاگ ها",
};
export default function Layout({ children }) {
  return (
   <div className=" px-5">
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="text-lg font-bold">لیست بلاگ ها</h1>
     
          <Search />
   
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 lg:pl-8 text-secondary-500 space-y-4">
    <Suspense ><CategoryList/></Suspense>
      </div>
     <main className="col-span-12 lg:col-span-8 xl:col-span-9">
          {children}
        </main>
    </div>
   </div>
  );
}
