const glob = require("glob");
const pages = {};

glob.sync("./src/pages/**/main.js").forEach(path => {
  const chunk = path.split("./src/pages/")[1].split("/main.js")[0];
  pages[chunk] = {
    entry: path,
    template: `public/${chunk}.html`,
    chunks: ["chunk-vendors", "chunk-common", chunk]
  };
});
module.exports = {
  //部署应用包时的基本 URL(解决build之后文件访问路径错误的问题)
  publicPath: process.env.NODE_ENV === "production" ? "/h5/dist/" : "/",
  pages,
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
        pathRewrite: { "^/api": "" }
      }
    }
  }
};
