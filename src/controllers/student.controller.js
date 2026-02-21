import Student from '../schemas/student.schema.js';
import { BaseController } from './base.controller.js';
import { ApiError } from '../utils/custom-error.js';
import { errorRes } from '../utils/error-response.js';
import { successRes } from '../utils/success-response.js';

class StudentController extends BaseController{
    constructor() {
        super(Student)
    }
    createStudent = async(req, res) => {
        try {
            const existStudent = await Student.findOne({ fullName: req.body?.fullName });
            if (existStudent) {
                throw new ApiError('this student alredy exist', 409)
            }
            const data = await Student.create(req.body)
            return successRes(res, data, 201)
        } catch (error) {
            errorRes(res, error)
        }
    }
    updateStudent = async(req, res) => {
        try {
            const id = req.params?.id;
            await this.chekById(id);
            const { fullName } = req.body;
            if (fullName) {
                const existStudent = await Student.findOne({ name });
                if (existStudent && id !== existStudent._id) {
                    throw new ApiError('this student alredy exist', 409)
                }
            }
            const data = await Student.findByIdAndUpdate(id, req.body, { new: true });
            return successRes(res, data)
        } catch (error) {
            errorRes(res, error)
        }
    }
}

export default new StudentController();