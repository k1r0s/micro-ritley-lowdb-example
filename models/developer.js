const { extend } = require("kaop");
const CommonModel = require("./common");

module.exports = DeveloperModel = extend(CommonModel, {
  read() {
    return new Promise(resolve =>
      resolve(this.adapter.getCollection("developers")));
  }
})
