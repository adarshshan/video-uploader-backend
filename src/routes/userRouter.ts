import { Router } from 'express';
import { getAllVideoDetails, createNewUrl } from '../controller/userController';

const router = Router();

router.get('/:code', getAllVideoDetails)
    .post('/', createNewUrl);

export default router;
