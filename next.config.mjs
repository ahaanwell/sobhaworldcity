// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
// };

// export default nextConfig;


const nextConfig = {
  output: "export",
  trailingSlash: false,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;