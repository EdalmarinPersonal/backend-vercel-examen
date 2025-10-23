import express from "express";
import userRoutes from "./routes/userRoutes.js";
import destinationRoutes from "./routes/destinationRoutes.js"
import cors from "cors";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


connectDB();

app.use("/users", userRoutes);
app.use("/destinations",destinationRoutes);

app.listen(3000, () => {
    console.log("Se inicio el backend!");
});