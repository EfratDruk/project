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

export default function UserForm3() {
  const dispatch=useDispatch();
    const [formData, setFormData]=useState({
        father_name:'',
        mother_name:'',
        fatherOccupation:'',
        motherOccupation:'',
      parent_status:'',
});
const handleSave=()=>{
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
        <FormLabel htmlFor="father_name" required>
        Father Name
        </FormLabel>
        <OutlinedInput
          id="father_name"
          name="father_name"
          type="father_name"
          placeholder=""
          autoComplete="father_name"
          value={formData.father_name} 
          onChange={handleInputChange} 
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="mother_name" required>
        Mother Name
        </FormLabel>
        <OutlinedInput
          id="mother_name"
          name="mother_name"
          type="mother_name"
          placeholder=""
          autoComplete="mother_name"
          value={formData.mother_name} 
          onChange={handleInputChange} 
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="fatherOccupation" required>
        Father Occupation
        </FormLabel>
        <OutlinedInput
          id="fatherOccupation"
          name="fatherOccupation"
          type="fatherOccupation"
          placeholder=""
          autoComplete="fatherOccupation"
          value={formData.fatherOccupation} 
          onChange={handleInputChange} 
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="motherOccupation" required>
         Mother Occupation
        </FormLabel>
        <OutlinedInput
          id="motherOccupation"
          name="motherOccupation"
          type="motherOccupation"
          placeholder=""
          autoComplete="motherOccupation"
          value={formData.motherOccupation} 
          onChange={handleInputChange} 
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="parent_status" required>
        Status Of Parents
        </FormLabel>
        <Select
    id="parent_status"
    name="parent_status"

    value={formData.parent_status} 
    onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר
    onBlur={handleSave}    
    required
    size="small"
    displayEmpty
  >
    <MenuItem value="" disabled>Status Of Parents</MenuItem> 
    <MenuItem value="MARRIED">נשואים</MenuItem>
    <MenuItem value="WIDOW">אלמן/ה</MenuItem>
    <MenuItem value="DIVORCE">גרוש/ה</MenuItem>
  </Select>
  
      </FormGrid>
    </Grid>
  );
}