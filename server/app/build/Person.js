"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonSchema = void 0;
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
exports.PersonSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    birthday: { type: Date, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    country: { type: String, required: true }
});
const Person = mongoose_1.default.model("Person", exports.PersonSchema);
exports.default = Person;
