import Teacher from '../schemas/teacher.schema.js';
import { BaseController } from './base.controller.js';
import { ApiError } from '../utils/custom-error.js';
import { successRes } from '../utils/success-response.js';
import { errorRes } from '../utils/error-response.js';

class TeacherController extends BaseController{
    constructor(){
        super(Teacher)
    }
    createTeacher = async(req, res) => {
        try {
            const existTeacher = await Teacher.findOne({ fullName: req.body?.fullName });
            if (existTeacher) {
                throw new ApiError('this teacher alredy exist', 409)
            }
            const data = await Teacher.create(req.body)
            return successRes(res, data, 201)
        } catch (error) {
            errorRes(res, error)
        }
    }
    updateTeacher = async(req, res) => {
        try {
            const id = req.params?.id;
            await this.chekById(id);
            const { fullName } = req.body;
            if (fullName) {
                const existTeacher = await Teacher.findOne({ name });
                if (existTeacher && id !== existTeacher._id) {
                    throw new ApiError('this group alredy exist', 409)
                }
            }
            const data = await Group.findByIdAndUpdate(id, req.body, { new: true });
            return successRes(res, data)
        } catch (error) {
            errorRes(res, error)
        }
    }
}

export default new TeacherController();