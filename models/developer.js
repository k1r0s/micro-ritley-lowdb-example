const { extend } = require("kaop");
const CommonModel = require("./common");

module.exports = DeveloperModel = extend(CommonModel, {
  path: "developer",
  read() {
    return new Promise(resolve =>
      resolve(this.adapter.getCollection("developers")));
  }
})
