
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

import Coleta from '../models/coletaModel'
import ValidaFormDeColetas from '../services/validaFormDeColeta';


const editColeta = async (req: Request, res: Response) => {
  
  try {

    const dados = req.body

    const retorno = ValidaFormDeColetas({ coleta: dados })

    if ( typeof retorno === 'string') {
      const token = jwt.sign({ erro: retorno, sucess: 0 }, 'secretpassword');
      res.json({ token });
      return
    }

    dados.cliente = retorno.newcliente
    dados.material = retorno.newMaterial
    
    const coleta = await Coleta.findById(dados._id);

    if (!coleta) {
      const token = jwt.sign({ erro: 'Coleta não encontrada no banco de dados.', sucess: 0 }, 'secretpassword');
      res.json({ token });
      return
    }

    coleta.massa = dados.massa;
    coleta.volume = dados.volume;
    coleta.cliente = dados.cliente;
    coleta.material = dados.material;

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
