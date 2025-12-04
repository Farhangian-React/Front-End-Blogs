import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CreatePostForm from "./_/CreatePostForm";
import CreatePostFormB from "./_/CreatePostFormB";

function CreatePostPage() {
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "پست ها", href: "/profile/post" },
          {
            label: "ایجاد پست",
            href: `/profile/post/create`,
            active: true,
          },
        ]}
      />
      <h1 className="text-secondary-700 font-bold text-2xl mb-6">
        ایجاد پست جدید
      </h1>
    <CreatePostFormB/>
    </div>
  );
}
export default CreatePostPage;
