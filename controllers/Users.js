const UserModel = require("../models/UserModel")
const { body, validationResult } = require("express-validator")
const apiResponse = require("../helpers/apiResponse")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const mailer = require("../helpers/mailer")
const { constants } = require("../helpers/constants")
const utility = require("../helpers/utility")

exports.profile = [
	body("id").escape(),
	(req, res) => {
		return apiResponse.successResponseWithData(res, "profile data", req.user)
	}
]

exports.register = [
	body("firstName").isLength({ min: 1 }).trim().withMessage("First name must be specified.").isAlphanumeric().withMessage("First name has non-alphanumeric characters."),
	body("lastName").isLength({ min: 1 }).trim().withMessage("Last name must be specified.").isAlphanumeric().withMessage("Last name has non-alphanumeric characters."),
	body("email").isLength({ min: 1 }).trim().withMessage("Email must be specified.").isEmail().withMessage("Email must be a valid email address."),
	body("firstName").escape(),
	body("lastName").escape(),
	body("email").escape(),
	body("password").escape(),
	(req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return apiResponse.validationErrorWithData(res, "Validation Error.", errors.array())
		}
		bcrypt.hash(req.body.password, 10, function(err, hash) {
			let otp = utility.randomNumber(4)
			var user = new UserModel(
				{
					firstName: req.body.firstName,
					lastName: req.body.lastName,
					email: req.body.email,
					password: hash,
					confirmOTP: otp,
					isConfirmed: true, // todo:: for demo
				}
			)
			let html = "<p>Please Confirm your Account.</p><p>OTP: "+otp+"</p>"
			// mailer.send(
			//     constants.confirmEmails.from, 
			//     req.body.email,
			//     'Confirm Account',
			//     html
			// ).then(function(){
			//     user.save(function (err) {
			//         if (err) { return apiResponse.ErrorResponse(res, err) }
			//         let userData = {
			//             _id: user._id,
			//             firstName: user.firstName,
			//             lastName: user.lastName,
			//             email: user.email
			//         }
			//         return apiResponse.successResponseWithData(res, 'Registration Success.', userData)
			//     })
			// }).catch(err => {
			//     console.log(err)
			//     return apiResponse.ErrorResponse(res,err)
			// }) 

			user.save(function (err) {
				if (err) { return apiResponse.ErrorResponse(res, err) }
				let userData = {
					_id: user._id,
					firstName: user.firstName,
					lastName: user.lastName,
					email: user.email
				}
				return apiResponse.successResponseWithData(res, "Registration Success.", userData)
			})
		}) // bash function
	}
]

exports.login = [
	body("email").escape(),
	body("password").escape(),
	(req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return apiResponse.validationErrorWithData(res, "Validation Error.", errors.array())
		}

		UserModel.findOne({email : req.body.email}).then(user => {
			if(!user) {
				return apiResponse.unauthorizedResponse(res, "Invalid email.")
			}
			bcrypt.compare(req.body.password,user.password, function (err, same) {
				if(!same) {
					return apiResponse.unauthorizedResponse(res, "Incorrect password")
				}
				if(!user.isConfirmed){
					return apiResponse.unauthorizedResponse(res, "Account is not confirmed")
				}
				if(!user.status) {
					return apiResponse.unauthorizedResponse(res, "Account is not active")
				}
                
				let userData = {
					_id: user._id,
					firstName: user.firstName,
					lastName: user.lastName,
					email: user.email,
				}
				//Prepare JWT token for authentication
				const jwtPayload = userData
				const jwtData = {
					expiresIn: process.env.JWT_TIMEOUT_DURATION,
				}
				const secret = process.env.JWT_SECRET
				//Generated JWT token with Payload and secret.
				userData.token = jwt.sign(jwtPayload, secret, jwtData)
				return apiResponse.successResponseWithData(res,"Login Success.", userData)
			})
		})
	}
]