const { createClass } = require("kaop");
const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');
const { path } = require("./low.conf");

module.exports = LowAdapter = createClass({
  instance: undefined,
  constructor() {
    low(new FileAsync(path)).then(db => this.instance = db);
  },
  getCollection(uid) {
    return this.instance.get(uid).value();
  },
  // likely this needs to be solved by storing whole tree with its
  // dependencies rather than having separate models on database
  getMappedCollection(uid, joinuid, joinkey, newkey) {
    const joincollection = this.instance.get(joinuid);

    return this.instance
    .get(uid)
    .map(app => this.mergePredicate(
      app,
      joincollection.find({ "id": app[joinkey]}),
      newkey)
    )
    .value();
  },
  findBySnapshot(uid, snapshot) {
    return this.instance
    .get(uid)
    .find(snapshot)
    .value();
  },
  mergePredicate(app, subject, newkey) {
    // modern ES versions (upgrade node but lazy)
    // { ...app, { [newkey]: ...subject } }
    const aditional = {};
    aditional[newkey] = subject;
    return Object.assign(app, aditional);
  }
});
