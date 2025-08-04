"use client";

import ButtonIcon from "@/components/ui/ButtonIcon";
import ConfirmDelete from "@/components/ui/ConfirmDelete";
import Modal from "@/components/ui/Modal";
import { GiPencil } from "react-icons/gi";
import { CiSquarePlus } from "react-icons/ci";
import { IoTrashOutline } from "react-icons/io5";
import Link from "next/link";
import { useEffect, useState } from "react";
import deletePost from "../actions/deletePost";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

export function CreatePost() {
  return (
    <Link
      href="/profile/posts/create"
      className="justify-self-end flex gap-x-4 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium text-secondary-0 
      transition-colors hover:bg-primary-700"
    >
      <span className="hidden md:block">ایجاد پست</span>{" "}
      <CiSquarePlus className="w-5" />
    </Link>
  );
}

export function UpdatePost({ id }) {
  return (
    <Link href={`/profile/posts/${id}/edit`}>
      <ButtonIcon variant="outline">
        <GiPencil />
      </ButtonIcon>
    </Link>
  );
}

export function DeletePost({ id: postId, postTitle }) {
  // const deletePostWithId = ;
{/*  const [state, formAction] = useFormState(deletePost, {
    error: "",
    message: "",
  });
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      setIsDeleteOpen(false);
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);*/}

  return (
    <>
      <ButtonIcon variant="outline" >
        <IoTrashOutline className="text-error" />
      </ButtonIcon>
     {/*} <Modal
        title={`حذف ${postTitle}`}
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
      >
        <ConfirmDelete
          resourceName={postTitle}
          onClose={() => setIsDeleteOpen(false)}
          // onConfirm={deletePost.bind(null, postId)}
          onConfirm={async (formData) => {
            await formAction({ formData, postId });
          }}
        />
      </Modal>
      */}
    </>
  );
}
