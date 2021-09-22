'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Vehicule extends Model {};

  Vehicule.init({
    make: DataTypes.STRING,
    model: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vehicule',
    tableName: 'vehicules'
  });
  return Vehicule;
};