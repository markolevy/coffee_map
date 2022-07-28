module.exports = app => {
  const users = require("../controllers/user-controllers.js");
  const reviews = require("../controllers/review-controllers.js");
  var router = require("express").Router();

  // USER
  // Create a new User
  router.post("/Users/", users.create);
  // Retrieve all Users with optional condition of username
  router.get("/Users/", users.findAll);
  // Retrieve a single User with id
  router.get("/Users/:id", users.findOne);
  // Update a User with id
  router.put("/Users/:id", users.update);
  // Delete a User with id
  router.delete("/Users/:id", users.delete);
  // Delete all Users
  router.delete("/Users/", users.deleteAll);

  // REVIEW
  // Create a new Reviews
  router.post("/Reviews/", reviews.create);
  // Retrieve all Reviews from the database with optional username and/or coffee_name
  router.get("/Reviews/", reviews.findAll);
  // Retrieve a single Review with id
  router.get("/Reviews/:id", reviews.findOne);
  // Update a Review with id
  router.put("/Reviews/:id", reviews.update);
  // Delete a Review with id
  router.delete("/Reviews/:id", reviews.delete);
  // Create a new User
  router.delete("/Reviews/", reviews.deleteAll);

  app.use('/api', router);
};