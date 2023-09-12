const mongoose = require("mongoose");


connectDb = async () => {
    try {
       const connection = await mongoose.connect("mongodb+srv://v14usdiamond:j5oIQtayPPu5aI1Q@cluster0.buxkcxz.mongodb.net/?retryWrites=true&w=majority");
       console.log("Database connected successfully!", connection.connection.host, connection.connection.name);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDb;