
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import MediaCard from './MediaCard';
import { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import PricingFilter from '../BuyRent/PricingFilter';
import { Link } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// const getProducts = async()=>{
//   let data = await fetch("http://localhost:3000/api/products");
//   data = await data.json();
//   if(data.success){
//     return data.result;
//   } else{
//     return {success:false}
//   }

// }



export default  function PropertyGrid() {

  // const [search, setSearch] = useState("");
  // const products = [];
  // const products =   getProducts();
  // console.log(products);

  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [unitFilter, setunitFilter] = useState("");


  
  const onChangeUnit=(data17)=>{
    setunitFilter(data17);
}


  const weight = [1,4,3];

useEffect(async ()=>{
  let data = await fetch("/api/products");
  data = await data.json();
  const result = data;
  console.log(result);
  console.log("cheking if its array or object",  Array.isArray(result))
  console.log("type of object", typeof result)
  setProduct(result);
  // setRecords(result);
},[])

  console.log("displaying data:", product)

  const Filter=(event)=>{
    const num = event.target.value;
    console.log("num", num)
    const text = num.toString();
    console.log("text", text)
    setSearch(text)
  }  




  return (
    <Box sx={{ width: '100%', my: 5 }}>
       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>  
       {/* <Grid item xs={12} md={6} lg={4}>
     
        </Grid>  
        <Grid  sx={{marginTop: -2 }} item xs={12} md={12} lg={1}>
            <h3>Pricing</h3>
        </Grid> */}
        {/* <Grid item xs={12} md={12} lg={7}>
          <PricingFilter  onChangeUnit={onChangeUnit} ></PricingFilter>
        </Grid> */}
        </Grid>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>  
      {product.filter((item) => {
          if (item.propertyVisibility === true) 
          return item   
          })
          .map((item) => (<>
            <Grid item xs={12} md={6} lg={4}><MediaCard propertyid={item._id} title={item.bedrooms} category={item.category} location={item.location} price={item.pricing} priceunit={item.priceunit}></MediaCard></Grid>
            
            </>
          )
          )}

      {/* {
          product.map((item) =>  <Grid item xs={12} md={6} lg={4}><MediaCard title={item.bedrooms} category={item.category} location={item.location} price={item.pricing} priceunit={item.priceunit}></MediaCard></Grid>)
        } */}
{/*       
        {
          product.map((e) =>  <Grid item xs={12} md={6} lg={4}> <MediaCard title={e.bedrooms} category={e.category} location={e.location} price={e.pricing}></MediaCard></Grid>)
        } */}

         {
          // product.filter((item)=>{
          //   return search.toLowerCase() === "" ? item : item.location.toLowerCase().includes(search) ;          
          // })

          // product.filter((item)=>{
          //   // return search.toLowerCase() === "" ? item : item.location.toLowerCase().includes(search) ;     
          //   if (search.toLowerCase() === "")     
          //     return item;
          //   else if (item.location.toLowerCase().includes(search) )
          //     return item.location.toLowerCase().includes(search) ;    
          //   else if (item.category.toLowerCase().includes(search) )
          //     return item.category.toLowerCase().includes(search) ;
           
          //   else
          //     return item.bedrooms.toLowerCase().includes(search);
          // })
          // .map((item) =>  <Grid item xs={12} md={6} lg={4}> <MediaCard title={item.bedrooms} category={item.category} location={item.location} price={item.pricing} priceunit={item.priceunit}></MediaCard></Grid>)
        }
      </Grid>
    </Box>
  );
}