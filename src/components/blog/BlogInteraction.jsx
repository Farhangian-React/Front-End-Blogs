"use client";

import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdBookmarkAdded } from "react-icons/md";
import { GoBookmarkFill } from "react-icons/go";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { toPersianDigits } from "@/utils/numberFormatter";
import toast from "react-hot-toast";
import ButtonIcon from "@/components/ui/ButtonIcon";
import { usePathname, useRouter } from "next/navigation";
import { likePostApi,bookmarkPostApi } from "@/services/postService";

const BlogInteraction = ({ post }) => {
  const router = useRouter();
  const pathname = usePathname();

  const likeHandler = async (postId) => {
    try {
      const { message } = await likePostApi(postId);
      router.refresh();
      toast.success(message);
    } catch (err) {
      console.log(err);

      toast.error(err?.response?.data?.message);
    }
  };

  const bookmarkHandler = async (postId) => {
    try {
      const { message } = await bookmarkPostApi(postId);
      router.refresh();
      toast.success(message);
    } catch (error) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon className="w-8 h-5" variant="secondary">
        <HiOutlineChatBubbleOvalLeftEllipsis />
        <span>{toPersianDigits(post.commentsCount)}</span>
      </ButtonIcon>
      <ButtonIcon className="text-red-700 bg-red-100 w-8 h-5 " onClick={() => likeHandler(post._id)} >
        {post.isLiked ? <FaHeart  /> :<CiHeart /> }
        <span>{toPersianDigits(post.likesCount)}</span>
      </ButtonIcon>
      <ButtonIcon onClick={() => bookmarkHandler(post._id)} className="text-blue-700  w-6 h-5 pr-0 ">
        {post.isBookmarked ?<MdBookmarkAdded />: <GoBookmarkFill/>  }
      </ButtonIcon>
    </div>
  );
};

export default BlogInteraction;
