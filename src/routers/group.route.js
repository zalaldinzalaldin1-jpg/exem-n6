import { Router } from "express";
import controller from '../controllers/group.controller.js';
import { validate } from "../middleware/validate.js";
import group from '../validation/group.validation.js';

const router = Router();

router
    .post('/', validate(group.create),  controller.createGroup)
    .get('/', controller.findAll)
    .get('/:id', controller.findById)
    .patch('/:id', validate(group.update), controller.updateGroup)
    .delete('/:id', controller.remove)

export default router;