import { NextFunction, Request, Response } from 'express';
import { getAuthAdmin } from '../utils/firebase.helpers';
import { generateResponse } from '../utils/generateResponse';
import { createResponse } from '../utils/service.helpers';
import { AuthLocales } from '../locales/auth.locales';
import { HttpStatusCode } from 'axios';

export const authorizeUser = async (req: Request, res: Response, next: NextFunction) => {
  const auth = getAuthAdmin();
  const token = req.headers.authorization?.split(' ')[1];
  console.log(token);

  if (!token) {
    return generateResponse(
      res,
      createResponse({
        message: AuthLocales.NOT_AUTHORIZED,
        statusCode: HttpStatusCode.Unauthorized,
      }),
    );
  }
  try {
    const user = await auth.verifyIdToken(token);
    // TODO: handle this nasty type thing
    console.log('user', user);
    //@ts-ignore
    req.user = user;
    return next();
  } catch (error) {
    console.log('error', error);
    // TODO: Handle diffferent outputs verify Id token
    return generateResponse(
      res,
      createResponse({
        message: AuthLocales.NOT_AUTHORIZED,
        statusCode: HttpStatusCode.Unauthorized,
      }),
    );
  }
};
