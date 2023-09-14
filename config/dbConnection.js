const mongoose = require("mongoose");
const Person = require('../models/personModel');  // Import your Person model

connectDb = async () => {
    try {
        const connection = await mongoose.connect("mongodb+srv://v14usdiamond:j5oIQtayPPu5aI1Q@cluster0.buxkcxz.mongodb.net/?retryWrites=true&w=majority");
        console.log("Database connected successfully!", connection.connection.host, connection.connection.name);

        // Drop the unique index on the email field
        Person.collection.dropIndex('email_1', function(err, result) {
            if (err) {
                console.log('Error in dropping index!', err);
            }
        });

        // Add the unique index on the email field back
        Person.collection.createIndex({ email: 1 }, { unique: true, sparse: true }, function(err, result) {
            if (err) {
                console.log('Error in creating index!', err);
            }
        });

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDb;
