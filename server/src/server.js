import "dotenv/config";
import express from "express";
import cors from "cors";
import tasksRoutes from "./tasks.routes.js";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/api/tasks", tasksRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
