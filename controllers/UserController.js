const Donation = require("../models/Donation.js");
const fs = require('fs');
const ejs = require('ejs');
const donation = new Donation();

const pathMainPageHtml = "./views/Dashboard.ejs";
const pathMainPageCss = "./public/css/Dashboard.css";
const pathDonatePageHtml = "./views/ToDonatePage.ejs";
const pathDonatePageCss = "./public/css/ToDonatePage.css";
const pathErrorPage = "./views/Error.ejs";
const pathErrorPageCss = "./public/css/Error.css";

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

let redirectToMainPage = (req, res) => {
	res.writeHead(301, { "Location": "http://" + req.headers['host'] + '/1' });
	res.end();
}

exports.redirectToMainPage = redirectToMainPage;

let getErrorPage = (req, res) => {
	serveFile(pathErrorPage, req, res);
}

exports.getErrorPage = getErrorPage;

exports.getMainPageHtml = (req, res) => {
	let perPage = 10;
	let page = req.params.page || 1;

	if(page < 1) {
		getErrorPage(req, res);
	} else {
		donation.getNumOfPages(perPage).then(pages => {
			donation.getMaxAmount().then(maxAmount => {
				donation.getAmountForThisMonth().then(amountForThisMonth => {
					donation.getTopDonator(maxAmount).then(topDonator => {
						donation.sumAmount().then(amount => {
							donation.selectDataForPage(perPage, page).then(donations => {
								let currentPage = Number(req.params.page);
								if(isNaN(currentPage) || currentPage > pages) {
									getErrorPage(req, res);
								} else {
									serveFile(pathMainPageHtml, req, res, {
										donations: donations,
										current: page,
										pages: pages,
										maxAmount: maxAmount,
										topDonator: topDonator,
										amount: amount,
										amountForThisMonth: amountForThisMonth
									});
								}
							});
						});
					});
				});
			});
		});
	}
}

exports.getDonatePageHtml = (req, res) => serveFile(pathDonatePageHtml, req, res);
exports.getDonatePageCss = (req,res) => serveFile(pathDonatePageCss, req, res);
exports.getMainPageCss = (req,res) => serveFile(pathMainPageCss, req, res);
exports.getErrorPageCss = (req,res) => serveFile(pathErrorPageCss, req, res);
exports.receivingDonationData = (req, res) => {

	const donationInfo = [
	{
		volunteer_name: req.body.name,
		email: req.body.email,
		amount: req.body.amount,
		message: req.body.message,
		date: new Date()
	},
	];

	donation.insertData(donationInfo);
	redirectToMainPage(req, res);
}
