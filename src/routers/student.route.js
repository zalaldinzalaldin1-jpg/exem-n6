import { Router } from "express";
import controller from '../controllers/student.controller.js';
import { validate } from "../middleware/validate.js";
import student from '../validation/student.validation.js';

const router = Router();

router
    .post('/', validate(student.create), controller.create)
    .get('/', controller.findAll)
    .get('/:id', controller.findById)
    .patch('/:id', validate(student.update), controller.update)
    .delete('/:id', controller.remove)

export default router;