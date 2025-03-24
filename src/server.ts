import express from "express";
import cors from "cors";
import dotenv  from "dotenv";
import mongoose from "mongoose";
import agentRoutes from "./routes/agentRoutes";


dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());




mongoose.connect('mongodb://localhost:27017/agents-mern-app')
.then(()=> console.log('db connected'))
.catch(error => console.error('db connection failed error', error))

app.use("/api/agents", agentRoutes);

const PORT = 5000;
app.listen(PORT, ()=> console.log("server running"));
