import express from "express";
import { adminRoutes } from "./routes/admin";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

//Routes
app.use("/admin", adminRoutes);

const server = app.listen(8080, () =>
  console.log(`
🚀 Server ready at: http://localhost:8080`)
);
