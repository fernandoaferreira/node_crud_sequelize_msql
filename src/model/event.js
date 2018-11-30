const sequelize = require('./connectSequelizeMYSQL');

module.exports = (sequelize, DataTypes) => {

    return sequelize.define('event', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT
    });
};