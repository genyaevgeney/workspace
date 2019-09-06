const router = require("./Router.js");
const userController = require("../controllers/UserController.js");
const userRouter = router.getRouter();

userRouter.get("/donate", userController.toDonate);
userRouter.get("/", userController.getStatistic);

module.exports = userRouter;
