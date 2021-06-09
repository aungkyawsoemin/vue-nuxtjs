const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT
var router = express.Router()
var cors = require("cors")
//To allow cross-origin requests
app.use(cors())

const indexRouter = require("./routes/index")
const apiRouter = require("./routes/api/index")
var apiResponse = require("./helpers/apiResponse")

var MONGODB_URL = process.env.MONGODB_URL
const mongoose = require("mongoose")
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	//don't show the log when it is test
	if(process.env.NODE_ENV !== "test") {
		console.log("Connected to %s", MONGODB_URL)
		console.log("App is running ... \n")
		console.log("Press CTRL + C to stop the process. \n")
	}
}).catch(err => {
	console.error("App starting error:", err.message)
	process.exit(1)
})
const db = mongoose.connection

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", indexRouter)
app.use("/api", apiRouter)
app.get("/test", function(req,res) {
	res.send(req.query.email+req.body.email)
})
app.post("/test", function(req,res) {
	res.json(req.query.email+req.body.email)
})

// use the router and 401 anything falling through
// app.use('*', router, function (req, res) {
//     return apiResponse.unauthorizedResponse(res, 'Unauthorized')
// })

// throw 404 if URL not found
app.all("*", function(req, res) {
	return apiResponse.notFoundResponse(res, "Page not founds")
})

app.use(
	function (err, req, res, next) {
		if(err.name == "UnauthorizedError"){
			return apiResponse.unauthorizedResponse(res, err.message)
		}
	})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app