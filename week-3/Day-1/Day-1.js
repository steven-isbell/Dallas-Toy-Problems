/*
Our task is to determine if a user is currently logged in using standard express functionality. The user (if exists) can be found on req.user. Your job will be to:

Confirm if the user is logged in:
  1. User information can be found on req.user.
    If the user does not exist, pass '/login' as an argument to the res.redirect method.
  2. Confirm if the user is authorized.
    The user will have a property that contains this information, try using console.log to see what information is getting passed in on the user object.
    If the user is authorized, return the response object with a status of 200, and the user object (using the json or send methods)
  3. If the user is logged in but NOT Authorized:
    Return the response object with a status of 500 and the message 'Not Authorized' (using the json or send methods)
    
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
	},
};
const shea = {
	user: {
		isAuthorized: true,
	},
};
const steven = {
  user: {
    isAuthorized: false
  }
}
const jaylan = {
  
}
let chai = require('chai');
let lodashClonedeep = require('lodash.clonedeep');

let test1 = userIsAuthorized(shea, lodashClonedeep(res)).test;
let test2 = userIsAuthorized(steven, lodashClonedeep(res)).test;
let test3 = userIsAuthorized(jaylan, lodashClonedeep(res)).test;

var expect = require('chai').expect;

// User is logged in and authorized
expect(test1).to.be.a('object');
expect(test1.json).to.be.a('object');
expect(test1.status).to.be.a('number');
expect(test1.status).to.equal(200);
expect(test1.json.isAuthorized).to.equal(true);

// User is logged in and NOT authorized
expect(test2).to.be.a('object');
expect(test2.json).to.be.a('string');
expect(test2.status).to.be.a('number');
expect(test2.status).to.equal(500);
expect(test2.json).to.equal('Not Authorized');

// User is not logged in
expect(test3).to.be.a('object');
expect(test3.redirect).to.be.a('string');
expect(test3.redirect).to.equal('/login');

console.log('Congrats! All tests are passing!');
