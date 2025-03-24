import { Request, Response } from "express";
import Agent from "../models/agentModel";

export const createAgent = async (req: Request, res: Response): Promise<void> => {
  const { name, email, mobile } = req.body;
  console.log(' name, email, mobile--------------------------',  name, email, mobile)

  if (!name || !email || !mobile) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }

  try {
    const agentExists = await Agent.findOne({ email });
    if (agentExists) {
      res.status(400).json({ message: "Agent already exists" });
      return;
    }

    const agent = await Agent.create({ name, email, mobile });
    res.status(201).json({ message: "Agent created successfully", agent });
  } catch (error) {
    res.status(500).json({ message: error instanceof Error ? error.message : "Error occurred" });
  }
};



export const getAgents = async (req: Request, res: Response): Promise<void> => {
  try {
    const agents = await Agent.find();
    res.status(200).json(agents);
  } catch (error) {
    res.status(500).json({ message: error instanceof Error ? error.message : "Error occurred" });
  }
};



