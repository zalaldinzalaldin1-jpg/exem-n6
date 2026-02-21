import Joi from "joi";

class PaymentValidation{
    create() {
        return Joi.object({
            studentId: Joi.string().required(),
            amount: Joi.number().required(),
            date: Joi.string().optional()
        })
    }
    update() {
        return Joi.object({
            studentId: Joi.string().optional(),
            amount: Joi.number().optional(),
            date: Joi.string().optional()
        })
    }
}

export default new PaymentValidation();