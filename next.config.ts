import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental:{
    clientInstrumentationHook:false,
  }
};

export default nextConfig;
