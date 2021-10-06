const db = require('../../db/models/index');
const Vehicule = db['Vehicule'];

const getAllVehicules = async (req, res) => {
    try {
        const vehicules = await Vehicule.findAll();

        const vehiculesArrayWithString = [];

        for (let i = 0; i < vehicules.length; i++) {
            const vehicule = vehicules[i].toJSON();
            vehicule.string = `${vehicules[i].make}-${vehicules[i].model}`;
            vehiculesArrayWithString.push(vehicule);
        }


        console.log(vehiculesArrayWithString)
        res.status(200).json(vehiculesArrayWithString);
    } catch (error) {
       
        res.status(500).json(error.message);
    }
}

module.exports = getAllVehicules;