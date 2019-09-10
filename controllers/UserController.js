const User = require("../models/User.js");
const fs = require('fs');
const ejs = require('ejs');
const user = new User();

const pathMainPageHtml = "./views/Dashboard.ejs";
const pathMainPageCss = "./public/css/Dashboard.css";
const pathDonatePageHtml = "./views/ToDonatePage.ejs";
const pathDonatePageCss = "./public/css/ToDonatePage.css";

let serveFile = (fPath, req, res, obj = {}) => {
	const filePath = fPath;
	ejs.renderFile(filePath, obj, (err, data) => {

		if(err) {
			res.statusCode = 404;
			res.end("Resourse not found!");
			console.log(err);
		} else {
			res.end(data);
		}
	});
}

exports.getDonatePageHtml = (req, res) => serveFile(pathDonatePageHtml, req, res);
exports.getDonatePageCss = (req,res) => serveFile(pathDonatePageCss, req, res);
exports.getMainPageHtml = (req, res) => serveFile(pathMainPageHtml, req, res, {test: "EJS"});
exports.getMainPageCss = (req,res) => serveFile(pathMainPageCss, req, res);
exports.postDonation = (req, res) => {
	const donationInfo = [
	{
		volunteer_name: req.body.name,
		email: req.body.email,
		amount: req.body.amount,
		message: req.body.message,
		date: new Date()
	},
	]

	user.insertDate(donationInfo);
	res.writeHead(301, { "Location": "http://" + req.headers['host'] + '/' });
	res.end();

}
