setApp();

app.get("/api/people", (req, res) => {
  return res.status(200).json(req.users);
});

app.get("/api/people/:id", (req, res) => {
  res.status(200).json(req.users.find(c => req.params.id === c.id));
});

app.put("/api/people/:id", (req, res) => {
  const { prop, val } = req.body;
  req.users.find(c => c.id === req.params.id)[prop] = val;
  res.status(200).json(req.users);
});

app.post("/api/people", (req, res) => {
  req.users.push(req.body);
  res.status(200).json(req.users);
});

app.delete("/api/people/:id", (req, res) => {
  let ind = req.users.findIndex(c => c.id === req.params.id);
  req.users.splice(ind, 1);
  res.status(200).json(req.users);
});

console.log(`If you do everything right, this will show up in the console`);

function setApp() {
  let { should } = require("chai");
  let lodashClonedeep = require("lodash.clonedeep");
  should();
  let res = {
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
    }
  };
  let t1 = lodashClonedeep(res);
  let t2 = lodashClonedeep(res);
  let t3 = lodashClonedeep(res);
  let t4 = lodashClonedeep(res);
  let t5 = lodashClonedeep(res);
  let t6 = lodashClonedeep(res);

  let users = [
    {
      id: 1,
      first_name: "Shea",
      last_name: "Close",
      email: "nope@uhNo.com"
    },
    {
      id: 2,
      first_name: "Grady",
      last_name: "Legen",
      email: "glegen1@slate.com"
    }
  ];
  return (app = {
    get: function(str, cb) {
      let strArr = str.split(":");
      let id = strArr.length > 1 ? strArr.pop() : undefined;
      if (!id) {
        cb({ users }, t2); // all users
        let { test } = t2;
        test.should.be.an("object");
        test.json.should.be.an("array");
        test.status.should.be.a("number");
        test.status.should.equal(200);
        test.json.length.should.equal(2);
        console.log("get /api/people working!");
      } else {
        cb({ params: { id: 1 }, users }, t1); // single user based on id.
        let { test } = t1;
        test.should.be.an("object");
        test.json.should.be.an("object");
        test.json.id.should.be.a("number");
        test.status.should.be.a("number");
        test.status.should.equal(200);
        test.json.first_name.should.equal("Shea");
        console.log("get /api/people/:id working!");
      }
    },
    put: function(str, cb) {
      cb(
        {
          body: { prop: "email", val: "shea@email.com" },
          params: { id: 1 },
          users
        },
        t3
      ); // modify user 1, return entire array of users
      let { test } = t3;
      //first test
      test.should.be.an("object");
      test.json.should.be.an("array");
      test.status.should.be.a("number");
      test.status.should.equal(200);
      test.json[0].email.should.equal("shea@email.com");
      test.json[0].id.should.equal(1);
      test.json[0].first_name.should.equal("Shea");
      test.json[0].last_name.should.equal("Close");
      test.json.length.should.equal(2);

      cb(
        {
          body: { prop: "first_name", val: "Dylan" },
          params: { id: 1 },
          users
        },
        t6
      );
      putTest2 = t6.test;
      putTest2.should.be.an("object");
      putTest2.json.should.be.an("array");
      putTest2.status.should.be.a("number");
      putTest2.status.should.equal(200);
      putTest2.json[0].email.should.equal("shea@email.com");
      putTest2.json[0].id.should.equal(1);
      putTest2.json[0].first_name.should.equal("Dylan");
      putTest2.json[0].last_name.should.equal("Close");
      putTest2.json.length.should.equal(2);

      console.log("put /api/people/:id working!");
    },
    post(str, cb) {
      cb(
        {
          body: {
            id: 11,
            first_name: "Steven",
            last_name: "Isbell",
            email: "asdf@qwerty.dm"
          },
          users
        },
        t4
      ); // add new user to the end of the users array
      let { test } = t4;
      users.length.should.equal(3);
      test.should.be.an("object");
      test.json.should.be.an("array");
      test.status.should.be.a("number");
      test.status.should.equal(200);
      test.json.length.should.equal(3);
      test.json
        .slice()
        .pop()
        .should.be.a("object");
      test.json
        .slice()
        .pop()
        .first_name.should.equal("Steven");
      console.log("post /api/people/ working!");
    },
    delete(str, cb) {
      cb({ params: { id: 2 }, users }, t5);
      let { test } = t5;
      test.should.be.an("object");
      test.json.should.be.an("array");
      test.status.should.be.a("number");
      test.status.should.equal(200);
      test.json.length.should.equal(2);
      users.length.should.equal(2);
      console.log("delete /api/people/:id working!");
    }
  });
}
