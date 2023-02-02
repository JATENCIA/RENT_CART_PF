const { Schema, model, models } = require('mongoose');


const typeOfVehicle = new Schema(
        {
        category:{
            type: String,
            required: true,
        },
        fuelType:{
            type: String,
            required: true
        },
        typeOfBox:{
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    })


    
module.exports = models["TypeOfVehicle"] || model("TypeOfVehicle", typeOfVehicle);