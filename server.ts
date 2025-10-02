import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World omer");
});

app.get("/test", (req: Request, res: Response) => {
  res.json({ message: "Hello World3" });
});

const PORT: number = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
