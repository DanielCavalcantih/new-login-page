const { User } = require('../models');
const { loginSchema } = require('./schemas');

const fieldsValidation = async (req, res, next) => {
  const validation = loginSchema.validate(req.body);
  if (validation.error) return res.status(400).json({ message: 'Verifique os campos e tente novamente!' });
  return next();
};

const loginValidation = async (req, res, next) => {
  const { email, password } = req.body;
  const login = await User.findOne({
    where: {
      email,
      password,
    },
  });
  if (!login) return res.status(400).json({ message: 'Usuário não encontrado!' });
  return next();
};

module.exports = { fieldsValidation, loginValidation };