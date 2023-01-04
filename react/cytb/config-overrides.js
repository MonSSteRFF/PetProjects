module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
  };
  return config;
};
