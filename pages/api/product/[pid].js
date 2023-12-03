import { Product } from "../../../src/lib/model/product";

export default async (req,res)=>{
    const {pid} = req.query
        const product = await Product.findOne({_id:pid})

    res.status(200).json(product)
}