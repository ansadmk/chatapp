const { profile } = require("../Controllers/user");
const userJwtAuthentication = require("../middleware/userJwtAuthentication");
const userRouter = require("express").Router();
userRouter.get("/profile", userJwtAuthentication,profile)
module.exports = userRouter;
