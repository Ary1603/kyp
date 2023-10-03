
import React from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

function TabMaps({locations, class_Id}) {
  console.log(locations)
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <div className="maps-container">
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            {locations.map((location, key) => (
              
                <Tab key={key} label={`${location.place_name}`} {...a11yProps(key)} />
            ))}
          
          
        </Tabs>
      </Box>
      {locations.map((location, key) => (
        <CustomTabPanel value={value} index={key} key={key}>
        <iframe className={`tab-map tab-map-${class_Id}`} src={`${location.maps}`}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </CustomTabPanel>
      ))}

    </Box>
    </div>
     
    </>
  );
}

export default TabMaps;
