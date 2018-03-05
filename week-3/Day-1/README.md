# Week 3 Toy Problems

## Week 3 - Day 1 - Toy Problem:

### [User is authorized](https://repl.it/@shea_close/Week-3-Day-1)

###### Introduction:

Our task is to determine if a user is currently logged in using standard express functionality. The user (if exists) can be found on req.user. Your job will be to:

1.  Confirm if the user is logged in.
    * User information can be found on req.user.
    * If the user does not exist, pass '/login' as an argument to the res.redirect method.
1.  Confirm if the user is authorized.
    * The user will have a property that contains this information, try using console.log to see what information is getting passed in on the user object.
    * If the user is authorized, return the response object with a status of 200, and the user object (using the json or send methods)
1.  If the user is logged in but _NOT_ Authorized:
    * Return the response object with a status of 500 and the message `Not Authorized`
