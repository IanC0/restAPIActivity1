const bcrypt = require("bcryptjs");
const User = require("../user/userModel");

exports.hashPass = async (req, res, next) => {
    try {
        req.body.pass = await bcrypt.hash(req.body.pass, 8);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
};

exports.hashCheck = async (req, res, next) => {
    try {
        req.body.pass = await bcrypt.hash(req.body.pass, 8);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
}

exports.emailCheck = async (req, res, next) => {
    try {
        /.+\@.+\..+/.test(req.body.email) ? 
            next() :
            res.status(500).send("email not valid")
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}