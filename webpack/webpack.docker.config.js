const { resolve } = require("path");
const plugins = require("./plugins");

const outputDir = resolve(__dirname, "../build");
const outputFilename = "ganache-core.docker.cli.js";
module.exports = {
  entry: [
    "./cli.js"
  ],
  target: "node",
  output: {
    path: outputDir,
    filename: outputFilename,
    library: "Ganache-Cli",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "shebang-loader"
      },
      {
        test: /(scrypt|\.node)$/,
        use: "node-loader"
      }
    ]
  },
  resolve: {
    alias: {
      "./build/Release/scrypt": "./build/Release/scrypt.node"
    }
  },
  plugins: plugins(outputDir, outputFilename),
  mode: "production"
};