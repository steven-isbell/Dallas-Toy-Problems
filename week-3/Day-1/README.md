# Week 3 Toy Problems

## Week 3 - Day 1 - Toy Problem:

### [Basic Crud Ops](https://repl.it/@shea_close/Week-3-Day-1)

###### Introduction:

Today we will be writing basic CRUD endpoints in node. Your job will be to:

1.  get /api/people
    * Return all users from the req object with a status of 200
1.  get /api/people/:id
    * Find the correct user object from the users and return it based on the params id.
1.  put /api/people/:id
    * Update find the correct user object, then update it with the values passed on the req.body
1.  post /api/people/
    * Add the user on req.body to the users array then return the updated array
1.  delete /api/people/:id
    * Using the params id, find and remove the user with the matching id.
