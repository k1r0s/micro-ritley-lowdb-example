const { setConfig, AbstractResource, extend } = require("ritley");
const BasicResource = require("./resources/basic-resource");
setConfig(require("./ritley.conf"));

const models = {};
const uris = ["app", "developer"];

uris.forEach(resourceUri => {
  const resourceModel = require(`./models/${resourceUri}`);
  models[resourceUri] = new resourceModel;
  new BasicResource(resourceUri, models);
});
