
import { Request, Response } from 'express';

import Coleta from '../models/coletaModel'

const newColeta = async (req: Request, res: Response) => {
  
  const { material, massa, volume, cliente } = req.body;

  try {

    const coletas = await Coleta.find();
    
    console.log(coletas.length + 1);
    
    const coleta = new Coleta({
      n: coletas.length + 1,
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
