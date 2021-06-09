var express = require("express")
var router = express.Router()
const UserController = require("../../controllers/Users")
const auth = require("../../middlewares/jwt")

router.post("/auth/register", UserController.register)
router.post("/auth/login", UserController.login)

router.get("/me", auth, UserController.profile)

module.exports = router