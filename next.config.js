/** @type {import('next').NextConfig} */
const path = require("path");
require("dotenv").config

const nextConfig = {
  distDir: "build",
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles/scss")],
  },
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//         // set 'fs' to an empty module on the client to prevent this error on build --> Error: Can't resolve 'fs'
//         config.node = {
//             fs: 'empty'
//         }
//     }

//     return config;
// }
env:{
  HOST_API: process.env.HOST_API
}
};


module.exports = nextConfig;
