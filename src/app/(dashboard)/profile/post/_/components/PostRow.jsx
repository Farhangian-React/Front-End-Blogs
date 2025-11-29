import ButtonIcon from "@/components/ui/ButtonIcon";
import Table from "@/components/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import truncateText from "@/utils/trancateText";

import { DeletePost, UpdatePost } from "./Buttons";

const statusStyle = {
  free: {
    label: "رایگان",
    className: "badge--success",
  },
  premium: {
    label: "پولی",
    className: "badge--secondary",
  },
};

function PostRow({ post, index }) {
    // --- **کنترل امنیتی اضافه شده برای جلوگیری از خطا** ---
    if (!post) {
        // اگر پست null باشد، یک ردیف خالی یا null برگردانده می‌شود.
        return null; 
    }
    // ---------------------------------------------------------

    // اگر post وجود دارد، ادامه می‌دهیم. برای اطمینان بیشتر، باید بررسی کنیم که category و author هم وجود داشته باشند.
    const title = post.title || "عنوان نامشخص"; // مقدار پیش‌فرض
    const categoryTitle = post.category?.title || "بدون دسته‌بندی"; // استفاده از Optional Chaining
    const authorName = post.author?.name || "ناشناس"; // استفاده از Optional Chaining
    const createdAt = post.createdAt;
    const type = post.type;
    
    // اطمینان از وجود post._id برای دکمه‌ها
    if (!post._id) {
        return null;
    }

    return (
      <Table.Row>
        <td>{index + 1}</td>
        <td>{truncateText(title, 30)}</td>
        <td> {categoryTitle}</td> {/* استفاده از متغیر جدید */}
        <td>{authorName}</td> {/* استفاده از متغیر جدید */}
        <td>{toLocalDateShort(createdAt)}</td>
        <td><span className={`badge ${statusStyle[type]?.className || 'badge--default'}`}>{statusStyle[type]?.label || 'نامشخص'}</span></td>
        <td><div className="flex items-center gap-x-3"><UpdatePost id={post._id} /><DeletePost id={post._id} postTitle={title} /></div></td>
      </Table.Row>
    );
}
export default PostRow;
