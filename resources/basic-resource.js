const { extend, override } = require("kaop");

module.exports = BasicResource = extend(AbstractResource, {
  constructor: [override.implement, function(parent, _uri, _model) {
    parent(_uri);
    this.model = _model;
  }],

  get(request, response) {
    let prom = null;

    if(request.query.id) {
      prom = this.model.find(request.query);
    } else {
      prom = this.model.read();
    }
    prom.then(result =>
      this.writeResponse(response, this.model.toString(result)));
  },

  writeResponse(response, body) {
    body && response.write(body);
    response.statusCode = 200;
    response.end();
  }
})
