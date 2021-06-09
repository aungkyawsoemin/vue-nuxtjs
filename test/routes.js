const { chai, server, should } = require("./testConfig")

describe("Basic Routes", () => {
	describe("Request Home page url", () => {
		it("It should return 200 status code", (done) => {
			chai.request(server)
				.get("/")
				.end((err, res) => {
					res.should.have.status(200)
					done()
				})
		})
	})

	describe("Request not exist route", () => {
		it("It should return 404 status code", (done) => {
			chai.request(server)
				.get("/page-101")
				.end((err, res) => {
					res.should.have.status(404)
					done()
				})
		})
	})

	describe("Request private url", () => {
		it("It should return UnauthorizedError", (done) => {
			chai.request(server)
				.get("/api/me")
				.end((err, res) => {
					res.should.have.status(401)
					done()
				})
		})
	})
})