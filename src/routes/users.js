const { Router } = require('express');

const {
  getPlacesByUserId, signUp, logIn, getUsers,
} = require('../controllers/userController');
const withPlaceService = require('../middlewares/withPlaceService');
const withUserService = require('../middlewares/withUserService');
const withValidateSchema = require('../middlewares/withValidateSchema');
const { signUpBodySchema, logInBodySchema } = require('./schemas/users');

const router = Router();

router.get(
  '/users/:id/places',
  withPlaceService,
  withUserService,
  getPlacesByUserId,
);

router.post(
  '/users/register',
  withUserService,
  signUp,
);

router.post(
  '/users/login',
  withUserService,
  withValidateSchema(signUpBodySchema),
  logIn,
);

router.get(
  '/users',
  withUserService,
  withValidateSchema(logInBodySchema),
  getUsers,
);

module.exports = router;
