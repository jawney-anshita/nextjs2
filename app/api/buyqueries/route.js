import {NextResponse} from "next/server";
import mongoose from "mongoose";
import { connectionSrt } from "../../../src/lib/db";
import { BuyQuery } from "../../../src/lib/model/buyquery";
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
       data = await BuyQuery.find();
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
    let buyquery = new BuyQuery(payload);
    const result = await buyquery.save();
    // return NextResponse.json({result, success:true})
    return NextResponse.json({
        "fullname":"True Trial 18-11",
          "phone":9595959595,
          "email":"dear@gmail.com",
          "location":"Dear",
          "propertyType":"Residential",
          "category":"Plot",
          "dimensions":500,
          "age":50,
          "availability":"Ready To Move",
          "bedrooms":"5",
          "washrooms":"1",
          "balconies":"3",
          "furnishing":"Semi Furnished",
          "openParking":"1",
          "coverParking":"1",
          "pricing": "1.5",
          "priceunit" : "Crore",
          "propertyVisibility": true
      })
}