"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var PORT = 3000 || process.env.PORT;
var index_1 = __importDefault(require("./routes/index"));
app.use('/api', index_1.default);
app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});
