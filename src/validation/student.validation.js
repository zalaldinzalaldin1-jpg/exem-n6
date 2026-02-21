import Joi from "joi";

class StudentValidation{
    create() {
        return Joi.object({
            fullName: Joi.string().required(),
            phone: Joi.string().required(),
            age: Joi.number().required(),
            groupId: Joi.string().required(),
            createdAt: Joi.string().optional()
        })
    }
    update() {
        return Joi.object({
            fullName: Joi.string().optional(),
            phone: Joi.string().optional(),
            age: Joi.number().optional(),
            groupId: Joi.string().optional(),
            createAt: Joi.string().optional()
        })
    }
}

export default new StudentValidation();