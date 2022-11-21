const { User } = require('../models');
const { generateToken } = require('../generateToken');

const getUserById = async (id) => {
  const user = await User.findOne({
    where: {
      id,
    }
  });
  return user;
};

const login = async (user) => {
  const { email, password } = user;
  const login = await User.findOne({
    where: {
      email,
      password,
    },
  });
  const token = generateToken(login.dataValues);
  return token;
}

const register = async (newUser) => {
  const addUser = await User.create(newUser);
  return addUser;
};

module.exports = { getUserById, login, register };