module.exports = {
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      stream: false,
      zlib: false,
    };
    return config;
  },
};
