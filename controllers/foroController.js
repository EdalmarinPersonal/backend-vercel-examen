import Foro from "../models/foroModel.js";
import jwt from "jsonwebtoken";

//crear foro
export const createForo = async (req, res) => {
    try {
        //usuario jwt
        const jwtToken = req.cookies.jwt;

        if (!jwtToken) {
            return res.status(401).json({ message: "Token de sesión no encontrado" });
        }

        const tokenDecode = jwt.verify(jwtToken, "skillnest");

        const newForo = new Foro({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            createdby: tokenDecode.id //usar id del usuario
        });

        const foroCreated = await newForo.save();
        return res.status(201).json(foroCreated);
    } catch (error) {
        console.error("Error en createForo:", error);
        return res.status(400).json({
            message: error.message
        });
    }
}

//listado de foros
export const listForos = async (req, res) => {
    try {
        const foros = await Foro.find();
        return res.status(200).json(foros);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

//detalle de foro
export const getForo = async (req, res) => {
    try {
        const foro = await Foro.findById(req.params.id).populate('createdby', 'firstName lastName email');
        if (!foro) {
            return res.status(404).json({ message: "Foro no encontrado" });
        }
        return res.status(200).json(foro);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};

//actualizar foro
export const updateForo = async (req, res) => {
    try {
        const foroUpdated = await Foro.findByIdAndUpdate(
            req.params.id,
            req.body,
            {   new: true,
                runValidators: true
            }
        );
        if (!foroUpdated) {
            return res.status(404).json({ message: "Foro no encontrado" });
        }
        return res.json(foroUpdated);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};

//eliminar foro
export const deleteForo = async (req, res) => {
    try {
        const foroDeleted = await Foro.findByIdAndDelete(req.params.id);
        if (!foroDeleted) {
            return res.status(404).json({ message: "Foro no encontrado" });
        }
        return res.status(200).json({ message: "Foro eliminado correctamente" });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};




