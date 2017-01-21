const path = require("path");
const { AureliaPlugin, ModuleDependenciesPlugin } = require("../Webpack");

module.exports = {
  entry: "main",

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist",
    filename: "bundle.js",    
  },

  resolve: {
    extensions: [".ts", ".js"],
    modules: ["src", "node_modules"].map(x => path.resolve(x)),
    symlinks: false,
  },

  module: {
    rules: [
      { test: /\.less$/i, use: ["style-loader", "css-loader", "less-loader"] },
      { test: /\.ts$/i, use: "ts-loader" },
      { test: /\.html$/i, use: "html-loader" },
    ]
  },  

  plugins: [
    new AureliaPlugin({ includeAll: "src" }),
    new ModuleDependenciesPlugin({
      "aurelia-framework": [
        "aurelia-history-browser",
        "aurelia-logging-console", 
        "aurelia-templating-binding",
        "aurelia-templating-resources",
        "aurelia-templating-router",
        "aurelia-event-aggregator",
      ],
    }),
  ],
};