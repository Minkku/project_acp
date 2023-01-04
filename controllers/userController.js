const userService = require("../services/userService");

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({ message: "KEY_ERROR" });
    }

    const jwtToken = await userService.signIn(email, password);

    return res.status(200).json({ accessToken: jwtToken });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 401).json({ message: err.message });
  }
};

module.exports = {
  signIn,
};
