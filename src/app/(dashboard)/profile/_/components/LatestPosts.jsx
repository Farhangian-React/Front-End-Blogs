import PostsTable from "../../post/_/components/PostsTable";

async function LatestPosts() {
  const query = "sort=latest&limit=4";
  return <PostsTable query={query} />;
}
export default LatestPosts;
