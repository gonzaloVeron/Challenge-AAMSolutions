"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class CountryRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Hello'));
    }
}
const countryRoutes = new CountryRoutes();
exports.default = countryRoutes.router;
