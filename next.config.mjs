/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xrkjikypmvonnjzzswbu.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/artist-images/**',
      },
    ],
  },
};

export default nextConfig;
