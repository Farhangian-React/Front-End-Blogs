/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  logging:{
fetches:{
  fullUrl:true,
}
  },
};

export default nextConfig;
