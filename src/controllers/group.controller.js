import Group from '../schemas/group.schema.js';
import { ApiError } from '../utils/custom-error.js';
import { errorRes } from '../utils/error-response.js';
import { successRes } from '../utils/success-response.js';
import { BaseController } from './base.controller.js';

class GroupController extends BaseController{
    constructor(){
        super(Group)
    }

    createGroup = async(req, res) => {
        try {
            const existGroup = await Group.findOne({ name: req.body?.name });
            if (existGroup) {
                throw new ApiError('this group alredy exist', 409)
            }
            const data = await Group.create(req.body)
            return successRes(res, data, 201)
        } catch (error) {
            errorRes(res, error)
        }
    }
    updateGroup = async(req, res) => {
        try {
            const id = req.params?.id;
            await this.chekById(id);
            const { name } = req.body;
            if (name) {
                const existGroup = await Group.findOne({ name });
                if (existGroup && id !== existGroup._id) {
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

export default new GroupController();