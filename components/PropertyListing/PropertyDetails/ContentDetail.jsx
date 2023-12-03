import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BedIcon from '@mui/icons-material/Bed';
import BalconyIcon from '@mui/icons-material/Balcony';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeckIcon from '@mui/icons-material/Deck';
import Stack from '@mui/material/Stack';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Button } from '@mui/material';
import BasicFormControl from '../../Construct/BasicFormControl';

export default function ContentDetails(props) {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      
      <Typography variant="h4" gutterBottom sx={{ mb: 3}}>
        {props.firstheading}BHK, {props.secondheading}: {props.thirdheading}
      </Typography>
     
      <Typography variant="h6" gutterBottom>
      <LocationOnIcon></LocationOnIcon> {props.location}
      </Typography>
      <Stack  direction="row" spacing={1} sx={{ my: 1}}>
        <Typography  style={{fontWeight: 700, fontSize: 20}}>{props.firstheading} </Typography><LocalHotelIcon sx={{ pt: 0.5}}></LocalHotelIcon> <Typography sx={{ mx: 3}} variant="subtitle1">|</Typography>
        <Typography  style={{fontWeight: 700, fontSize: 20}}>{props.washrooms}</Typography><BathtubIcon sx={{ pt: 0.5}}></BathtubIcon> <Typography variant="subtitle1">|</Typography>
        <Typography  style={{fontWeight: 700, fontSize: 20}}>{props.balconies}</Typography><DeckIcon sx={{ pt: 0.5}}></DeckIcon>
        </Stack>
        <Stack  direction="row" spacing={1} sx={{ my: 3}}>
        <AspectRatioIcon sx={{ pb: 0.2}}></AspectRatioIcon><Typography  style={{fontWeight: 700}}>{props.dimensions} Sq. Yard </Typography> 
      </Stack>
      <Stack  direction="row" spacing={1} sx={{ my: 3}}>
      <Typography  style={{fontWeight: 700, fontSize: 16}}>Property Age: </Typography> <p sx={{ mx: 2}}>{props.age} Yrs.</p>
      </Stack>
      <Stack  direction="row" spacing={1} sx={{ my: 3}}>
      <Typography  style={{fontWeight: 700, fontSize: 16}}>Availability: </Typography> <p sx={{ mx: 2}}>{props.availability}</p>
      </Stack>
      <Stack  direction="row" spacing={1} sx={{ my: 3}}>
      <Typography  style={{fontWeight: 700, fontSize: 16}}>Parking Details: </Typography> <p sx={{ mx: 2}}>Open Parking: {props.openParking}   |   Covered Parking: {props.coverParking}</p>
      </Stack>
      <Stack  direction="row" spacing={1} sx={{ my: 3}}>
      <Typography  style={{fontWeight: 700, fontSize: 16}}>Furnishing Details: </Typography> <p sx={{ mx: 2}}>{props.furnishing}</p>
      </Stack>
      <Stack  direction="row" spacing={1} sx={{ my: 3}}>
      <CurrencyRupeeIcon></CurrencyRupeeIcon><Typography  style={{fontWeight: 700, fontSize: 28, marginTop: -10}}>{props.pricing} </Typography> <p sx={{ mx: 2}}>{props.priceunit}</p>
      </Stack>
      
      {/* <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        <BasicFormControl></BasicFormControl>
        <Button></Button>
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography> */}
    </Box>
  );
}