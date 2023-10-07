import express from 'express';
import connectDB from "./db/connectDB.js";
import web from './routes/web.js';
const app = express();
const port = process.env.PORT || '3300'
const  DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/";

connectDB(DATABASE_URL);

//API JSON Middleware
app.use(express.json());

//Load routed
app.use("/student", web);

app.listen(port, () =>{
    console.log(`Server is listening at ${port}`)
})