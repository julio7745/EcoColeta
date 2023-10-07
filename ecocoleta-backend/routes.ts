
import { Request, Response } from 'express';
import express from 'express';

import getColetas from './src/controllers/getColetas'
import newColetas from './src/controllers/newColeta'
import deleteColeta from './src/controllers/deleteColeta'

const router = express.Router();

router.get('/getColetas', (req: Request, res: Response) => getColetas(req, res))
router.post('/newColeta', (req: Request, res: Response) => newColetas(req, res))
router.delete('/delete/:n', (req: Request, res: Response) => deleteColeta(req, res))

export default router;
