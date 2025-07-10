import { Request, Response } from 'express';
import * as UserService from '../services/user.service';
import resolveController from '../utils/controller.middleware';

export const postLogin = (req: Request, res: Response) => {
  const { email, password } = req.body;
  resolveController(
    {
      email,
      password,
    },
    UserService.loginUser,
    req,
    res,
  );
};

export const postRegister = (req: Request, res: Response) => {
  const { name, surname, birthday, gender, email, phoneNumber, password, userType } = req.body;
  console.log('req.body', req.body);
  resolveController(
    { name, surname, birthday, gender, email, phoneNumber, password, userType },
    UserService.registerUser,
    req,
    res,
  );
};

export const getUserDetails = (req: any, res: Response) => {
  resolveController({ uid: req?.user?.uid }, UserService.getUserDetails, req, res);
};

