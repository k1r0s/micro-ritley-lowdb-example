const { inject, createClass } = require("kaop")
const LowProvider = require("../adapters/low-provider");

module.exports = CommonModel = createClass({
  adapter: null,
  constructor: [inject.args(LowProvider), function(_db) {
    this.adapter = _db;
  }],
  parseSpecialAttrs(snapshot) {
    return "id" in snapshot ? { id: parseInt(snapshot.id) } : snapshot;
  },
  read() {
    return new Promise(resolve => resolve("read not implemented"));
  },
  find() {
    return new Promise(resolve => resolve("find not implemented"));
  },
  toString(obj) {
    return JSON.stringify(obj);
  }
})
