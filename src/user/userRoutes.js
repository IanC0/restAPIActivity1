const { Router } = require("express");
const { addUser, listUsers, updateUser, deleteUser } = require("./userControllers");
const { hashPass, hashUpdatedPass, hashPassCheck, emailCheck, newEmailCheck } = require("../middleware");
const userRouter = Router();


userRouter.post("/user", emailCheck, hashPass, addUser);
userRouter.get("/user", hashPassCheck, listUsers);
userRouter.put("/user",  hashUpdatedPass, hashPassCheck, newEmailCheck, updateUser);
userRouter.delete("/user", hashPassCheck, deleteUser);
module.exports = userRouter;

//