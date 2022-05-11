const { Router } = require("express");
const { addUser, listUsers, updateUser, deleteUser } = require("./userControllers");
const { hashPass, hashCheck } = require("../middleware");
const userRouter = Router();


userRouter.post("/user", hashPass, addUser);
userRouter.get("/user", listUsers);
userRouter.put("/user", updateUser);
userRouter.delete("/user", deleteUser);
module.exports = userRouter;