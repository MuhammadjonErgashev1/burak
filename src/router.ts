import memberController from './controllers/member.controller';

import express from 'express';
import uploader from './libs/utils/uploader';
const router = express.Router();
/* memeber */ 
router.post('/member/login', memberController.login)
router.post('/member/signup', memberController.signup)
router.post("/member/logout", memberController.verifyAuth, memberController.logout)
router.get("/member/detail", memberController.verifyAuth, memberController.getMemberDetail)
router.post("/member/update", uploader("members").single("memberImage") , memberController.verifyAuth, memberController.updateMember)

/*Product*/ 

/*Order*/ 

export default router;