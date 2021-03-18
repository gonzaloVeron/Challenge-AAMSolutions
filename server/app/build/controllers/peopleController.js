"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("../Person"));
class PeopleController {
    everybody(req, res) {
        let everybody = Person_1.default.find((err, everybody) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send(everybody);
            }
        });
    }
    getPerson(req, res) {
        Person_1.default.findById(req.params.id, (err, pers) => {
            if (err) {
                res.send(err);
            }
            else {
                console.log(pers);
                res.send(pers);
            }
        });
    }
    ;
    create(req, res) {
        let person = new Person_1.default(req.body);
        person.save((err) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send(person);
            }
        });
    }
    delete(req, res) {
        Person_1.default.deleteOne({ _id: req.params.id }).then((person) => {
            res.send({ text: "Successfully deleted person" });
        })
            .catch((err) => {
            res.send(err);
        });
    }
    update(req, res) {
        Person_1.default.findByIdAndUpdate(req.params.id, req.body).then((person) => {
            res.send(person);
        })
            .catch((err) => {
            res.send(err);
        });
    }
}
const peopleController = new PeopleController();
exports.default = peopleController;
