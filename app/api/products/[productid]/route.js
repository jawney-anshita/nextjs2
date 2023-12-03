import {NextResponse} from "next/server";
import mongoose from "mongoose";
import { connectionSrt} from "../../../../src/lib/db"; 
import { Product } from "../../../../src/lib/model/product";

export async function PUT(request, content){
   
    const productId = content.params.productid;
    const filter = {_id:productId}
    const payload = await request.json();
    console.log(payload);
    await mongoose.connect(connectionSrt)

    const data = await Product.findOneAndUpdate(filter,payload);
    return NextResponse.json(data)
}

export async function GET(request, content){
   
    const productId = content.params.productid;
    const record = {_id:productId}
    console.log(record);
    await mongoose.connect(connectionSrt)

    const data = await Product.findById(record);
    return NextResponse.json(data)
}


export async function DELETE(request,content){
    const productId = content.params.productid;
    const record = {_id:productId}
    await mongoose.connect(connectionSrt)
    const data = await Product.deleteOne(record);
    return NextResponse.json(data)
}