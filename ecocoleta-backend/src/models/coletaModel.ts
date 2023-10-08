
import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const coletaSchema = new Schema({

    material: { type: String, required: true },
    massa: { type: Number, required: true },
    volume: { type: Number, required: true },
    cliente: { type: String, required: true },
    
});

const Coleta = mongoose.model('coleta', coletaSchema);

export default Coleta;
