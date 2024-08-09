/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ['images.unsplash.com', 'pbs.twimg.com','img.icons8.com' ],
  },
};

export default nextConfig;
