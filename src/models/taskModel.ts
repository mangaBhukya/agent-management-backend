import mongoose, { Schema, Document } from "mongoose";

export interface ITask extends Document {
  firstName: string;
  phone: string;
  notes: string;
  agentId: mongoose.Schema.Types.ObjectId;
}

const taskSchema = new Schema<ITask>(
  {
    firstName: { type: String, required: true },
    phone: { type: String, required: true },
    notes: { type: String },
    agentId: { type: Schema.Types.ObjectId, ref: "Agent", required: true },
  },
  { timestamps: true }
);

export default mongoose.model<ITask>("Task", taskSchema);