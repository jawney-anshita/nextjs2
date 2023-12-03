"use client"

// import { useRouter } from "next/navigation";
import { useRouter } from 'next/router';
import DeleteIcon from '@mui/icons-material/Delete';
import { blue, red } from '@mui/material/colors';

export default function DeleteProduct(props){
   const router = useRouter();
    const deleteRecord = async()=>{
        let response = await fetch("/api/products/"+props.id,{
            method: "delete"
        });
        response = await response.json();
        if(response){
            alert("Are you sure you want to delete this product")
            // router.push("/dashboard/sellerdetails")
            router.reload();
        }
    }

    return<DeleteIcon  onClick={deleteRecord} style={{ color: red }} />
}