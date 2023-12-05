/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";
const repository = "deploy-practice-responsive-web";

const nextConfig = {
  //   basePath: "/deploy-practice-responsive-web",
  assetPrefix: isProduction ? `/${repository}/` : "", // production 일때 prefix 경로
  output: "export",
  trailingSlash: true,
};

module.exports = nextConfig;
