const userService = require("../services/userService");

const signUp = async (req, res) => {
  try {
    const { email, password, name, phoneNumber } = req.body;

    if (!password || !email || !name || !phoneNumber) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }

    await userService.signUp(email, password, name, phoneNumber);

    res.status(201).json({ message: "SIGNUP_SUCCESS" });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  signUp,
};
