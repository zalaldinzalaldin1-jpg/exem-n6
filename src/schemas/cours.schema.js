import { Schema, model } from "mongoose";

const coursSchema = new Schema({
    title: {type: String, unique: true,  required: true},
    price: {type: Number, required: true},
    duration: {type: Number, required: true}
}, {
    versionKey: false,
    timeseries: true,
    toJSON: { vertuals: true },
    toObject: { vertuals: true }
})

coursSchema.virtual('group', {
    ref: 'Group',
    localField: '_id',
    foreignField: 'coursId'
})


export default model('Cours', coursSchema);