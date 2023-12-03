import mongoose from "mongoose";

const productModel= new mongoose.Schema({
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

export const Product = mongoose.models.products || mongoose.model("products", productModel);