
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

import Coleta from '../models/coletaModel'

const getColetas = async (req: Request, res: Response) => {

  try{

    const coletas = await Coleta.find();
   
    const token = jwt.sign({ coletas: coletas}, 'secretpassword');
    res.json({ token });
    
  } catch (error) {
    console.error(error);
    res.status(500).json([]);

  }
}

export default getColetas;
