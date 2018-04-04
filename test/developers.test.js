const request = require('request');
const assert = require('assert');

describe("test /rest/app endpoint", () => {

  it("should return a collection of apps", done => {
    request.get("http://localhost:8080/rest/app", (err, req, res) => {
      const json = JSON.parse(res);
      assert(Array.isArray(json));
      done()
    })
  })
  it("each returned object should contain `author_info` property", done => {
    request.get("http://localhost:8080/rest/app", (err, req, res) => {
      const json = JSON.parse(res);
      const app = json.pop();
      assert(typeof app.author_info === "object");
      done()
    })
  })
  it("should return a single app if providing and id", done => {
    request.get("http://localhost:8080/rest/app?id=21824", (err, req, res) => {
      const json = JSON.parse(res);
      assert(json.id === 21824);
      done()
    })
  })
})
