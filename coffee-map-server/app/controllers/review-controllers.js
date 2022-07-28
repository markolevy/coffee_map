const db = require("../models");
const Review = db.Review;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.username || !req.body.coffee_name || !req.body.global_rating) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Review
    const review = {
        username: req.body.username,
        price_rating: req.body.price_rating,
        drink_rating: req.body.drink_rating,
        dessert_rating: req.body.dessert_rating,
        mood_rating: req.body.mood_rating,
        global_rating: req.body.global_rating,
        comment: req.body.comment,
        coffee_name: req.body.coffee_name,
        coffee_address: req.body.coffee_address,
        photos: req.body.photos,
        tags: req.body.tags
    };
    // Save Review in the database
    Review.create(review)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Review."
            });
        });

};

// Retrieve all Reviews from the database with optional username and/or coffee_name
exports.findAll = (req, res) => {
    const username = req.query.username;
    const coffee_name = req.query.coffee_name;
    var conditionUsername = username ? { username: { [Op.like]: `%${username}%` } } : null;
    var condition = null;
    if (conditionUsername) {
        var conditionCoffee_name = coffee_name ? { coffee_name: { [Op.like]: `%${coffee_name}%` } } : null;
        condition = { [Op.and]: [conditionUsername, conditionCoffee_name] };
    } else {
        condition = coffee_name ? { coffee_name: { [Op.like]: `%${coffee_name}%` } } : null;
    }
    Review.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Review."
            });
        });

};

// Find a single Review with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Review.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Review with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Review with id=" + id
            });
        });

};

// Update a Review by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Review.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Review was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Review with id=${id}. Maybe Review was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Review with id=" + id
            });
        });
};

// Delete a Review with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Review.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Review was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Review with id=${id}. Maybe Review was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Review with id=" + id
            });
        });
};

// Delete all Reviews from the database.
exports.deleteAll = (req, res) => {
    Review.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Review were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Review."
            });
        });

};