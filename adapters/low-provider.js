const { provider } = require("kaop");
const adapter = require('./low');

module.exports = LowProvider = provider.singleton(adapter)
