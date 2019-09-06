const routerModule = require('router');
const router = routerModule();

exports.getRouter = () => {
	return router;
}

const userRouter = require("./UserRouter.js");

exports.enableRouting = () => {
	router.use("/",userRouter);
}
