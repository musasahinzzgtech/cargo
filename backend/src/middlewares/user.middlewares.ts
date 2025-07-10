import { NextFunction, Request, Response } from 'express';
import { createResponse } from '../utils/service.helpers';
import { HttpStatusCode } from 'axios';
import { AppLocales } from '../locales/app.locales';
import { generateResponse } from '../utils/generateResponse';
import { GenderTypes, UserTypes } from '../types/user.types';
import Joi from 'joi';

const registerUserSchema = Joi.object({
  name: Joi.string().min(3).max(65).required(),
  surname: Joi.string().min(3).max(65).required(),
  birthday: Joi.date().required(),

  gender: Joi.string()
    .valid(...Object.values(GenderTypes))
    .required(),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'io'] } }) // more flexible
    .required(),

  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/) // stronger password rule
    .required(),

  phoneNumber: Joi.string()
    .pattern(/^\+?[0-9]{10,15}$/)
    .required(),

  userType: Joi.string()
    .valid(...Object.values(UserTypes))
    .required(),

  address: Joi.object({
    street: Joi.string().allow('', null),
    city: Joi.string().allow('', null),
    state: Joi.string().allow('', null),
    postalCode: Joi.string().allow('', null),
    country: Joi.string().allow('', null),
    fullAdress: Joi.string().allow('', null),

  }).optional(),
});

export const registerUserMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;
  const validatation = registerUserSchema.validate(body);

  if (validatation.error) {
    const responseObj = createResponse({
      message: AppLocales.BODY_NOT_VALIDATED,
      statusCode: HttpStatusCode.NotAcceptable,
      data: validatation.error,
    });
    return generateResponse(res, responseObj);
  }
  console.log(AppLocales.BODY_VALIDATED);

  return next();
};
