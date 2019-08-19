var mongoose = require('mongoose');

var Form = mongoose.model('Form', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    street: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    zipCode: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    },
    country: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    }
});

module.exports = {Form};