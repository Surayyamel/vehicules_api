require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const vehiculeRoutes = require('./routes/vehicules');

// Routes
app.use(vehiculeRoutes);

app.listen(PORT, () => {
    console.log(`Server up on port ${PORT}`);
});