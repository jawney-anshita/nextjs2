module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    output: 'export',

    images: {
      unoptimized: true
  },
  }
  return nextConfig
}