require('dotenv').config();
const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB Ahnaf');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if connection fails
  }
};

const query = async (model, filter = {}, projection = null) => {
  try {
    const result = await model.find(filter, projection).exec();
    return result;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};

module.exports = {
  connect,
  query,
};