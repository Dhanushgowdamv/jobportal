import cookieParser from "cookie-parser";
import express, { application } from "express";
import cors from "cors"
import dotenv from "dotenv";
import connectdb from "./utils/db.js";
import router from "./routs/user.route.js";
import companyRouter from "./routs/company.route.js";
import jobRouter from "./routs/job.route.js"
import applications from "./routs/application.route.js"
const app = express();
dotenv.config();

app.get("/home",(req,res)=>{
    return res.status(200).json({
        mesaage:" i am from vbackend",
        success:true
    })
})

//middlewaare
//of the mongo db
// password:5Gt5fI9TM1t9MzlG
// user name:dhanushvenu199
//connection:mongodb+srv://dhanushvenu199:<db_password>@cluster0.3espc.mongodb.net/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions={
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));


const PORT = process.env.PORT || 8000;
//api's

app.use("/api/v1/user",router);
app.use("/api/v1/company",companyRouter);
app.use("/api/v1/job",jobRouter);
app.use("api/v1/application",applications)
app.listen(PORT,()=>{
    connectdb();
    console.log(`server is running at ${PORT}`)
})
