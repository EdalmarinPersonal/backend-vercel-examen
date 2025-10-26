import mongoose from "mongoose";

const foroSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: [5, "El título debe tener al menos 5 caracteres"] },
    description: { type: String, required: true, minlength: [10, "La descripción debe tener al menos 10 caracteres"] },
    category: { type: String, required: true, minlength: [5, "La categoría debe tener al menos 5 caracteres"] },
    createdby: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Foro = mongoose.model("Foro", foroSchema);
export default Foro;
