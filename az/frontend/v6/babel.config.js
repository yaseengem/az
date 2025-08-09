module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      '@babel/preset-flow'
    ],
    plugins: [
      ["@babel/plugin-transform-private-methods", { "loose": true }],
      ["@babel/plugin-transform-private-property-in-object", { "loose": true }],
      ["@babel/plugin-transform-class-properties", { "loose": true }]
    ],
    env: {
      test: {
        presets: [
          ['@babel/preset-env', { 
            targets: { node: 'current' },
            modules: 'commonjs'
          }],
          '@babel/preset-typescript',
          '@babel/preset-flow'
        ],
        plugins: [
          '@babel/plugin-transform-modules-commonjs'
        ]
      }
    }
  };
};
