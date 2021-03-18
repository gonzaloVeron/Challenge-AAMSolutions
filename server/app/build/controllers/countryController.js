"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Country_1 = __importDefault(require("../Country"));
class CountryController {
    getAll(req, res) {
        let allCountries = Country_1.default.find((err, everybody) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send(allCountries);
            }
        });
    }
    findByName(nameToFind) {
        Country_1.default.find({ name: nameToFind }).then((country) => {
            return country;
        })
            .catch((err) => {
            return null;
        });
    }
    createOrIncrement(req, res) {
        let countryFound = this.findByName(req.params.name);
        console.log(countryFound);
        if (countryFound != null) {
            /*
            Country.findByIdAndUpdate(req.params.id, countryFound).then((country) => {
                res.send(country)
            })
            .catch((err) => {
                res.send(err);
            });*/
        }
        else {
            let country = new Country_1.default({ name: req.params.name, amount: 1 });
            country.save((err) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send(country);
                }
            });
        }
    }
}
const countryController = new CountryController();
exports.default = countryController;
