# **Agent Management App - Backend**
This is the backend for the Agent Task Management System built using Node.js, Express.js, TypeScript, and MongoDB. It provides API endpoints for agent management, file upload, and task distribution.

## Features
- Agent Creation
- Upload and Validate CSV, XLSX, or XLS Files
- Distribute Tasks Equally Among Agents
- Save Distributed Tasks to MongoDB
- View Tasks Assigned to Each Agent

## Tech Stack
- Node.js with Express.js
- MongoDB for Data Storage
- TypeScript for Type Safety
- Multer for File Upload
- XLSX for Parsing Excel Files

## Installation and Setup
### Clone the Repository
- git clone https://github.com/mangaBhukya/Task-Manager-Backend.git
- cd backend

### Install Dependencies
- npm install

### Configure Environment Variables
Create a .env file in the root directory and add the following:
- MONGO_URI= your_mongodb_connection_string
- PORT=5000

### Start the Server
- npm run dev

## API Endpoints
### Agent Management
- POST /api/agents → Create a New Agent
- GET /api/agents → Get All Agents

### Task Management
- POST /api/upload → Upload CSV file, Distribute Tasks, and Save to Database
- GET /api/tasks → Get Task List for All Agents

### Example CSV Format
Ensure your CSV file follows this format:

FirstName,Phone,Notes
