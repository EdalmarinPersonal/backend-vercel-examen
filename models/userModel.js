import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: [true, "El campo es obligatorio"], minLength: [3, "Como minimo el campo debe tener 3 caracteres"] },
    lastName: { type: String, required: [true, "El campo es obligatorio"], minLength: [3, "Como minimo el campo debe tener 3 caracteres"] },
    email : {type: String, required : true , minLength: 8, unique: true, match: [/^\S+@\S+\.\S+$/, "Formato invalido"]},
    password : {type: String , required: true, minLength: 8}   
});

/*userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password,10);
    next();
});*/



const User = mongoose.model("User", userSchema, "users");
export default User;