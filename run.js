const { setConfig, AbstractResource, extend } = require("ritley");
const BasicResource = require("./resources/basic-resource");
setConfig(require("./ritley.conf"));

const uris = ["app", "developer"];

uris.forEach(resourceUri => {
  const resourceModel = require(`./models/${resourceUri}`);
  new BasicResource(resourceUri, new resourceModel);
});
