const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const errorhandler = require("./middleware/errorhandler");
const userRouter = require('./routes/userRouter');
const categoryRouter = require('./routes/categoryRouter');
const transactionRouter = require('./routes/transactionRouter');
const port =3000;
const app= express();

mongoose.connect("mongodb+srv://user1:pass1....")
.then(()=> console.log("DB_CONNECTED"))
.catch((e)=> console.log((e)))

app.use(cors({origin:["http://localhost:5173"]}))
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Welcome to BudgetWise API");
});
app.use("/api/v1/users",userRouter);
app.use("/api/v1/categories",categoryRouter);
app.use("/api/v1/transactions",transactionRouter);

app.use(errorhandler);


app.listen(port,()=>{
    console.log(`The server is running on ${port}`)
})
