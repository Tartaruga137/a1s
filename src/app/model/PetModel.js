const { DataTypes, Model } = require('sequelize');
const db = require('../../config/connection');

class Pet extends Model {}

Pet.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    species: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    carry: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    date_of_birth: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db,
    modelName: 'Pet',
    tableName: 'pets',
    timestamps: true, 
    underscored: true, 
});

module.exports = Pet;

