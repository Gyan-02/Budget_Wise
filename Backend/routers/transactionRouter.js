const express = require ("express")
const isAuth = require("../middleware/isAuth")
const transactionController = require("../controllers/transactionCtrl")


const transactionRouter = express.Router();

transactionRouter.post("/create",isAuth,transactionController.create);
transactionRouter.get("/lists",isAuth,transactionController.getFilteredTransactions);
transactionRouter.put("/update/:id",isAuth,transactionController.update);
transactionRouter.delete("/delete/:id",isAuth,transactionController.delete);

module.exports = transactionRouter;
