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
    origin: "https://frontend-destinos-vercel.vercel.app",
    credentials: true
}));


connectDB();

app.use("/users", userRoutes);
app.use("/destinations",destinationRoutes);

app.listen(3000, () => {
    console.log("Se inicio el backend!");
});