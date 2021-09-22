const db = require('../../db/models/index');
const Vehicule = db['Vehicule'];

const getAllVehicules = async (req, res) => {
    try {
        const vehicules = await Vehicule.findAll();

        res.status(200).json(vehicules);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = getAllVehicules;