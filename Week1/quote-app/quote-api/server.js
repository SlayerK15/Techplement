const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const quoteRoutes = require('./routes/quotes');

// Create an Express app
const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB URI and Port
const MONGO_URI = 'mongodb://localhost:27017/quote-api';
const PORT = 5000;

// Log the MongoDB URI
console.log("MongoDB URI:", MONGO_URI);

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000,  // Timeout to prevent connection issues
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Register API routes
app.use('/api/quotes', quoteRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
