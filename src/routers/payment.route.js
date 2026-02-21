import { Router } from "express";
import controller from '../controllers/payment.controller.js';
import { validate } from "../middleware/validate.js";
import payment from '../validation/payment.validation.js';

const router = Router();

router
    .post('/', validate(payment.create), controller.create)
    .get('/', controller.findAll)
    .get('/:id', controller.findById)
    .patch('/:id', validate(payment.update), controller.update)
    .delete('/:id', controller.remove)

export default router;