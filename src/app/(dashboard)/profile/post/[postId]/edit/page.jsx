import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getPostById } from "@/services/postService";
import { notFound } from "next/navigation";
import CreatePostForm from "../../create/_/CreatePostForm";

// export const dynamic = "force-dynamic"

async function EditPostPage({ params: { postId } }) {
  const {
    data: { post },
  } = await getPostById(postId);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "پست ها", href: "/profile/post" },
          {
            label: "ویرایش پست",
            href: `/profile/post/${postId}/edit`,
            active: true,
          },
        ]}
      />
      <CreatePostForm postToEdit={post} />
    </div>
  );
}
export default EditPostPage;
