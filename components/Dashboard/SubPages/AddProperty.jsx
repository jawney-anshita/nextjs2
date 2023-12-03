import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Chip, Divider } from '@mui/material';
import { useState } from 'react';

import PropertyVisibility from '../../Sell/PropertyVisibility';
import PropertyPricing from '../../Sell/PropertyPricing';
import PropertyDimensions from '../../Sell/PropertyDimensions';
import PropertyAge from '../../Sell/PropertyAge';
import PropertyAvailability from '../../Sell/PropertyAvailability';
import RoomDetails from '../../Sell/RoomDetails';
import FurnishingDetails from '../../Sell/FurnishingDetails';
import ParkingDetails from '../../Sell/ParkingDetails';
import Button from '@mui/material/Button';
import FullName from '../../Sell/FullName';
import ContactNumber from '../../Sell/ContactNumber';
import Email from '../../Sell/Email';
import PropertyLocation from '../../Sell/PropertyLocation';
import PropertyType from '../../Sell/PropertyType';
import PropertyCategory from '../../Sell/PropertyCategory';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function AddProperty(props) {
    const [propertyVisibility, setPropertyVisibility] = useState(false);
    const [fullname, setFullname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [propertyType, SetPropertyType] = useState("");
    const [category, setCategory] = useState("");
    const [dimensions, setDimesions] = useState("");
    const [age, SetAge] = useState("");
    const [availability, setAvailability] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [washrooms, SetWashrooms] = useState("");
    const [balconies, setBalconies] = useState("");
    const [furnishing, setFurnishing] = useState("");
    const [openParking, SetOpenParking] = useState("");
    const [coverParking, setCoverParking] = useState("");
    const [pricing, setPricing] = useState("");
    const [priceunit, setpriceUnit] = useState("Lakhs");


  
    const onChangeName=(data1)=>{
        setFullname(data1);
      } 

    const onChangePhone=(data2)=>{
        setPhone(data2);
    }

    const onChangeEmail=(data3)=>{
        setEmail(data3);
    }

    const onChangeLocation=(data4)=>{
        setLocation(data4);
      } 

    const onChangePropertyType=(data5)=>{
        SetPropertyType(data5);
    }

    const onChangeCategory=(data6)=>{
        setCategory(data6);
    }

    const onChangeDimensions=(data7)=>{
        setDimesions(data7);
      } 

    const onChangeAge=(data8)=>{
        SetAge(data8);
    }

    const onChangeAvailability=(data9)=>{
        setAvailability(data9);
    }

    const onChangeBedrooms=(data10)=>{
        setBedrooms(data10);
      } 

    const onChangeWashrooms=(data11)=>{
        SetWashrooms(data11);
    }

    const onChangeBalconies=(data12)=>{
        setBalconies(data12);
    }

    const onChangeFurnishing=(data13)=>{
        setFurnishing(data13);
      } 

    const onChangeOpen=(data14)=>{
        SetOpenParking(data14);
    }

    const onChangeCover=(data15)=>{
        setCoverParking(data15);
    }

    const onChangePricing=(data16)=>{
        setPricing(data16);
    }

    const onChangeUnit=(data17)=>{
        setpriceUnit(data17);
    }

    const onChangeVisibility=(data0)=>{
        setPropertyVisibility(data0);
    }





    console.log("Outside Fetching data : ", fullname,phone,email,location,propertyType,category,dimensions,age,availability,bedrooms,washrooms,balconies,furnishing,openParking,coverParking,pricing,priceunit,propertyVisibility);
    
    const addProperty = async()=>{
        let data = await fetch("/api/products",{
          method: "POST",
          body: JSON.stringify({fullname,phone,email,location,propertyType,category,dimensions,age,availability,bedrooms,washrooms,balconies,furnishing,openParking,coverParking,pricing,priceunit,propertyVisibility})
        });
    
        // data = await data.json();
        if(data.success){
          alert("Property Added Successfully");
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
                    <FullName onChangeName={onChangeName} ></FullName>
                </Grid>
                <Grid item xs={12} md={4}>
                    <ContactNumber onChangePhone={onChangePhone}></ContactNumber>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Email onChangeEmail={onChangeEmail}></Email>
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
                    <Button variant="contained" onClick={addProperty}  >Submit</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

