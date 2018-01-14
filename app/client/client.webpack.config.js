var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: __dirname + "/index.tsx",
  output: {
      filename: "client.js",
      path: __dirname + '/../public/'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
      rules: [
          // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
          { 
            test: /\.tsx?$/, 
            loader: "awesome-typescript-loader",
            query: {
              // Notice how this path depends on where webpack is called from
              // Pretty sure this is a bug...
              configFileName: "./app/client/tsconfig.json"
            }
          },

          // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
          { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
          }
      ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //     "react": "React",
  //     "react-dom": "ReactDOM"
  // },
  plugins: [
    new webpack.BannerPlugin("--"),
    // new HtmlWebpackPlugin({
    //   template: __dirname + 'src/client/index.html'
    // }),
    //new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("style.css")
  ],

  devServer: {
    //hot: true
    contentBase: './'
  }
};
