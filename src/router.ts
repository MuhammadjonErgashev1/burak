import memberController from './controllers/member.controller';

import express from 'express';
const router = express.Router();

router.post('/login', memberController.login)

router.post('/signup', memberController.signup)


export default router;