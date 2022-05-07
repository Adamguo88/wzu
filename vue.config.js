module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "【SDGs4】 最幸福的實課-看見需要·千手扶學";
      return args;
    });
  },
  pwa: {
    iconPaths: {
      favicon32: "favicon.ico",
      favicon316: "favicon.ico",
      appleTouchIcon: "favicon.ico",
      maskIcon: "favicon.ico",
      msTileImage: "favicon.ico",
    },
  },
};
