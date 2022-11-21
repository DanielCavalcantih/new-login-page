const { User } = require('../models');
const { registerSchema } = require('./schemas');

const registerFieldsValidation = async (req, res, next) => {
  const validation = registerSchema.validate(req.body);
  if (validation.error) return res.status(400).json({ message: 'Verifique os campos e tente novamente!' });
  return next();
};

const registerValidation = async (req, res, next) => {
  const { email } = req.body;
  const alreadyExist = await User.findOne({
    where: {
      email,
    },
  });
  if (alreadyExist) return res.status(406).json({ message: 'Usuário já existente!' });
  return next();
}

module.exports = { registerFieldsValidation, registerValidation };