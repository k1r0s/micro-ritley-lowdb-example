const { setConfig } = require("ritley");
setConfig(require("./ritley.conf"));

const BasicResource = require("./resources/basic-resource");

[
  require("./models/app"),
  require("./models/developer"),
].forEach(Model => {
  new BasicResource(new Model);
});
