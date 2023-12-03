import {NextResponse} from "next/server";
import mongoose from "mongoose";
import { connectionSrt } from "../../../src/lib/db";
import { Product } from "../../../src/lib/model/product";
import { get } from "http";

// export async function GET(){

//     let data = []

//     try {
//         await mongoose.connect(connectionSrt)
//         const data  = await Product.find();
//     } catch (error) {
//         data = {success: false}
//     }

//     return NextResponse.json({result: data, success: true})

// }

export async function GET(){
    let data = [];
    let success = true;
    try {
       await mongoose.connect(connectionSrt);
       data = await Product.find();
    } catch (error) {
        data = {result:"error"}
        success = false
    }
    // return NextResponse.json({result:data,success})
    return NextResponse.json(data)
}



export async function POST(request){
    const payload = await request.json();
    await mongoose.connect(connectionSrt);
    let product = new Product(payload);
    // const result = await product.save();
    const data = await product.save();
    // return NextResponse.json({result, success:true})
    return NextResponse.json(data)
}