const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  count: { type: Number, required: true, default: 0 },
});

const Counter =
  mongoose.models.Counter || mongoose.model("Counter", counterSchema);
const MONGOURI =
  "mongodb+srv://opeled6:Omerpeled1@cluster0.8v7wgmo.mongodb.net/";

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(MONGOURI, { dbName: "demo_db" });
    }

    const url = req.url;

    if (req.method === "GET" && url === "/") {
      return res.json({ message: "Hello World omer mogno db" });
    }

    if (req.method === "GET" && url === "/test") {
      return res.json({ message: "Hello World3" });
    }

    if (req.method === "GET" && url === "/counter") {
      const counter =
        (await Counter.findOne()) || (await Counter.create({ count: 0 }));
      return res.json({ counter });
    }

    if (req.method === "POST" && url === "/counter/update") {
      const { count } = req.body;
      const counter = await Counter.findOneAndUpdate(
        {},
        { count },
        { new: true, upsert: true }
      );
      return res.json({ counter });
    }

    res.status(404).json({ error: "Not found" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
