"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/api/v1/message', (req, res) => {
    const message = req.body.message;
    res.json({ message });
});
app.get('/api/v1/message', (req, res) => {
    // const message = req.body.message;
    res.json("hello");
});
app.get('/', (req, res) => {
    res.json("welcome");
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
