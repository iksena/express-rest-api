const Joi = require('joi');

exports.postPlacesSchema = Joi.object({
  name: Joi.string().min(5).required(),
  address: Joi.string().min(5).required(),
  city: Joi.string().min(5).required(),
});

exports.patchPlacesSchema = Joi.object({
  name: Joi.string().min(5).optional(),
  address: Joi.string().min(5).optional(),
  city: Joi.string().min(5).optional(),
});
