
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

import Coleta from '../models/coletaModel'

const getColetas = async (req: Request, res: Response) => {

  if (!process.env.SECRET) {
    throw new Error('Erro na variavel de ambiente SECRET.');
  }
  const secret = process.env.SECRET

  try{

    const coletas = await Coleta.find();
   
    const token = jwt.sign({ coletas: coletas.reverse()}, secret);
    res.json({ token });
    
  } catch (error) {
    console.error(error);
    res.status(500).json([]);
  }
}

export default getColetas;
