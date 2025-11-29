
import { Suspense } from "react";
import CategoryList from "@/components/blog/CategoryList";
import Search from "@/components/ui/Search";
export const metadata = {
  title: "بلاگ ها",
};
export default function Layout({ children }) {
  return (
  
     <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          {children}
        </div>
   
  );
}
