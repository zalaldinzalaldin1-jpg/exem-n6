import { Router } from "express";
import controller from '../controllers/student.controller.js';
import { validate } from "../middleware/validate.js";
import student from '../validation/student.validation.js';

const router = Router();

router
    .post('/', validate(student.create), controller.createStudent)
    .get('/', controller.findAll)
    .get('/:id', controller.findById)
    .patch('/:id', validate(student.update), controller.updateStudent)
    .delete('/:id', controller.remove)

export default router;