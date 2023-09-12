const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDb = require("./config/dbConnection");

dotenv.config();

const port = process.env.PORT || 3000;

// Serve static files from the "static" directory
app.use(express.static("static"));

app.use(bodyParser.json());

app.use("/api", require("./routes/personRouter"));

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
