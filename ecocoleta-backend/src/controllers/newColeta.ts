
import { Request, Response } from 'express';

import Coleta from '../models/coletaModel'

const newColeta = async (req: Request, res: Response) => {
  
  const { material, massa, volume, cliente } = req.body;

  try {

    const coletas = await Coleta.find();
        
    const coleta = new Coleta({
      n: coletas.length + 1,
      material: material,
      massa: massa,
      volume: volume,
      cliente: cliente,
    });
  
    await coleta.save();

    res.send(200)
    return;

  } catch (error) {
    console.log(Error);
  }
  
  res.send(500)

}

export default newColeta;
