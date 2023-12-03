import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MediaCard from './PropertyListing/MediaCard';
import BasicFormControl from './Construct/BasicFormControl';
import PropertyGrid from './PropertyListing/PropertyGrid';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Buy" {...a11yProps(0)} />
          <Tab label="Sell" {...a11yProps(1)} />
          <Tab label="Rent" {...a11yProps(2)} />
          <Tab label="Construct / Renovate" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div>
          <PropertyGrid></PropertyGrid>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div></div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div></div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div><BasicFormControl></BasicFormControl></div>
      </CustomTabPanel>
    </Box>
  );
}