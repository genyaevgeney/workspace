exports.toDonate = (req, res) => {
	res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end("Сделать пожертвование");
};

exports.getStatistic = (req, res) => {
	res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end("Получить статистику");
};