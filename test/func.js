const { chai, server, should } = require("./testConfig")
const utility = require("../helpers/utility")

describe("All functions", () => {
	describe("Test Utility func", () => {
		it("It should return 4 digits code", (done) => {
			let digits = utility.randomNumber(20)
			done()
		})
	})
})