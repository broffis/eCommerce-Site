var mongoose = require('mongoose');


var Product = mongoose.model('Product', {
    bandName: {
        type: String,
        required: true,
        minlength: 1        
    },
    albumTitle: {
        type: String,
        required: true,
        minlength: 1
    },
    cover: {
        type: String,
        required: true,
        minlength: 1
    },
    releaseYear:  {
        type: Number,
        required: true,
        minlength: 4,
        maxlength: 4
    },
    recordLabel: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        minlength: 4,
        trim: true
    }
});

module.exports = {Product};