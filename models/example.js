const { Schema, model } = require('mongoose');

const exampleSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    read: {
        type: Boolean,
        default: false
    }
});

module.exports = model('Example', exampleSchema);