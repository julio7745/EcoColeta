
import { Request, Response } from 'express';
import express from 'express';

import getColetas from './src/controllers/getColetas'
import newColetas from './src/controllers/newColeta'

const router = express.Router();

router.get('/getColetas', (req: Request, res: Response) => getColetas(req, res))
router.get('/newColeta', (req: Request, res: Response) => newColetas(req, res))

export default router;
