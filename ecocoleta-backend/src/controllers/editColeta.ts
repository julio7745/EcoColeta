
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

dotenv.config()

import Coleta from '../models/coletaModel'
import ValidaFormDeColetas from '../services/validaFormDeColeta';

const editColeta = async (req: Request, res: Response) => {

  if (!process.env.SECRET) {
    throw new Error('Erro na variavel de ambiente SECRET.');
  }
  const secret = process.env.SECRET
  
  try {

    const dados = req.body

    const retorno = ValidaFormDeColetas({ coleta: dados })
    
    if ( typeof retorno === 'string') {
      const token = jwt.sign({ erro: retorno, sucess: 0 }, secret);
      res.json({ token });
      return
    }

    dados.cliente = retorno.newcliente
    dados.material = retorno.newMaterial
    
    const coleta = await Coleta.findById(dados._id);

    if (!coleta) {
      const token = jwt.sign({ erro: 'Coleta não encontrada no banco de dados.', sucess: 0 }, secret);
      res.json({ token });
      return
    }

    coleta.massa = dados.massa;
    coleta.volume = dados.volume;
    coleta.cliente = dados.cliente;
    coleta.material = dados.material;

    await coleta.save();

    const token = jwt.sign({ erro: '', sucess: 1 }, secret);
    res.json({ token });
    return

  } catch (error) {

    const token = jwt.sign({ erro: 'Erro desconhecido no BackEnd, entre em contato com o desenvolvedor', sucess: 0 }, secret);
    res.json({ token });
    return

  }
}

export default editColeta;
