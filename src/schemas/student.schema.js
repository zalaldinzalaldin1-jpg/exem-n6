import { Schema, Types, model } from "mongoose";

const studentSchema = new Schema({
    fullName: { type: String, required: true, unique: true },
    phone: { type: String, require: true },
    age: { type: Number, required: true },
    groupId: { type: Types.ObjectId, ref: 'Group' },
    createdAt: { type: Date, default: Date.now() }
}, {
    versionKey: false,
    timestamps: true,
    toJSON: { vertuals: true },
    toObject: { vertuals: true }
})

studentSchema.virtual('payment', {
    ref: 'Payment',
    localField: '_id',
    foreignField: 'studentId'
})

export default model('Student', studentSchema)