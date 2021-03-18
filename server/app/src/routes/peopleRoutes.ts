import { Router } from 'express';

import peopleController from '../controllers/peopleController';

class PeopleRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/:id', peopleController.getPerson);
        this.router.get('/', peopleController.everybody);
        this.router.post('/', peopleController.create);
        this.router.put('/:id', peopleController.update);
        this.router.delete('/:id', peopleController.delete);
    }
}

const peopleRoutes = new PeopleRoutes();
export default peopleRoutes.router;