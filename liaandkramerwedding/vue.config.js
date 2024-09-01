module.exports = {
    outputDir: 'docs',
    // publicPath: '/'
    publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/'
  }