const router = require('router');
const userController = require("../controllers/userController.js");
const userRouter = router();

userRouter.get("/donate", userController.toDonate);
userRouter.get("/", userController.getStatistic);
 
module.exports = userRouter;