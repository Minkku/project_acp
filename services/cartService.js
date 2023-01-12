const cartDao = require("../models/cartDao");

const createCart = async (
  userId,
  plantId,
  plantQuantity,
  potId,
  potQuantity,
  nutrientId,
  nutrientQuantity
) => {
  return cartDao.createCart(
    userId,
    plantId,
    plantQuantity,
    potId,
    potQuantity,
    nutrientId,
    nutrientQuantity
  );
};

const getCartList = async (userId) => {
  return cartsDao.getCartList(userId);
};

const deleteCart = async (cartId) => {
  return cartsDao.deleteCart(cartId);
};

module.exports = {
  createCart,
  getCartList,
  deleteCart,
};
