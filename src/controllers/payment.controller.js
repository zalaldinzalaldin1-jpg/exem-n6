import Payment from '../schemas/payment.schema.js';
import { BaseController } from './base.controller.js';

class PaymentController extends BaseController{
    constructor() {
        super(Payment)
    }
}

export default new PaymentController();
