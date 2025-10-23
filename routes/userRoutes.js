import express from "express";
import { listUsers, createUser, deleteUser, updateUser, searchUsers, getOneUser, register,login } from "../controllers/userController.js";

const router = express.Router();

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
}

router.get("/", listUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

router.get("/search", searchUsers);
router.get("/:id", getOneUser);

router.post("/register",register);

router.post("/login",login);




export default router;