
import { Request, Response } from 'express';

import Coleta from '../models/coletaModel'

const deleteColeta = async (req: Request, res: Response) => {
  
    const _id = req.params.id;

    try {

        await Coleta.findOneAndRemove({ _id })
        
        res.sendStatus(200)
        return;

    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
}

export default deleteColeta;
