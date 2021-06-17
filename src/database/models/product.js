'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Brand);
      Product.belongsTo(models.Categories);
      Product.belongsTo(models.Size);
      Product.belongsTo(models.Gender);
      Product.hasMany(models.Image, {foreignKey: 'products_id'});
      Product.hasOne(models.OrderDetails);
    }
  };
  Product.init({
    name: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      stock: DataTypes.INTEGER,
      stockMin: DataTypes.INTEGER,
      stockMax: DataTypes.INTEGER,
      brand_id: DataTypes.INTEGER,
      categories_id: DataTypes.INTEGER,
      size_id: DataTypes.INTEGER,
      gender_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};