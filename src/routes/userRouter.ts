import { Router } from 'express';
import { getAllVideoDetails, createNewUrl, getDetails } from '../controller/userController';

const router = Router();

router.get('/:code', getAllVideoDetails)
    .post('/', createNewUrl);
router.get('/video-script/:code', getDetails);

export default router;
