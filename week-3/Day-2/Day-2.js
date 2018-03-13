/*
<<<<<<< HEAD
Our task is to determine if a user is currently logged in using standard express functionality. The user (if exists) can be found on req.user. Your job will be to:

Confirm if the user is logged in:
  1. User information can be found on req.user.
    If the user does not exist, pass '/login' as an argument to the res.redirect method.
  2. Confirm if the user is authorized.
    The user will have a property that contains this information, try using console.log to see what information is getting passed in on the user object.
    If the user is authorized, return the response object with a status of 200, and the user object (using the json or send methods)
  3. If the user is logged in but NOT Authorized:
    Return the response object with a status of 500 and the message 'Not Authorized' (using the json or send methods)
    
=======
Our task, once user is logged in, is to see if they exist in the Database, if so, return that users information, if not, add them to database, then return the user. 

1.  Confirm if the user is in the database.
    • There is a method on the req object (getUser). It will expect the users id (console.log the req object to see how the data is coming in)
    • getUser will return a Promise object. When resolved you will get an array.

        • If the user array is not empty, return the res object with a status of 200 and the user object (not the array)
2.  Add the user to the Database
    • If the getUser promise is resolved with an empty array, that means the user does not exist in the data base. Go ahead and add the user, using req.addUser passing the entire user object.

    • addUser will return a promise, if the promise resolves, it will invoke `.then` with an array including the user object. Return the res object with a status of 200 and the user object (not the array).

3.  Handle promise rejections:
    • If either of the promises fail, they will invoke the `.catch` callback function, passing it an error.
    • If this happens, return the res object with a status of 500 and the error message.

>>>>>>> master
If you've done everything correctly you should see a console message that says 'Congrats! All tests are passing!'
*/

function userIsAuthorized(req, res) {
  // Your code will go here
}

/* Do not change the code below, it is for testing purposes */

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
