const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true, // This ensures that no two people can have the same email
        sparse: true  // This allows multiple people to have a null email
    }
});

module.exports = mongoose.model('Person', PersonSchema);
