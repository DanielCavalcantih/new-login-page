const userService = require('../service/userService');

const getUserById = async (req, res, next) => {
  const { id } = req.payload;
  const userById = await userService.getUserById(id);
  return res.status(200).json(userById);
}

const login = async (req, res) => {
  const token = await userService.login(req.body);
  return res.status(201).json({ token });
};

const register = async (req, res) => {
  const newUser = await userService.register(req.body);
  return res.status(200).json({ message: 'Successfully registered!' });
}

module.exports = { getUserById, login, register };