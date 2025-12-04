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
  
       {
        protocol: 'https',
        hostname: 'trustseal.enamad.ir', // برای Enamad
        port: '', 
        pathname: '/logo.aspx**',
      },
      {
        protocol: 'https',
        hostname: 'logo.samandehi.ir', // برای Samandehi (اضافه شده)
        port: '', 
        pathname: '/logo.aspx**', // مسیر مورد استفاده در لینک شما
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
