import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin1:kViaFasWt6Gv1pLJ@cluster0.bgaqtx9.mongodb.net/destinos");
        console.log("Se conecto a la BD");
    } catch (error) {
        console.log(error);
    }
}