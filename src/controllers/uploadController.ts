import { Request, Response } from "express";
import XLSX from "xlsx";
import Agent from "../models/agentModel";
import Task from "../models/taskModel";

interface CSVRow {
  FirstName: string;
  Phone: string;
  Notes?: string;
}

export const uploadFile = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ message: "No file uploaded" });
      return;
    }

    const buffer = req.file.buffer;
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    console.log('sheetName-----------', sheetName)
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]) as CSVRow[];

    if (!Array.isArray(data) || data.length === 0) {
      res.status(400).json({ message: "Invalid or empty file" });
      return;
    }

    for (const item of data) {
      if (!item.FirstName || !item.Phone) {
        res.status(400).json({ message: "Missing required fields (FirstName, Phone)" });
        return;
      }
    }

    const agents = await Agent.find();
    if (agents.length < 5) {
      res.status(400).json({ message: "At least 5 agents are required for task distribution" });
      return;
    }

    const tasks = data.map((item, index) => ({
      firstName: item.FirstName,
      phone: item.Phone,
      notes: item.Notes || "",
      agentId: agents[index % 5]._id,
    }));

    await Task.insertMany(tasks);

    res.status(200).json({ message: "File uploaded and tasks distributed successfully" });
  } catch (error) {
    res.status(500).json({ message: error instanceof Error ? error.message : "Error occurred" });
  }
};