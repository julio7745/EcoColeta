
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import Coleta from '../models/coletaModel'

import ValidaFormDeColetas from '../services/validaFormDeColeta';

const editColeta = async (req: Request, res: Response) => {
  
  try {

    const dados = req.body
    const erro = ValidaFormDeColetas({ dados: dados })

    if (erro) {
      console.log(erro);
      const token = jwt.sign({ erro: erro, sucess: 0 }, 'secretpassword');
      res.json({ token });
      return
    }

    const coleta = await Coleta.findById(dados._id);

    if (!coleta) {
      const token = jwt.sign({ erro: 'Coleta não encontrada no banco de dados.', sucess: 0 }, 'secretpassword');
      res.json({ token });
      return
    }

    coleta.material = dados.material;
    coleta.massa = dados.massa;
    coleta.volume = dados.volume;
    coleta.cliente = dados.cliente;

    await coleta.save();
    
    const token = jwt.sign({ erro: '', sucess: 1 }, 'secretpassword');
    res.json({ token });
    return

  } catch (error) {

    const token = jwt.sign({ erro: 'Erro desconhecido no BackEnd, entre em contato com o desenvolvedor', sucess: 0 }, 'secretpassword');
    res.json({ token });
    return

  }
}

export default editColeta;
