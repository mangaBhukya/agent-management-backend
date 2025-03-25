import express from "express";
import { getTasksByAgent } from "../controllers/taskController";

const router = express.Router();
router.get("/", getTasksByAgent);

export default router;