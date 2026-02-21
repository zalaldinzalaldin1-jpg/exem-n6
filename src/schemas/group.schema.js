import { Schema, Types, model, now } from "mongoose";

const groupSchema = new Schema({
    name: { type: String, required: true, unique: true },
    coursId: { type: Types.ObjectId, ref: 'Cours' },
    teacherId: { type: Types.ObjectId, ref: 'Teacher' },
    startDate: { type: Date, default: Date.now() },
    isActive: { type: Boolean, default: true }
}, {
    versionKey: false,
    timestamps: true,
    toJSON: { vertuals: true },
    toObject: { vertuals: true }
})

groupSchema.virtual('student', {
    ref: 'Student',
    localField: '_id',
    foreignField: 'groupId'
})

export default model('Group', groupSchema);