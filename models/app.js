const { extend } = require("kaop");
const CommonModel = require("./common");

module.exports = AppModel = extend(CommonModel, {
  path: "app",
  read() {
    return new Promise(resolve =>
      resolve(this.adapter.getMappedCollection(
        "apps", "developers", "developer_id", "author_info")
      ));
  },
  find(query) {
    return new Promise(resolve => {
      const app = this.adapter.findBySnapshot("apps", this.parseSpecialAttrs(query));
      !app && resolve();
      const developer = this.adapter.findBySnapshot("developers", { id: app.developer_id });
      resolve(this.adapter.mergePredicate(app, developer, "author_info"));
    });
  }

  // , toString(obj) {
  //   return any_xml_library.stringify(obj).
  // }
})
