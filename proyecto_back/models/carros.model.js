const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarrosSchema = new Schema({
    carro_id:{type: String, required: true, max:60},
    color_puertas:{type: String, required: true, max:40},
    edad:{type: String, required: true, max:15},
    tipo:{type: String, required: false, max:70},
    ciudad_o:{type: String, required: false, max:50}
})

module.exports = mongoose.model("carros", CarrosSchema);