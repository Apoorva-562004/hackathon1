const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const trafficRoutes = require('./routes/trafficRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', trafficRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/traffic-management-system', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch(err => {
    console.error('Failed to connect to MongoDB', err);
});
