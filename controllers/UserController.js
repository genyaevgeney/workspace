exports.toDonate = (req, res) => {
	res.setHeader('Content-Type', 'text/plain; charset=utf-8')
	res.end("To donate");
};

exports.getStatistic = (req, res) => {
	res.setHeader('Content-Type', 'text/plain; charset=utf-8')
	res.end("Get information");
};
