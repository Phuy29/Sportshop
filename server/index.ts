import express from "express";
import { adminRoutes } from "./routes/admin";

const app = express();

app.use(express.json());

//Routes
app.use("/admin", adminRoutes);

const server = app.listen(8080, () =>
  console.log(`
🚀 Server ready at: http://localhost:8080`)
);
