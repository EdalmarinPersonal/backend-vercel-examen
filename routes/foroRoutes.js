import express from "express";
import jwt from "jsonwebtoken";
import { createForo, listForos, getForo, updateForo, deleteForo} from "../controllers/foroController.js";
const router = express.Router();

const autenticarJWT = async (req, res, next) => {
    var jwtToken = req.cookies.jwt;

    if (!jwtToken){
        return res.status(401).json({message: "Error de JWT"});
    }

    try {
        var tokenDecode = jwt.verify(jwtToken, "skillnest");
        req.user = tokenDecode; // Guardar datos del usuario en req
    } catch {
        return res.status(401).json({message: "Error de JWT por catch"});
    }

    next();
}

//crear foro
router.post("/", autenticarJWT, createForo);

//listar foros
router.get("/", autenticarJWT, listForos);


//detalle foro
router.get("/:id", autenticarJWT, getForo);

//actualizar foro
router.patch("/:id", autenticarJWT, updateForo);

//eliminar foro
router.delete("/:id", autenticarJWT, deleteForo);



export default router;