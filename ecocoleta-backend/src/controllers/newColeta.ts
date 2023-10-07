
import { Request, Response } from 'express';

import Coleta from '../models/coletasModel'

const newColeta = async (req: Request, res: Response) => {
  
  const { n, material, massa, volume, cliente } = req.body;

  try {

    console.log(req.body);
    
    const coleta = new Coleta({
      n: n,
      material: material,
      massa: massa,
      volume: volume,
      cliente: cliente,
    });
  
    await coleta.save();

    res.send({status: 'sucesso'})
    return;

  } catch (error) {
    console.log(Error);
  }

  res.send({status: 'falhou'})

}

export default newColeta;
