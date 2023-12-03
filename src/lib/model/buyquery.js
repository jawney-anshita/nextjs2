import mongoose from "mongoose";

const buyqueryModel= new mongoose.Schema({
    clientname:String,
    clientphone:Number,
    fullname:String,
    phone:Number,
    email:String,
    location:String,
    propertyType:String,
    category:String,
    dimensions:Number,
    age:Number,
    availability:String,
    bedrooms:String,
    washrooms:String,
    balconies:String,
    furnishing:String,
    openParking:String,
    coverParking:String,
    pricing:Number,
    priceunit:String,
    propertyVisibility:Boolean
    
});

export const BuyQuery = mongoose.models.buyquery || mongoose.model("buyquery", buyqueryModel);