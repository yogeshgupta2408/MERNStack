const express=require('express');
const bcrypt=require('bcryptjs');
const userRouter=express.Router();
const usersController=require("../controllers/users-controller");

userRouter.post("/register", usersController.register);
userRouter.post("/signin", usersController.signin);

module.exports=userRouter;