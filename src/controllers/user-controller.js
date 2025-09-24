const User = require('../services/user-service');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

async function createUser(req,res){
    try {
        const user = User.createUser(req.body.data);
        return user;
    } catch (error) {
        console.log("Something went wrong in the city-controller ");
    }
}

async function deleteUser(req,res){
    try {
        const user = User.deleteUser(req.body.id);
        return user;
    } catch (error) {
        console.log("Something went wrong in the city-controller ");
    }
}

module.exports = {
    createUser,
    deleteUser
}
