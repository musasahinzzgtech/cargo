import { Router } from 'express';
import { postRegister, getUserDetails, postLogin } from '../controllers/user.controller';
import { registerUserMiddleware } from '../middlewares/user.middlewares';
import { authorizeUser } from '../middlewares/authorization.middleware';

const router = Router();

router.get('/', authorizeUser, getUserDetails).post('/', registerUserMiddleware, postRegister);

router.post('/login', postLogin);
router.get('/logout');

export default router;
