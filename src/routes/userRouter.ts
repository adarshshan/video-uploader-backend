import { Router } from 'express';
import { getAllVideoDetails,createNewUrl } from '../controller/userController';

const router = Router();

router.get('/', getAllVideoDetails)
    .post('/', createNewUrl);

export default router;
