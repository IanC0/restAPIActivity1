const res = require("express/lib/response");
const { set } = require("mongoose");
const User = require("./userModel");
const bcryptjs = require("bcryptjs");
const bcrypt = require("bcryptjs/dist/bcrypt");
const { restart } = require("nodemon");

exports.addUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).send(await User.find({}));
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
};

exports.listUsers = async (req,res) => {
    try {
        let tempVar = await User.find({username: req.body.username});
        if (tempVar[0].access == "admin") {        
            res.status(200).send(await User.find({}));
            const userList = await User.find({});
        } else if (tempVar[0].access != "admin") {
            res.status(200).send("only admins can view user's accounts")
        } else {
            res.status(200).send("password incorrect")
        }        
    } catch (error) {
        console.log(error);
        res.status(500).send( {error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        let tempVar = await User.find({username: req.body.username})
        await User.updateOne({username: req.body.username}, {
            username: req.body.newUsername,
            email: req.body.newEmail,
            pass: req.body.newPass
            }) 
            res.status(200).send(await User.find({_id: tempVar[0]._id}))
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
}

   
exports.deleteUser = async (req, res) => {
    try {
        let tempVar = await User.find({username: req.body.username})
        await User.deleteOne({username: req.body.username})        
        res.status(200).send("account deleted")
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}