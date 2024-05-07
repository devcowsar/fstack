/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone'
};

module.exports = {
  cacheHandler: require.resolve('./cache-handler.js'),
  cacheMaxMemorySize: 0, // disable default in-memory caching
}
export default nextConfig;
