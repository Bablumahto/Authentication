const User = require("../model/user");
const bcrypt = require("bcrypt");
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "user exists" });
    }
    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPass,
    });
    return res.status(200).json({ message: "user created" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "user not created" });
  }
};

module.exports = { registerUser };
