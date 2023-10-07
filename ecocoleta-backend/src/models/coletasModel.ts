
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aberturaSchema = new Schema({

    n: { type: Number, required: true, unique: true },
    material: { type: String, required: true },
    massa: { type: String, required: true },
    volume: { type: String, required: true },
    cliente: { type: String, required: true },
    
});

const Abertura = mongoose.model('user', aberturaSchema);

export default Abertura;
