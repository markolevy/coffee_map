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
        avatar: {
            type: Sequelize.STRING,
            defaultValue: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
        }
    });
    return User;
 }