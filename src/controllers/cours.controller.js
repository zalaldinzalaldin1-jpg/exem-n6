import  Cours from '../schemas/cours.schema.js';
import { successRes } from '../utils/success-response.js';
import { errorRes } from '../utils/error-response.js';
import { ApiError } from '../utils/custom-error.js';
import { BaseController } from './base.controller.js';

class CoursController extends BaseController{
    constructor() {
        super(Cours, 'group')
    }

    createCours = async(req, res) => {
        try {
            const existCours = await Cours.findOne({ title: req.body?.title });
            if (existCours) {
                throw new ApiError('this cours alredy exist', 409)
            }
            const data = await Cours.create(req.body)
            return successRes(res, data, 201)
        } catch (error) {
            errorRes(res, error)
        }
    }
    updateCours = async(req, res) => {
        try {
            const id = req.params?.id;
            await this.chekById(id);
            const { title } = req.body;
            if (title) {
                const existCours = await Cours.findOne({ title })
                if (existCours && id !== existCours._id) {
                    throw new ApiError('this cours alredy exist', 409)               
                }
            }
            const data = await Cours.findByIdAndUpdate(id, req.body, { new: true });
            return successRes(res, data)
        } catch (error) {
            errorRes(res, error)
        }
    }
}
export default new CoursController();