import express from "express";
import cors from "cors";
import dotenv  from "dotenv";
import mongoose from "mongoose";


dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());




mongoose.connect('mongodb://localhost:27017/agents-mern-app')
.then(()=> console.log('db connected'))
.catch(error => console.error('db connection failed error', error))




app.listen(6000, ()=> console.log("server running"))
