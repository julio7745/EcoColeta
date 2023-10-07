
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

import Coletas from '../models/coletasModel'

const getColetas = async (req: Request, res: Response) => {

  try{

    const coletas = await Coletas.find();
   
    const token = jwt.sign({ coletas: coletas}, 'secretpassword');
    res.json({ token });
    
  } catch (error) {
    console.error(error);
    res.status(500).json([]);

  }
}

export default getColetas;
