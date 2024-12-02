import * as React from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import { Gender, Type } from '../models/enums';
import { MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSignUp } from '../redux/features/userSlice';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function UserForm1() {
  const dispatch=useDispatch();
    const [formData, setFormData]=useState({
      name:'',
      email:'',
      password:'',
      gender:'',
});
const handleSave=()=>{
dispatch(fetchSignUp(formData))
}

const handleInputChange=(event:any)=>{
  const {name, value}=event.target;
  setFormData((prevData)=>({
    ...prevData,
    [name]:value,
  }))
}



// console.log(formData);

  return (
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="name" required>
          Name
        </FormLabel>
        <OutlinedInput
          id="name"
          name="name"
          type="name"
          placeholder=""
          autoComplete="name"
          value={formData.name} 
          onChange={handleInputChange} 
          required
          size="small"
        />
      </FormGrid>
     
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="email" required>
          Email
        </FormLabel>
        <OutlinedInput
          id="email"
          name="email"
          type="email"
          placeholder="exampel@gmail.com"
          autoComplete="email"
          value={formData.email} 
          onChange={handleInputChange} 
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="password" required>
        Password
        </FormLabel>
        <OutlinedInput
          id="password"
          name="password"
          type="password"
          placeholder=""
          autoComplete="password"
          value={formData.password} 
          onChange={handleInputChange} 
          required
          size="small"
        />
      </FormGrid>
      {/* <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="phon" required>
          Phon number
        </FormLabel>
        <OutlinedInput
          id="phon"
          name="phon"
          type="phon"
          placeholder=""
          autoComplete="phon"
          required
          size="small"
        />
      </FormGrid> */}
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="gender" required>
          Gender
        </FormLabel>
        <Select
    id="gender"
    name="gender"

    value={formData.gender} 
    onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר
    onBlur={handleSave}    
    required
    size="small"
    displayEmpty
  >
    <MenuItem value="" disabled>Gender</MenuItem> 
    <MenuItem value="MAN">Man</MenuItem>
    <MenuItem value="WOMAN">Woman</MenuItem>
  </Select>
  
      </FormGrid>
      {/* <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address1" required>
          Address line 1
        </FormLabel>
        <OutlinedInput
          id="address1"
          name="address1"
          type="address1"
          placeholder="Street name and number"
          autoComplete="shipping address-line1"
          required
          size="small"
        />
      </FormGrid>
      
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="city" required>
          City
        </FormLabel>
        <OutlinedInput
          id="city"
          name="city"
          type="city"
          placeholder="New York"
          autoComplete="City"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="state" required>
          State
        </FormLabel>
        <OutlinedInput
          id="state"
          name="state"
          type="state"
          placeholder="NY"
          autoComplete="State"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="zip" required>
          Zip / Postal code
        </FormLabel>
        <OutlinedInput
          id="zip"
          name="zip"
          type="zip"
          placeholder="12345"
          autoComplete="shipping postal-code"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="country" required>
          Country
        </FormLabel>
        <OutlinedInput
          id="country"
          name="country"
          type="country"
          placeholder="United States"
          autoComplete="shipping country"
          required
          size="small"
        />
      </FormGrid> */}
      {/* <FormGrid size={{ xs: 12 }}>
        <FormControlLabel
          control={<Checkbox name="saveAddress" value="yes" />}
          label="Use this address for payment details"
        />
      </FormGrid> */}
    </Grid>
  );
}