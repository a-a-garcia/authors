const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true , "Name is required"],
        minlength: [3, "Name must be at least 3 characters"],
        maxlength: [50, "Name must be less than 50 characters"]
    },
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
