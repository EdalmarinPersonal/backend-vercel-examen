import express from "express";
import userRoutes from "./routes/userRoutes.js";
import destinationRoutes from "./routes/destinationRoutes.js"
import foroRoutes from "./routes/foroRoutes.js"
import cors from "cors";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: true,
    credentials: true
}));


connectDB();

app.use("/foros", userRoutes);
app.use("/api/foros", foroRoutes);
//app.use("/destinations",destinationRoutes);


app.listen(3000, () => {
    console.log("Se inicio el backend!");
});