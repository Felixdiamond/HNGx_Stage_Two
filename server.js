const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDb = require("./config/dbConnection");

dotenv.config();

connectDb();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/api", require("./routes/personRouter"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});