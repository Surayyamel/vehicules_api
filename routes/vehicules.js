const router = require('express').Router();

// Handlers
const getAllVehicules = require('./handlers/getAllVehicules');

router.get('/vehicules', getAllVehicules);

module.exports = router;