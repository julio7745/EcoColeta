
import { Request, Response } from 'express';

import Coleta from '../models/coletaModel'

const deleteColeta = async (req: Request, res: Response) => {
  
    const n = parseInt(req.params.n);

    try {

        const coletas = await Coleta.find();
        
        for (let coleta of coletas){
            console.log(coleta);
        }
        
        return;

    } catch (error) {
        console.log(Error);
    }

}

export default deleteColeta;
