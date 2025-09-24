const User = require('../services/user-service');
const express = require('express');
const app = express();


async function createUser(req,res){
    try {
        const user = await User.createUser({gmail : req.body.gmail, password : req.body.password});
        return res.status(200).json({
            user : user,
            status : true,
            response : "User created succesfully"
        });
    } catch (error) {
        console.log("Something went wrong in the city-controller ");
        return res.status(500).json({
            status: false,
            response: "User not created",
            err : error
        });
    }
}

async function deleteUser(req,res){
    try {
        const user = await User.deleteUser(req.body.id);
        return res.status(200).json({
            user: user,
            status: true,
            response: "User removed succesfully"
        });
    } catch (error) {
        console.log("Something went wrong in the city-controller ");
        return res.status(500).json({
            status: false,
            response: "User not removed",
            err : error
        });
    }
}

module.exports = {
    createUser,
    deleteUser
}
