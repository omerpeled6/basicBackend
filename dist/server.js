import express from "express";
import mongoose from "mongoose";
import counterRoutes from "./routes/counterRoutes";
import cors from "cors";
const MONGOURI = "mongodb+srv://opeled6:Omerpeled1@cluster0.8v7wgmo.mongodb.net/";
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World omer mogno db");
});
app.get("/test", (req, res) => {
    res.json({ message: "Hello World3" });
});
app.use("/counter", counterRoutes);
mongoose
    .connect(MONGOURI, { dbName: "demo_db" })
    .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log("Connected to db & listening on port", PORT);
    });
})
    .catch((error) => {
    console.error("Database connection error:", error);
});
export default app;
//# sourceMappingURL=server.js.map