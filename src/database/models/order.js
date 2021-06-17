'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Payment)
      Order.belongsTo(models.User)
      Order.belongsTo(models.Shipping)
      Order.belongsTo(models.State)
      Order.hasMany(models.OrderDetails, {foreignKey: 'orders_id'})
    }
  };
  Order.init({
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    total: DataTypes.DOUBLE,
    payment_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    shipping_id: DataTypes.INTEGER,
    state_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};