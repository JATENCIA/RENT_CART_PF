const { Schema, model, models } = require('mongoose');


const accessories = new Schema(
        {
        name:{
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        image:{
            type: [String],
            required: true
        },
        description:{
            type: String,
            required: true,
            minLength: 5,
            maxLength:2500,
        },
        status:{
            type: String,
            required: true,
            default: true
        },
        discount:{
            type: Number,
            required: false,
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


    
module.exports = models["Accessories"] || model("Accessories", accessories);