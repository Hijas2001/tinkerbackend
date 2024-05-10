const express = require('express');
const cors = require('cors');

const path = require("path")

const connectDB = require('./databaseconnection/databaseconnection');

const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json())

app.use(express.static("database"))

// Serving uploaded images statically
app.use('/images', express.static('uploads/images'));
app.use("/",require("./routs/routs"))
connectDB()


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
