"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountrySchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const uri = 'mongodb://127.0.0.1:27017/local';
mongoose_1.default.connect(uri, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successfully Connected!");
    }
});
exports.CountrySchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true }
});
const Country = mongoose_1.default.model("Person", exports.CountrySchema);
exports.default = Country;
