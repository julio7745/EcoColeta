
import { Request, Response } from 'express';
import express from 'express';

import coletas from './src/controllers/coletas'

const router = express.Router();

router.get('/coletas', (req: Request, res: Response) => coletas(req, res))

export default router;
