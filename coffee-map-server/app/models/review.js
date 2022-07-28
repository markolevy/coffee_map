module.exports = function (sequelize, Sequelize) {
    const Review = sequelize.define('review', {
        username: {
            // author is the user who wrote the review
            // we can get the avatar from is username
            type: Sequelize.STRING,
            notEmpty: true
        },
        price_rating: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
        drink_rating: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
        dessert_rating: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
        mood_rating: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
        global_rating: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
        comment: {
            type: Sequelize.STRING,
        },
        coffee_name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        coffee_address: {
            type: Sequelize.STRING,
        },
        photos: {
            type: Sequelize.ARRAY(Sequelize.STRING),
        },
        tags: {
            type: Sequelize.ARRAY(Sequelize.STRING),
        }

    });
    return Review;
}