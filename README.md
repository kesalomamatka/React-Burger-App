##CSS module
webpack.config.js
{
  test: cssRegex,
  exclude: cssModuleRegex,
  ...
}
=>
{
  test: cssRegex,
  exclude: cssModuleRegex,
  use: getStyleLoaders({
      importLoaders: 1,
      modules: true,
      localIdentName: '[name]__[local]__[hash:base64:5]'
  }),
}
