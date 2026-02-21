import { Schema, model } from "mongoose";

const teacherSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        uniqued: true
    },
    phone: {
        type: String,
        required: true
    },
    specialty: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true}
})

teacherSchema.virtual('group', {
    ref: 'Group',
    localField: '_id',
    foreignField: 'teacherId'
})

export default model('Teacher', teacherSchema);