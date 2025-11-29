/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eramblog.com',
        port: '',
        pathname: '/img/*',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        // از دو ستاره در انتها استفاده می‌کنیم که پوشش گسترده‌تری بدهد
        pathname: '/uploads/**', 
      },
    ],
  },
  logging:{
fetches:{
  fullUrl:true,
}
  },
};

export default nextConfig;
