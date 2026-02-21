import { ApiError } from '../utils/custom-error.js';
import { errorRes } from '../utils/error-response.js';
import { successRes } from '../utils/success-response.js';
import { isValidObjectId } from 'mongoose';

export class BaseController{
    constructor(model, relation){
        this.model = model,
        this.relation = relation
    }

    create = async(req, res) => {
        try {
            const data = await this.model.create(req.body);
            return successRes(res, data, 201);
        } catch (error) {
            errorRes(res, error)
        }
    }
    findAll = async(req, res) => {
        try {
            let options = {};
            if (req.query) {
                options = req.query
            }
            const datas = await this.model.find(options).populate(this.relation);
            return successRes(res, datas)
        } catch (error) {
            errorRes(res, error)
        }
    }
    findById = async(req, res) => {
        try {
            const data = await this.chekById(req.params?.id);
            return successRes(res, data);
        } catch (error) {
            errorRes(res, error)
        }
    }
    update = async(req, res) => {
        try {
            const id = req.params?.id;
            await this.chekById(id)
            const data = await this.model.findByIdAndUpdate(id, req.body, { new: true });
            return successRes(res, data)
        } catch (error) {
            errorRes(res, error)
        }
    }
    remove = async(req, res) => {
        try {
            const id = req.params?.id;
            await this.chekById(id)
            const data = await this.model.findByIdAndDelete(id);
            return successRes(res, {})
        } catch (error) {
            errorRes(res, error)
        }       
    }
    chekById = async(id) => {
        if (!isValidObjectId(id)) {
            throw new ApiError('Invalid Id', 400)
        }
        const data = await this.model.findById(id);
        if (!data) {
            throw new ApiError('not found', 404)
        }
        return data;
    }
}
