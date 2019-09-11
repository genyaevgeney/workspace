const router = require("./Router.js");
const userController = require("../controllers/UserController.js");
const userRouter = router.getRouter();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});

userRouter.get("/donate", userController.getDonatePageHtml);
userRouter.get("/:page", userController.getMainPageHtml);
userRouter.get("/public/css/Dashboard.css", userController.getMainPageCss);
userRouter.get("/public/css/ToDonatePage.css", userController.getDonatePageCss);
userRouter.get("/public/css/Error.css", userController.getErrorPageCss);
userRouter.post("/donate", urlencodedParser, userController.receivingDonationData);
userRouter.get("/", userController.redirectToMainPage);
userRouter.get("*", userController.getErrorPage);

module.exports = userRouter;
