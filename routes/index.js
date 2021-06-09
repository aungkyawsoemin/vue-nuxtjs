var express = require("express")
var router = express.Router()
var apiResponse = require("../helpers/apiResponse")

router.get("/", function(req, res) {
	return apiResponse.successResponse(res)
})
module.exports = router