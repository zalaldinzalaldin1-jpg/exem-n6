import { Router } from "express";
import controller from '../controllers/cours.controller.js';
import { validate } from "../middleware/validate.js";
import cours from '../validation/cours.validation.js';


const router = Router();

router
    .post('/', validate(cours.create), controller.createCours)
    .get('/', controller.findAll)
    .get('/:id', controller.findById)
    .patch('/:id', validate(cours.update), controller.updateCours)
    .delete('/:id', controller.remove)

export default router;