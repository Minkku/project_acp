const bcrypt = require("bcrypt");
const response = require("express");
const jwt = require("jsonwebtoken");

const userDao = require("../models/userDao");

const signIn = async (email, password) => {
  const hashedPassword = await userDao.getHashedPassword(email);
  const compare = await bcrypt.compare(password, hashedPassword);

  if (!compare) {
    const err = new Error("PASSWORD_DOES_NOT_MATCH");
    err.statusCode = 401;
    throw err;
  }

  const userId = await userDao.getUserId(email);

  const payLoad = userId;
  const jwtToken = jwt.sign(payLoad, process.env.secretKey);

  return jwtToken;
};

module.exports = {
  signIn,
};
