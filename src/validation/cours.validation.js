import Joi from "joi";

class CoursValidation{
    create() {
        return Joi.object({
            title: Joi.string().required(),
            price: Joi.number().required(),
            duration: Joi.number().required()
        })
    }
    update() {
        return Joi.object({
            title: Joi.string().optional(),
            price: Joi.number().optional(),
            duration: Joi.number().optional()
        })
    }
}

export default new CoursValidation();