const { DataTypes, Model } = require('sequelize');
const db = require('../../config/connection');
const Pet = require('./PetModel')

class Tutor extends Model {}

Tutor.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_of_birth: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    zip_code: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db,
    modelName: 'Tutor',
    tableName: 'tutors',
    timestamps: true, 
    underscored: true, 
});

Tutor.hasMany(Pet, { foreignKey: 'tutor_id', as: 'pets' });

module.exports = Tutor;

