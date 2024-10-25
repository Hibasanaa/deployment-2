require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Use the environment variable for MongoDB URI
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
