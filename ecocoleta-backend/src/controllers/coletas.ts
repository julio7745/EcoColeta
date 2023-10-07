
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

//import Coletas from '../models/coletasModel'

const coletas = async (req: Request, res: Response) => {

  try{

    //const coletas = await Coletas.find();
   
    const token = jwt.sign({coletas: [
      {n: 1, cliente: 'thiago', massa: '20', volume: '30', material: 'plastico'},
      {n: 2, cliente: 'julio', massa: '3', volume: '30', material: 'plastico'},
      {n: 3, cliente: 'arthur', massa: '10', volume: '30', material: 'plastico'},
      {n: 4, cliente: 'mafalda', massa: '15', volume: '30', material: 'plastico'},
      {n: 5, cliente: 'renato', massa: '25', volume: '30', material: 'plastico'},
    ]}, 'secretpassword');
    res.json({ token });
    
  } catch (error) {
    console.error(error);
    res.status(500).json([]);

  }
}

export default coletas;
