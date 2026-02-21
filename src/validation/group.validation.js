import Joi from "joi";

class GroupValidation{
    create() {
        return Joi.object({
            name: Joi.string().required(),
            coursId: Joi.string().required(),
            teacherId: Joi.string().required(),
            startDate: Joi.string().optional(),
            isActive: Joi.boolean().optional()
        })
    }
    update() {
        return Joi.object({
            name: Joi.string().optional(),
            coursId: Joi.string().optional(),
            teacherId: Joi.string().optional(),
            startDate: Joi.string().optional(),
            isActive: Joi.boolean().optional()            
        })
    }
}

export default new GroupValidation();