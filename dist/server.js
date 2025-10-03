"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const counterRoutes_1 = __importDefault(require("./routes/counterRoutes"));
const cors_1 = __importDefault(require("cors"));
const MONGOURI = "mongodb+srv://opeled6:Omerpeled1@cluster0.8v7wgmo.mongodb.net/";
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => res.send("Counter API"));
app.use("/counter", counterRoutes_1.default);
mongoose_1.default
    .connect(MONGOURI, { dbName: "demo_db" })
    .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
    .catch(console.error);
exports.default = app;
//# sourceMappingURL=server.js.map