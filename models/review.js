const monngoose = require('mongoose');
const { create } = require('./listing');
const Schema = monngoose.Schema;

const reviewSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    comment: String,   
    createdAt: {
        type: Date,
        default: Date.now
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = monngoose.model("Review", reviewSchema);