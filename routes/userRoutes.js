import express from "express";
import { listUsers, createUser, deleteUser, updateUser, searchUsers, getOneUser, register,login, logoutForo} from "../controllers/userController.js";
import jwt from "jsonwebtoken";
const router = express.Router();
/*
const middleware = (req, res, next) => {
    try {
        console.log("Middleware ejecutado!");
        if(1 != 1){
            next();
        } else {
            return res.status(401).json({error: "Hubo error en la autenticacion"});
        }
    } catch (error) {
        return res.status(401).json({error: "Hubo error en la autenticacion"});
    }
}*/
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

/*router.get("/", listUsers);
router.post("/",autenticarJWT, createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

router.get("/search", searchUsers);
router.get("/me", autenticarJWT, getCurrentUserForo);
router.get("/:id", getOneUser);

router.post("/register",register);

router.post("/login",login);*/
router.get("/", listUsers);
router.post("/",autenticarJWT, createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

router.get("/search", searchUsers);
router.post("/register",register);
router.post("/login",login);
router.post("/logout", logoutForo); 
router.get("/:id", getOneUser);
//logout foro
router.post("/logout", autenticarJWT, logoutForo);





export default router;