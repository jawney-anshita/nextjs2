import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
// import styles from '../styles/Home.module.css';
import styles from '../../styles/Home.module.css';
import { Container } from '@mui/material';
import QuiltedImageList from '../../components/PropertyListing/PropertyDetails/QuiltedImageList';
import ContentDetails from '../../components/PropertyListing/PropertyDetails/ContentDetail';
import QueryForm from '../../components/BuyRent/QueryForm';
import { useState } from 'react';

const Product = ({product})=>{

  const [clientname, setClientname] = useState(" ");
  const [clientphone, setClientphone] = useState(" ");

  const onChangeClientName=(data1)=>{
    setClientname(data1);
  } 

const onChangePhone =(data2)=>{
  setClientphone(data2);
}

const fullname=product.fullname; 
const phone=product.phone; 
const bedrooms=product.bedrooms; 
const propertyType=product.propertyType; 
const category=product.category;
const availability=product.availability;
const location=product.location;
const washrooms=product.washrooms;
const balconies=product.balconies;
const age=product.age;
const dimensions=product.balconies;
const furnishing=product.furnishing;
const openParking=product.openParking;
const coverParking=product.coverParking;
const pricing=product.pricing;
const priceunit=product.priceunit;
const propertyVisibility=false;




  const sendpurchaseQuery = async()=>{
    let data = await fetch("http://localhost:3000/api/buyqueries",{
      method: "POST",
      body: JSON.stringify({clientname,clientphone,fullname,phone,location,propertyType,category,dimensions,age,availability,bedrooms,washrooms,balconies,furnishing,openParking,coverParking,pricing,priceunit,propertyVisibility})
    });

    // data = await data.json();
    if(data.success){
      alert("Property Added Successfully");
    }
  }

  console.log(clientname,clientphone,fullname,phone,)
    return(
        <div>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Container>
            <Box sx={{ flexGrow: 1 , mt: 5}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <QuiltedImageList></QuiltedImageList>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ContentDetails 
                        firstheading={product.bedrooms} 
                        secondheading={product.propertyType} 
                        thirdheading={product.category}
                        availability={product.availability}
                        location={product.location}
                        washrooms={product.washrooms}
                        balconies={product.balconies}
                        age={product.age}
                        dimensions={product.dimensions}
                        furnishing={product.furnishing}
                        openParking={product.openParking}
                        coverParking={product.coverParking}
                        pricing={product.pricing}
                        priceunit={product.priceunit}
                        ></ContentDetails>
                        <QueryForm onChangeClientName={onChangeClientName} onChangePhone={onChangePhone} sendpurchaseQuery={sendpurchaseQuery}></QueryForm>
                    </Grid>
                    <Grid item xs={12}>
                       
                    </Grid>
                    {/* <Grid item xs={8}>
                        xs=8
                    </Grid> */}
                </Grid>
            </Box>
            </Container>
            {/* <h1>{product.fullname}</h1> */}

            <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
            </div>
    )
}


export async function getServerSideProps({params:{id}}) {
    const res = await fetch(`http://localhost:3000/api/product/${id}`)
    const data = await res.json()
    return {
        props: {product:data},
    }
}

export default Product