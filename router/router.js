const express = require("express")
const router = express.Router()

const {home,register,login,service,userData} = require("../controller/route-controller")
const jwtVarification = require("../middleware/jwtVarify")

router.route("/").get(home)
router.route("/register").post(register)
router.route("/login").post(login)
router.route("/service").get(service)
router.route("/userData").get(jwtVarification,userData)
module.exports = router