// eslint-disable-next-line no-undef
module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        importSource: '@theme-ui/core',
        throwIfNamespace: false,
      },
    ],
  ],
  plugins: ['macros'],
};
