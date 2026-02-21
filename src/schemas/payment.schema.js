import { Schema, Types, model } from "mongoose";

const paymentSchema = new Schema({
    studentId: {type: Types.ObjectId, ref: 'Student' },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now() }
}, {
    versionKey: false,
    timestamps: true
})

export default model('Payment', paymentSchema);