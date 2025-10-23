import { faker } from "@faker-js/faker";
import axios from "axios";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const listUsers = async (req, res) => {
    var userList = await User.find({});
    return res.json(userList);
}

export const createUser = async (req, res) => {
    try {
        /*var userCreated = await User.create({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        });*/

        var userCreated = await User.create(req.body);

        return res.status(201).json(userCreated);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

export const updateUser = async (req, res) => {
   try {
        var userUpdate = await User.findByIdAndUpdate(
            req.params.id, 
            /*{
                name: req.body.name,
                age: req.body.edad,
                email: req.body.email
            }*/
            req.body, 
            {
                new: true,
                runValidators: true
            })
        
        return res.json(userUpdate);
   } catch (error) {
        return res.status(400).json({
            message: error.message
        });
   }
}

export const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({});
}

export const getOneUser = async (req, res) => {
    var userFound = await User.findById(req.params.id);
    return res.status(200).json(userFound);
}

export const searchUsers = async (req, res) => {
    /*try {
        var result = await axios.get("https://dummyjsonn.com/users/search?q=tay");
        return res.json(result.data);
    } catch (error) {
        return res.status(500).json({error: "Hubo un error inesperado"});
    }*/

    var usersFound = await User.find(
        { 
            $or: 
                [
                    { name: { $regex: req.query.nameSearch + "$", $options: "i" } },
                    {age: req.query.ageSearch},
                    {"address.city": req.query.citySearch},
                    {hobbies: req.query.hobbieSearch}
                ] 
        }
    );
    return res.status(200).json(usersFound);
}

export const register = async (req, res) => {

    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        var userCreated = await User.create(req.body);

        return res.status(201).json(userCreated);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

/*Login*/
export const login = async (req, res) => {
    var userFound = await User.findOne({email: req.body.email});
    if (!userFound){
        return res.status(200);
    }

    var compared = await  bcrypt.compare(req.body.password, userFound.password);
    if (compared == false) {
        return res.status(200).json({found: false});
    }

    var token = jwt.sign({id: userFound._id , email: userFound.email},"skillnest", { expiresIn: "24h" });
    return res.cookie("jwt", token, 
        {httpOnly: true}).json({found: true});
    //return res.status(200).json({found: true,jwt: token});
}