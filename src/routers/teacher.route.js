import { Router } from "express";
import controller from '../controllers/teacher.controller.js';
import { validate } from "../middleware/validate.js";
import teacher from '../validation/teacher.validation.js';

const router = Router();

router
    .post('/', validate(teacher.create), controller.create)
    .get('/', controller.findAll)
    .get('/:id', controller.findById)
    .patch('/:id', validate(teacher.update), controller.update)
    .delete('/:id', controller.remove)


export default router;
