module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "【SDGs4】 最幸福的實課-看見需要·千手扶學";
      return args;
    });
  },
};
