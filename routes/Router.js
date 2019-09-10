const routerModule = require('router');
const router = routerModule();
const bodyParser = require("body-parser");

exports.getRouter = () => {
	return router;
}

const userRouter = require("./UserRouter.js");

exports.enableRouting = () => {
	router.use(bodyParser.urlencoded({ extended: false }));
	router.use("/",userRouter);
}
