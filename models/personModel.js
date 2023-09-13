const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
});

module.exports = mongoose.model('Person', PersonSchema);
