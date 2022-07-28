module.exports = function(sequelize, Sequelize) {
    const User = sequelize.define('user', {
        name: {
            type: Sequelize.STRING,
            unique: true,
            notEmpty: true
        },
        color: {
            type: Sequelize.STRING,
            unique: true,
            notEmpty: true
        },
        numberUsages: {
            type: Sequelize.INTEGER,
            defaultValue: 1,
            validate: {
                min: 1,
                max: 99999
            }
        }

    });
    return User;
 }