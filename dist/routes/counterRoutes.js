"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const counterModel_1 = __importDefault(require("../models/counterModel"));
const router = express_1.default.Router();
router.get("/", async (req, res) => {
    const counter = (await counterModel_1.default.findOne()) || (await counterModel_1.default.create({ count: 0 }));
    res.json({ counter });
});
router.post("/update", async (req, res) => {
    const { count } = req.body;
    const counter = await counterModel_1.default.findOneAndUpdate({}, { count }, { new: true, upsert: true });
    res.json({ counter });
});
exports.default = router;
//# sourceMappingURL=counterRoutes.js.map