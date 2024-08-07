import { Router } from 'express';
import { getExample } from '../controller/userController';

const router = Router();

router.get('/', getExample);

export default router;
