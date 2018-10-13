var mongoose = require('mongoose');


var Product = mongoose.model('Product', {
    Artist: {
        type: String,
        required: true,
        minlength: 1        
    },
    Album: {
        type: String,
        required: true,
        minlength: 1
    },
    Cover_Art: {
        type: String,
        required: true,
        minlength: 1
    },
    Release_Year:  {
        type: Number,
        required: true,
        minlength: 4,
        maxlength: 4
    },
    Record_Label: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    Price: {
        type: Number,
        required: true,
        minlength: 4,
        trim: true
    },
    Spotify_URI: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {Product};