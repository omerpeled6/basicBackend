import express from "express";
import mongoose from "mongoose";
import counterRoutes from "./routes/counterRoutes";
import cors from "cors";

const MONGOURI =
  "mongodb+srv://opeled6:Omerpeled1@cluster0.8v7wgmo.mongodb.net/";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Counter API"));
app.use("/counter", counterRoutes);

mongoose
  .connect(MONGOURI, { dbName: "demo_db" })
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(console.error);

export default app;
