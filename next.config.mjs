/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          port: '',
          pathname: '/images/w8ybtzz3/production/**', // Adjust the project ID and dataset accordingly
        },
      ],
    },
  };
  
  export default nextConfig;
  