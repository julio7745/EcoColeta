
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

import Coleta from '../models/coletaModel'

import ValidaFormDeColetas from '../services/validaFormDeColeta';

const newColeta = async (req: Request, res: Response) => {

  if (!process.env.SECRET) {
    throw new Error('Erro na variavel de ambiente SECRET.');
  }
  const secret = process.env.SECRET
  
  const { material, massa, volume, cliente } = req.body;

  const dados =  {
    massa,
    volume,
    cliente,
    material,
  }

  const retorno = ValidaFormDeColetas({ coleta: dados })

  if ( typeof retorno === 'string') {
    const token = jwt.sign({ erro: retorno, sucess: 0 }, secret);
    res.json({ token });
    return
  }
  
  const coleta = new Coleta({
    massa: parseFloat(massa),
    volume: parseFloat(volume),
    cliente: retorno.newcliente,
    material: retorno.newMaterial,
  });


  try {

    await coleta.save();

    const token = jwt.sign({ erro: retorno, sucess: 1 }, secret);
    res.json({ token });
    return

  } catch (error) {
    console.log(error);
    const token = jwt.sign({ erro: 'Houve uma falha no BackEnd, entre em contato com o desenvolvedor.', sucess: 0 }, secret);
    res.json({ token });
    return
  }
}

export default newColeta;
