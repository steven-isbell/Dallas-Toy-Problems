function userIsAuthorized(req, res) {
  if (!req.user) return res.redirect("/login");
  if (req.user.isAuthorized) return res.status(200).json(req.user);
  else return res.status(500).json("Not Authorized");
}

const res = {
  test: {},
  status: function(n) {
    this.test.status = n;
    return this;
  },
  json: function(obj) {
    this.test.json = obj;
    return this;
  },
  send: function(obj) {
    this.test.json = obj;
    return this;
  },
  redirect: function(str) {
    this.test.redirect = str;
    return this;
  }
};
const shea = {
  user: {
    isAuthorized: true
  }
};
const steven = {
  user: {
    isAuthorized: false
  }
};
const jaylan = {};
let chai = require("chai");
let lodashClonedeep = require("lodash.clonedeep");

let test1 = userIsAuthorized(shea, lodashClonedeep(res)).test;
let test2 = userIsAuthorized(steven, lodashClonedeep(res)).test;
let test3 = userIsAuthorized(jaylan, lodashClonedeep(res)).test;

var expect = require("chai").expect;

// User is logged in and authorized
expect(test1).to.be.a("object");
expect(test1.json).to.be.a("object");
expect(test1.status).to.be.a("number");
expect(test1.status).to.equal(200);
expect(test1.json.isAuthorized).to.equal(true);

// User is logged in and NOT authorized
expect(test2).to.be.a("object");
expect(test2.json).to.be.a("string");
expect(test2.status).to.be.a("number");
expect(test2.status).to.equal(500);
expect(test2.json).to.equal("Not Authorized");

// User is not logged in
expect(test3).to.be.a("object");
expect(test3.redirect).to.be.a("string");
expect(test3.redirect).to.equal("/login");

console.log("Congrats! All tests are passing!");
