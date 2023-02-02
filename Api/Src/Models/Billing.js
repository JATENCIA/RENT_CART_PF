const { Schema, model, models } = require('mongoose');


const billing = new Schema(
        {
        status:{
            type: String,
            required: true

        },
        detail:{
            type: String,
            required: true
        },
        fullValue:{
            type: Number,
            required: true
        },
        discount:{
            type: Number,
            required: false
        },
    },
    {
        timestamps: true
    })


    
module.exports = models["Billing"] || model("Billing", billing);