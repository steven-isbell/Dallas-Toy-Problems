## Week 3 - Day 2 - Toy Problem:

### [User is stored in DataBase](https://repl.it/@shea_close/Week-3-Day-2)

###### Introduction:

Our task, once user is logged in, is to see if they exist in the Database, if so, return that users information, if not, add them to database, then return the user.

1.  Confirm if the user is in the database.
    * There is a method on the req object (getUser). It will expect the users id (console.log the req object to see how the data is coming in)
    * getUser will return a Promise object. When resolved you will get an array.
      • If the user array is not empty, return the res object with a status of 200 and the user object (not the array)
1.  Add the user to the Database

    * If the getUser promise is resolved with an empty array, that means the user does not exist in the data base. Go ahead and add the user, using req.addUser passing the entire user object.

    * addUser will return a promise, if the promise resolves, it will invoke `.then` with an array including the user object. Return the res object with a status of 200 and the user object (not the array).

1.  Handle promise rejections:
    * If either of the promises fail, they will invoke the `.catch` callback function, passing it an error.
    * If this happens, return the res object with a status of 500 and the error message.
