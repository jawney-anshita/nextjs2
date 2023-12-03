import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Stack from '@mui/material/Stack';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from '@mui/material';

export default function MediaCard(props) {


  console.log("id",props.propertyid)
  return (
    <Card sx={{ maxWidth: 345, my: 3 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.pinimg.com/1200x/3d/99/bb/3d99bb227dec9338fd668acf07af1bf0.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom style={{fontSize: "1.2em", color: "GrayText"}} component="div">
          {props.title}BHK, {props.category}
        </Typography>
        <Typography variant="body1" color="text.secondary">
        <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="nowrap">
          <><LocationOnIcon/></>
          <>{props.location}</>
        </Stack>
 
        </Typography>
        
      <Typography variant="h6" component="div">
      <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="nowrap"  justifyContent="space-between">
      <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="nowrap">
          <>{props.price} {props.priceunit}</>
          <><CurrencyRupeeIcon style={{marginTop: "8px", fontSize: "1em", fontWeight: "400"}}/></>       
      </Stack>
      {/* <Link href={`/product/${props.propertyid}`}><Button variant="contained" size="small">View More</Button></Link> */}
      <Link href={`http://localhost:3000/product/${props.propertyid}`} ><Button variant="contained" size="small">View More</Button></Link>
      {/* <Link href={'http://localhost:3000/product/[id]'} as={`http://localhost:3000/product/${props.propertyid}`}><Button variant="contained" size="small">View More</Button></Link> */}
      </Stack>
        </Typography>
      </CardContent>
      {/* <CardActions>
     
        <Button size="small">View More</Button>
        <Button size="small">Contact Us</Button>
      </CardActions> */}
    </Card>
  );
}