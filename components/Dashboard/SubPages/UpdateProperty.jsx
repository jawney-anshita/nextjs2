import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Chip, Divider } from '@mui/material';
import { useState } from 'react';

import PropertyVisibility from '../../Update/PropertyVisibility';
import PropertyPricing from '../../Update/PropertyPricing';
import PropertyDimensions from '../../Update/PropertyDimensions';
import PropertyAge from '../../Update/PropertyAge';
import PropertyAvailability from '../../Update/PropertyAvailability';
import RoomDetails from '../../Update/RoomDetails';
import FurnishingDetails from '../../Update/FurnishingDetails';
import ParkingDetails from '../../Update/ParkingDetails';
import Button from '@mui/material/Button';
import FullName from '../../Update/FullName';
import ContactNumber from '../../Update/ContactNumber';
import Email from '../../Update/Email';
import PropertyLocation from '../../Update/PropertyLocation';
import PropertyType from '../../Update/PropertyType';
import PropertyCategory from '../../Update/PropertyCategory';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function UpdateProperty(props) {
    const [propertyVisibility, setPropertyVisibility] = useState(false);
    const [sellerfullname, setSellerFullname] = useState((props.fullname));
    const [sellerphone, setSellerPhone] = useState((props.phone));
    const [selleremail, setSellerEmail] = useState((props.email));
    const [sellerlocation, setSellerLocation] = useState((props.location));
    const [sellerpropertyType, SetSellerPropertyType] = useState((props.propertyType));
    const [sellercategory, setSellerCategory] = useState(props.category);
    const [sellerdimensions, setSellerDimensions] = useState("");
    const [sellerpropertyage, SetSellerPropertyAge] = useState("");
    const [selleravailability, setSellerAvailability] = useState("");
    const [sellerbedrooms, setSellerBedrooms] = useState("");
    const [sellerwashrooms, SetSellerWashrooms] = useState("");
    const [sellerbalconies, setSellerBalconies] = useState("");
    const [sellerfurnishing, setSellerFurnishing] = useState("");
    const [selleropenParking, SetSellerOpenParking] = useState("");
    const [sellercoverParking, setSellerCoverParking] = useState("");
    const [sellerpricing, setSellerPricing] = useState("");
    const [sellerpriceunit, setSellerpriceUnit] = useState("");


  
    const onChangeName=(data1)=>{
        setSellerFullname(data1);
      } 
    
     

    const onChangePhone=(data2)=>{
        setSellerPhone(data2);
    }

    const onChangeEmail=(data3)=>{
        setSellerEmail(data3);
    }

    const onChangeLocation=(data4)=>{
        setSellerLocation(data4);
      } 

    const onChangePropertyType=(data5)=>{
        SetSellerPropertyType(data5);
    }

    const onChangeCategory=(data6)=>{
        setSellerCategory(data6);
    }

    const onChangeDimensions=(data7)=>{
        setSellerDimensions(data7);
      } 

    const onChangeAge=(data8)=>{
        SetSellerPropertyAge(data8);
    }

    const onChangeAvailability=(data9)=>{
        setSellerAvailability(data9);
    }

    const onChangeBedrooms=(data10)=>{
        setSellerBedrooms(data10);
      } 

    const onChangeWashrooms=(data11)=>{
        SetSellerWashrooms(data11);
    }

    const onChangeBalconies=(data12)=>{
        setSellerBalconies(data12);
    }

    const onChangeFurnishing=(data13)=>{
        setSellerFurnishing(data13);
      } 

    const onChangeOpen=(data14)=>{
        SetSellerOpenParking(data14);
    }

    const onChangeCover=(data15)=>{
        setSellerCoverParking(data15);
    }

    const onChangePricing=(data16)=>{
        setSellerPricing(data16);
    }

    const onChangeUnit=(data17)=>{
        setSellerpriceUnit(data17);
    }

    const onChangeVisibility=(data0)=>{
        setPropertyVisibility(data0);
    }


    const fullname = sellerfullname!="" ? sellerfullname : props.fullname;
    const phone = sellerphone!="" ? sellerphone : props.phone;
    const email = selleremail!="" ? selleremail : props.email;
    const location = sellerlocation!="" ? sellerlocation : props.location;
    const propertyType = sellerpropertyType!="" ? sellerpropertyType : props.propertyType;
    const category = sellercategory!="" ? sellercategory : props.category;
    const dimensions = sellerdimensions!="" ? sellerdimensions : props.dimensions;
    const age = sellerpropertyage!="" ? sellerpropertyage : props.age;
    const availability = selleravailability!="" ? selleravailability : props.availability;
    const bedrooms = sellerbedrooms!="" ? sellerbedrooms : props.bedrooms;
    const washrooms = sellerwashrooms!="" ? sellerwashrooms : props.washrooms;
    const balconies = sellerbalconies!="" ? sellerbalconies : props.balconies;
    const furnishing = sellerfurnishing!="" ? sellerfurnishing : props.furnishing;
    const openParking = selleropenParking!="" ? selleropenParking : props.openParking;
    const coverParking = sellercoverParking!="" ? sellercoverParking : props.coverParking;
    const pricing = sellerpricing!="" ? sellerpricing : props.pricing;
    const priceunit = sellerpriceunit!="" ? sellerpriceunit : props.priceunit;



    console.log("Fetching Props Data : ", props.fullname, props.phone)


    console.log("Outside Fetching data : ", fullname,phone,email,location,propertyType,category,dimensions,age,availability,bedrooms,washrooms,balconies,furnishing,openParking,coverParking,pricing,priceunit,propertyVisibility);
    
    const updateProperty = async()=>{
        let propertyID = props.propertyid; 
        let data = await fetch("/api/products/" +propertyID,{
          method: "PUT",
          body: JSON.stringify({fullname,phone,email,location,propertyType,category,dimensions,age,availability,bedrooms,washrooms,balconies,furnishing,openParking,coverParking,pricing,priceunit,propertyVisibility})
        });
        console.log("Product ID is", propertyID  )
        // data = await data.json();
        if(data){
          alert("Property Updated Successfully");
        }
      }
 
    return (
        <Box sx={{ flexGrow: 1 }}>
          
            <Grid sx={{ my: 5 }} container spacing={5}>
            {props.visibilityChekbox && (<Grid item xs={12} md={12}>
            <Typography  sx={{ px: 1}} variant="h6" noWrap component="div">
            Check the box if want to make property live: <PropertyVisibility onChangeVisibility={onChangeVisibility}></PropertyVisibility>
          </Typography>
            </Grid>)}
                <Grid item xs={12} md={4}>
                    <FullName  fullname={props.fullname} onChangeName={onChangeName} ></FullName>
                </Grid>
                <Grid item xs={12} md={4}>
                    <ContactNumber  phone={props.phone}  onChangePhone={onChangePhone}></ContactNumber>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Email  email={props.email} onChangeEmail={onChangeEmail}></Email>
                </Grid>
            <   Grid item xs={12} md={12}>
                    <Divider>
                        <Chip label="Property Details" />
                    </Divider>
                </Grid>
                <Grid item xs={12} md={4}>
                    <PropertyLocation onChangeLocation={onChangeLocation} fullwidth></PropertyLocation>
                </Grid>
                <Grid item xs={12} md={4}>
                    <PropertyType onChangePropertyType={onChangePropertyType}></PropertyType>
                </Grid>
                <Grid item xs={12} md={4}>
                    <PropertyCategory onChangeCategory={onChangeCategory}></PropertyCategory>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Divider>
                        <Chip label="Required Property Details" />
                    </Divider>
                </Grid>
                <Grid item xs={12} md={4}>
                   <PropertyDimensions onChangeDimensions={onChangeDimensions} fullWidth></PropertyDimensions>
                </Grid>
                <Grid item xs={12} md={4}>
                    <PropertyAge onChangeAge={onChangeAge} ></PropertyAge>
                </Grid>
                <Grid item xs={12} md={4}>
                    <PropertyAvailability onChangeAvailability={onChangeAvailability}></PropertyAvailability>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Divider>
                        <Chip label="Room Details" />
                    </Divider>
                </Grid>
                <Grid item xs={12} md={12}>
                    <RoomDetails onChangeBedrooms={onChangeBedrooms} onChangeWashrooms={onChangeWashrooms} onChangeBalconies={onChangeBalconies}></RoomDetails>
                </Grid>
                
                <Grid item xs={12} md={12}>
                    <Divider>
                        <Chip label="Parking Details" />
                    </Divider>
                </Grid>
                <Grid item xs={12} md={12}>
                    <ParkingDetails onChangeCover={onChangeCover} onChangeOpen={onChangeOpen}></ParkingDetails>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Divider>
                        <Chip label="Pricing & Furnishing Details" />
                    </Divider>
                </Grid>
                <Grid item xs={12} md={4}>
                   <PropertyPricing onChangePricing={onChangePricing} onChangeUnit={onChangeUnit}  fullWidth></PropertyPricing>
                </Grid>
                <Grid item xs={12} md={8}>
                    <FurnishingDetails onChangeFurnishing={onChangeFurnishing}></FurnishingDetails>
                </Grid>
               
                <Grid item xs={12} md={12}>
                    <Button variant="contained" onClick={updateProperty}  >Submit</Button>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Button variant="contained"  >Back to Sellers List</Button>
                </Grid>
            </Grid>
        </Box>
    );

    
}

