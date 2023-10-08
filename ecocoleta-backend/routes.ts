
import { Request, Response } from 'express';
import express from 'express';

import getColetas from './src/controllers/getColetas'
import newColetas from './src/controllers/newColeta'
import deleteColeta from './src/controllers/deleteColeta'
import editColeta from './src/controllers/editColeta'

const router = express.Router();

router.get('/getColetas', (req: Request, res: Response) => getColetas(req, res))
router.post('/newColeta', (req: Request, res: Response) => newColetas(req, res))
router.delete('/delete/:id', (req: Request, res: Response) => deleteColeta(req, res))
router.put('/editColeta', (req: Request, res: Response) => editColeta(req, res))

export default router;
