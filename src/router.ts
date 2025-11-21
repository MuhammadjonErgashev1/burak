import memberController from './controllers/member.controller';

import express from 'express';
const router = express.Router();
/* memeber */ 
router.post('/member/login', memberController.login)
router.post('/member/signup', memberController.signup)
router.get("/member/detail", memberController.verifyAuth)

/*Product*/ 

/*Order*/ 

export default router;