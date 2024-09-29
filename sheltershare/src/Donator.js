const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});
const Shelter = require('./Shelter');
const Donator  = sequelize.define('Donator', {
    name : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    clothesDonated : {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    foodDonated : {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    toiletriesDonated : {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});
Donator.belongsTo(Shelter, {
    foreignKey: 'shelterName',
    as: 'chosenShelter',
})

module.exports = Donator;