import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
    place : { type: String, required: [true, "El campo es obligatorio"], minLength: [3, "Como minimo el campo debe tener 3 caracteres"] },
    description: { type: String, required: [true, "El campo es obligatorio"], minLength:10 },
    tips: { type: String, required: [true, "El campo es obligatorio"], minLength:10 },
    bestSeason: {type: String, required: true},
    price: {type: Number, min: 0}
    
}, {
    timestamps: true
})

const Destination = mongoose.model("Destination", destinationSchema, "destinations");
export default Destination;