module.exports = {
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.BUILD_TARGET === "lib") {
      config.resolve.alias[/^(\.\/).+(-prop.vue)/] = "empty-widget";
      config.externals = [].concat(config.externals || [], [
        function(context, request, callback) {
          if (/^(\.\/).+(-prop.vue)/.test(request)) {
            return callback(null, "empty-widget");
          }
          callback();
        }
      ]);
    }
  }
};
