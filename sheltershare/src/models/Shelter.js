const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});
const Shelter  = sequelize.define('Shelter', {
    shelterName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shelterAddress: {
        type: DataTypes.STRING,
        allowNUll: false,
    },
    shelterId:  {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    toiletriesGoal: {
        type: DataTypes.INTEGER,       
    },
    toiletriesDonated: {
        type: DataTypes.INTEGER,        
    },
    foodGoal: {
        type: DataTypes.INTEGER,      
    },
    foodDonated: {
        type: DataTypes.INTEGER,       
    },
    clothesGoal: {
        type: DataTypes.INTEGER,       
    },
    clothesDonated: {
        type: DataTypes.INTEGER,       
    },
});
module.exports = Shelter;