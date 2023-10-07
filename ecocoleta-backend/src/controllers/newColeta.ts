
import { Request, Response } from 'express';

import Coleta from '../models/coletasModel'

const newColeta = async (req: Request, res: Response) => {
  
  try {
    
    const coleta = new Coleta({
      n: 1,
      material: 'plastico',
      massa: 40,
      volume: 20,
      cliente: 'julio',
    });
  
    await coleta.save();

    res.send('sucess')

  } catch (error) {
    console.log(Error);
  }
  
  res.send('failure')
}

export default newColeta;
