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
    shelterId:  {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    toiletriesGoal: {
        type: DataTypes.INTEGER,
        allowNull: true,        
    },
    toiletriesDonated: {
        type: DataTypes.INTEGER,
        allowNull: true,        
    },
    foodGoal: {
        type: DataTypes.INTEGER,
        allowNull: true,        
    },
    foodDonated: {
        type: DataTypes.INTEGER,
        allowNull: true,        
    },
    clothesGoal: {
        type: DataTypes.INTEGER,
        allowNull: true,        
    },
    clothesDonated: {
        type: DataTypes.INTEGER,
        allowNull: true,        
    },
});
module.exports = Shelter;