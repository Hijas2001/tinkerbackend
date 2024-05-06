const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(cors());

// Define a simple GET route
app.get('/', (req, res) => {
    res.send('Hello World! This is a GET request.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
