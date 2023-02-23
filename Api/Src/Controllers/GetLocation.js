const Cars= require("../Models/Cars");


//funcion en la que busco location
const routerLocation= async (location) => {
    
    try {
        const carsLocation = await Cars.find()
        let pais=(carsLocation?.filter((el) => (el.location.toLowerCase().includes(location.toLowerCase()))))
        return pais
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = { routerLocation };
