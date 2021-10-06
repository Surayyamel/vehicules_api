'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Vehicule extends Model {};

  Vehicule.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    } 

  }, {
    sequelize,
    modelName: 'Vehicule',
    tableName: 'vehicules'
  });
  return Vehicule;
};