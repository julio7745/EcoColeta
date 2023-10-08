
import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const coletaSchema = new Schema({

    massa: { type: Number, required: true },
    volume: { type: Number, required: true },
    cliente: { type: String, required: true },
    material: { type: String, required: true },
    
});

const Coleta = mongoose.model('coleta', coletaSchema);

export default Coleta;
