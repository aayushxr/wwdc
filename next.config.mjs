/** @type {import('next').NextConfig} */

import { withVercelToolbar } from "@vercel/toolbar/plugins/next";
const nextConfig = {
  images: {
    domains: ["cdn.aayus.me"],
  },
};

export default withVercelToolbar(nextConfig);
