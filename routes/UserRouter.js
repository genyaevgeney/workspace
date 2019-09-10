const router = require("./Router.js");
const userController = require("../controllers/UserController.js");
const userRouter = router.getRouter();

userRouter.get("/donate", userController.toDonate);
userRouter.get("/", userController.getStatistic);
userRouter.get("/public/css/Dashboard.css", userController.getMainPageCss);
userRouter.get("/public/css/ToDonatePage.css", userController.getDonatePageCss);

module.exports = userRouter;
