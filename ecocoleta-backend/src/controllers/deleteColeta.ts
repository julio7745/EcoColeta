
import { Request, Response } from 'express';

import Coleta from '../models/coletaModel'

const deleteColeta = async (req: Request, res: Response) => {
  
    const _id = req.params.id;

    try {

        await Coleta.findOneAndRemove({ _id })
        
        res.send('ok')
        return;

    } catch (error) {
        console.log(error);
        res.send('error')
    }
}

export default deleteColeta;
