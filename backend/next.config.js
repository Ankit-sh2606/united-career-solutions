/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable server-side external packages for Mongoose and bcrypt
  serverExternalPackages: ["mongoose"],
};

module.exports = nextConfig;
