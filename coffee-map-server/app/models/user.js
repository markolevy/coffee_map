module.exports = function(sequelize, Sequelize) {
    const User = sequelize.define('user', {
        username: {
            type: Sequelize.STRING,
            unique: true,
            notEmpty: true
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            notEmpty: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });
    return User;
 }