const { Schema, model, models } = require('mongoose');

const TypeOfVehicle = require("./TypeOfVehicle");


const cars = new Schema(
        {
        licensePlate:{
            type: String,
            required: true,
            unique: true,
            minLength: 6,
            maxLength: 8
        },
        brands:{
            type: String,
            required: true,
            unique: true,
            minLength: 3,
            maxLength: 15
        },
        image:{
            type: [String],
            required: true
        },
        typeOfVehicle:{
            type: Schema.Types.ObjectId,
            ref:"TypeOfVehicle",
            required: true,
        },
        status:{
            type: Boolean,
            default: true
        },
        price:{
            type: Number,
            required: true,
        },
        description:{
            type: String,
            required: true,
            minLength: 5,
            maxLength: 2500
        },
        fuelConsumption:{
            type: String,
            required: true
        },
        location:{
            type: String,
            required: true
        },
        colour:{
            type: String,
            required: true
        },
        discount:{
            type: Number,
            required: false
        },
        doors:{
            type: String,
            required: true
        },
        active:{
            type: Boolean,
            default: true,
            required: true
        },
    },
    {
        timestamps: true
    })


    
module.exports = models["Cars"] || model("Cars", cars);