require('dotenv').config();
const express = require('express');
const cors = require('cors'); 
const { connect } = require('./src/database/mongo.database');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: process.env.FRONTEND_URL
  }));

app.use('/notes', require('./src/routes/note.route'));
app.use('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Notes API' });
});

// Connect to MongoDB
connect();

// Start the server
app.listen(PORT, () => console.log(`🚀 Server started at port:${PORT}`));
