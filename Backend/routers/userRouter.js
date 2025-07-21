const express = require("express")
const userController = require("../controllers/usersCtrl");
const isAuth =require("../middleware/isAuth")
const userRouter = express.Router();


userRouter.post("/register",userController.register);
userRouter.post("/login",userController.login);


userRouter.get("/profile",isAuth,userController.profile);
 
userRouter.put("/change_password",isAuth,userController.changeUserPassword);
userRouter.put("/update_profile",isAuth,userController.updateUserProfile);









module.exports= userRouter;
