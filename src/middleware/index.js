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

// exports.hashCheck = async (req, res, next) => {
//     try {
//         let userTemp = await User.find({where: {username: req.body.username}});
//         console.log(userTemp)
//         if (await bcrypt.hash(req.body.pass, 8) == userTemp.pass) {
//         res.status(200).send("authentication passed!")
//         next();
//         } 
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({ error: error.message })
//     }
// }