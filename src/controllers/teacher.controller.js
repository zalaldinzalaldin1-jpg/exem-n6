import Teacher from '../schemas/teacher.schema.js';
import { BaseController } from './base.controller.js';

class TeacherController extends BaseController{
    constructor(){
        super(Teacher)
    }
}

export default new TeacherController();