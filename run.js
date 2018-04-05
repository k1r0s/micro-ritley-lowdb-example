const { setConfig, AbstractResource, extend } = require("ritley");
const BasicResource = require("./resources/basic-resource");
setConfig(require("./ritley.conf"));

[
  require("./models/app"),
  require("./models/developer"),
].forEach(Model => {
  new BasicResource(new Model);
});
