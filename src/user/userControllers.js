const res = require("express/lib/response");
const { set } = require("mongoose");
const User = require("./userModel");

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
        const userList = await User.find({});
        res.status(200).send({userList});
    } catch (error) {
        console.log(error);
        res.status(500).send( {error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        await User.updateOne({username: req.body.username}, {
            username: req.body.newUsername,
            email: req.body.newEmail,
            pass: req.body.newPass
        })
        res.status(200).send(await User.find({}) )

    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await User.deleteOne({username: req.body.username})
        res.status(200).send(await User.find({}))
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}