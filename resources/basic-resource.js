const { extend, override } = require("kaop");

module.exports = BasicResource = extend(AbstractResource, {
  constructor: [override.implement, function(parent, _uri, _models) {
    parent(_uri);
    this.models = _models;
  }],

  get(request, response) {
    let prom = null;
    const requestedModel = this.models[this.$uri];

    if(request.query.id) {
      prom = requestedModel.find(request.query);
    } else {
      prom = requestedModel.read();
    }
    const body = requestedModel.toString(result);
    prom.then(result => this.writeResponse(response, body));
  },

  writeResponse(response, body) {
    body && response.write(body);
    response.statusCode = 200;
    response.end();
  }
})
