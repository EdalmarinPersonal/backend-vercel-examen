import express from "express";
import { listDestinations,createDestinations,updateDestinations, getOneDestinations } from "../controllers/destinationController.js";
import jwt from "jsonwebtoken";
const router = express.Router();

const autenticarJWT = async (req, res, next) => {
    var jwtToken = req.cookies.jwt;

    if (!jwtToken){
        return res.status(401).json({message: "Error de JWT"});
    }

    try {
        var tokenDecode = jwt.verify(jwtToken, "skillnest");
    } catch {
        return res.status(401).json({message: "Error de JWT por catch"});
    }

    next();
}

router.get("/", autenticarJWT,listDestinations);
router.post("/",autenticarJWT, createDestinations);
router.put("/:id",autenticarJWT, updateDestinations);
/*router.delete("/:id", deleteDestinations);*/
router.get("/:id", getOneDestinations);


export default router;