import { Request, Response } from "express";
import Task from "../models/taskModel";
import Agent from "../models/agentModel";

export const getTasksByAgent = async (req: Request, res: Response) => {
  try {
    const agents = await Agent.find();
    const tasksByAgent = await Promise.all(
      agents.map(async (agent) => {
        const tasks = await Task.find({ agentId: agent._id });
        return {
          agent,
          tasks,
        };
      })
    );

    res.status(200).json(tasksByAgent);
  } catch (error) {
    res.status(500).json({ message: error instanceof Error ? error.message : "Error occurred" });
  }
};