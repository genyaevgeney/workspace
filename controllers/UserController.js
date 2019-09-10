const User = require("../models/User.js");
const fs = require('fs');
const ejs = require('ejs');

const pathMainPageHtml = "./views/Dashboard.ejs";
const pathMainPageCss = "./public/css/Dashboard.css";
const pathDonatePageHtml = "./views/ToDonatePage.ejs";
const pathDonatePageCss = "./public/css/ToDonatePage.css";

let serveFile = (fPath, req, res, obj) => {
	const filePath = fPath;
	ejs.renderFile(filePath, obj, (err, data) => {

		if(err){
			res.statusCode = 404;
			res.end("Resourse not found!");
			console.log(err);
		}   
		else{
			// User.getAll();
			res.end(data);
		}
	});
}

exports.toDonate = (req, res) => serveFile(pathDonatePageHtml, req, res, {});
exports.getDonatePageCss = (req,res) => serveFile(pathDonatePageCss, req, res, {});
exports.getStatistic = (req, res) => serveFile(pathMainPageHtml, req, res, {test: "EJS"});
exports.getMainPageCss = (req,res) => serveFile(pathMainPageCss, req, res, {});
