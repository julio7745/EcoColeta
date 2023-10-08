
import { Request, Response } from 'express';

import Coleta from '../models/coletaModel'

const newColeta = async (req: Request, res: Response) => {
  
  const { material, massa, volume, cliente } = req.body;

  try {
    
    const coleta = new Coleta({
      material: material,
      massa: parseFloat(massa),
      volume: parseFloat(volume),
      cliente: cliente,
    });
  
    await coleta.save();

    res.sendStatus(200)
    return;

  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
}

export default newColeta;
