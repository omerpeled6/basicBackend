import express, { Request, Response } from "express";
import mongoose from "mongoose";
// import counterRoutes from "./routes/counterRoutes";
import cors from "cors";

const MONGOURI =
  "mongodb+srv://opeled6:Omerpeled1@cluster0.8v7wgmo.mongodb.net/";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World omer mogno db");
});

app.get("/test", (req: Request, res: Response) => {
  res.json({ message: "Hello World3" });
});

const PORT: number = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// app.use("/counter", counterRoutes);

// Connect to MongoDB
mongoose
  .connect(MONGOURI, { dbName: "demo_db" })
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(
        "Connected to db & listening on port",
        process.env.PORT || 3000
      );
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
