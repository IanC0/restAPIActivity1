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

exports.hashUpdatedPass = async (req, res, next) => {
    try {
        req.body.newPass = await bcrypt.hash(req.body.pass, 8);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
};

exports.hashPassCheck = async (req, res, next) => {
    try {
        let tempVar = await User.find({username: req.body.username});  
     
        let hashPassTest = await bcrypt.compare(req.body.pass, tempVar[0].pass);
        console.log(hashPassTest)
        hashPassTest ? next() : res.status(500).send("password incorrect");
        
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

exports.newEmailCheck = async (req, res, next) => {
    try {
        /.+\@.+\..+/.test(req.body.newEmail) ? 
            next() :
            res.status(500).send("new email not valid")
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}