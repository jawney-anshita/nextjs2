import {useRouter} from "next/router";
import { useState,useEffect } from 'react';

export default function PropertyInfo() {
    const [product, setProduct] = useState([]);

    const router = useRouter();
    const {propertyid} = router.query; 
    console.log("routerid", propertyid)
    console.log("router", router)

    useEffect(async ()=>{
        let data = await fetch(`http://localhost:3000/api/products/${propertyid}`)
        data = await data.json();
        const result = data;
        console.log(result);
        console.log("cheking if its array or object",  Array.isArray(result))
        console.log("type of object", typeof result)
        setProduct(result);

        console.log("result", product)
        // setRecords(result);
      },[])

    return<div>

    </div>
}