import Student from '../schemas/student.schema.js';
import { BaseController } from './base.controller.js';

class StudentController extends BaseController{
    constructor() {
        super(Student)
    }
}

export default new StudentController();