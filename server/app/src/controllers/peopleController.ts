import { Request, Response } from 'express';

import Person from '../Person';

class PeopleController {

    public everybody (req: Request, res: Response) {
        let everybody = Person.find((err: any, everybody: any) => {
            if(err){
                res.send(err);
            }else{
                res.send(everybody);
            }
        })
    }

    public getPerson (req: Request, res: Response) {
        Person.findById(req.params.id, (err: any, pers: any) => {
          if (err) {
            res.send(err);
          } else {
            console.log(pers);
            res.send(pers);
          }
        });
    };

    public create (req: Request, res: Response) {
        let person = new Person(req.body);
        person.save((err: any) => {
            if(err){
                res.send(err);
            }else{
                res.send(person);
            }
        })
    }

    public delete (req: Request, res: Response) { 
        Person.deleteOne({ _id: req.params.id }).then((person) => {
            res.send({text: "Successfully deleted person"})
        })
        .catch((err) => {
            res.send(err);
        });
    }

    public update (req: Request, res: Response) {
        Person.findByIdAndUpdate(req.params.id, req.body).then((person) => {
            res.send(person)
        })
        .catch((err) => {
            res.send(err);
        });
    }
}

const peopleController = new PeopleController();
export default peopleController;