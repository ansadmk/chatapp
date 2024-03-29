const { register, login, anonymousRegister } = require("../Controllers/auth");

const router = require("express").Router();
router.post("/register", register);
router.post("/login", login);
router.post("/anonymous", anonymousRegister);


module.exports = router;
