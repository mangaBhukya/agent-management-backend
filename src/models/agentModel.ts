import mongoose, { Schema, Document } from "mongoose";
import { IAgent } from "../types/agentTypes";

interface IAgentDocument extends IAgent, Document {}

const agentSchema = new Schema<IAgentDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IAgentDocument>("Agent", agentSchema);
