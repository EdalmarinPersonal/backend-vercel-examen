import mongoose from "mongoose";

/*export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin1:kViaFasWt6Gv1pLJ@cluster0.bgaqtx9.mongodb.net/destinos", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Se conecto a la BD");
    } catch (error) {
        console.log(error);
    }
}*/
export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin1:kViaFasWt6Gv1pLJ@cluster0.bgaqtx9.mongodb.net/foros", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Se conecto a la BD");
    } catch (error) {
        console.log(error);
    }
}

