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
      Order.hasMany(models.OrderDetail, {
        foreignKey: 'order_id',
        as: "orderDetails"
      })

      Order.hasOne(models.Shippings, {
        foreignKey: 'shipping_id',
        as: "shippings"
      })

      Order.belongTo(models.User);

      Order.belongTo(models.Payment);

      Order.belongTo(models.State);

      Order.belongTo(models.Address);

   
    
    }
  };
  Order.init({
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    payment_id: DataTypes.INTEGER,
    shipping_id: DataTypes.INTEGER,
    states_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};