const express = require('express');
const { getUserById, login, register } = require('../controllers/userController');
const { tokenValidation } = require('../middlewares/tokenValidation');
const { fieldsValidation, loginValidation } = require('../middlewares/loginValidation');
const { registerFieldsValidation, registerValidation } = require('../middlewares/registerValidation');

const userRouter = express.Router();

userRouter.get('/user', tokenValidation, getUserById);
userRouter.post('/login', fieldsValidation, loginValidation, login);
userRouter.post('/register', registerFieldsValidation, registerValidation, register);

module.exports = { userRouter };