import { Router } from "express";
import teacherController from './teacher.route.js';
import coursController from './cours.route.js';
import groupController from './group.route.js';
import studentController from './student.route.js';
import paymentController from './payment.route.js';

const router = Router();

router
    .use('/teacher', teacherController)
    .use('/cours', coursController)
    .use('/group', groupController)
    .use('/student', studentController)
    .use('/payment', paymentController)


export default router;
