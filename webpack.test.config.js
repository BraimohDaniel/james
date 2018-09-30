module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                require('babel-preset-env'), {
                  modules: false,
                  targets: {
                    node: 'current'
                  }
                }
              ],
              require('babel-preset-react'),
              require('babel-preset-power-assert')
            ],
            plugins: [
              require('babel-plugin-syntax-dynamic-import'),
              require('babel-plugin-transform-object-rest-spread')
            ]
          }
        }
      }
    ]
  },
  target: 'node',
  externals: [
    'child-killer'
  ]
};
