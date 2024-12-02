import * as React from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import { height, styled } from '@mui/system';
import { MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignUp, updateUser } from '../redux/features/userSlice';
import { Users } from '../models/users';
import { RootState } from '../store';


const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));



export default function UserForm2() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    license: '',
    residence: '',
    status: '',
    city: '',
    country: '',
    phon: '',
    //address: '',
    type_phon: '',
    budget: 0,
    height: 0.0,
    countryOfOrigin:'',

  });
  const user = useSelector((state: RootState) => state.user.user);
  const gender = user?.gender
  console.log(user);
  


  const handleUpdate = () => {``    
     dispatch(updateUser(formData));
  }

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }





  return (
    <Grid container spacing={3}>

      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="license" required>
          License
        </FormLabel>
        <Select
          id="license"
          name="license"

          value={formData.license}
          onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר
          required
          size="small"
          displayEmpty
        >
          <MenuItem value="" disabled>License</MenuItem>
          <MenuItem value="YES">Yes</MenuItem>
          <MenuItem value="NO">No</MenuItem>
          <MenuItem value="OTHER">Other</MenuItem>
        </Select>
      </FormGrid>


      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="status" required>
          Status
        </FormLabel>
        <Select
          id="status"
          name="status"

          value={formData.status}
          onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר   
          required
          size="small"
          displayEmpty
        >
          <MenuItem value="" disabled>Status</MenuItem>
          <MenuItem value="SINGLE">רווק</MenuItem>
          <MenuItem value="WIDOW_WITH_KIDS">אלמן/ה עם ילדים</MenuItem>
          <MenuItem value="WIODW">אלמן/ה</MenuItem>
          <MenuItem value="DIVORCE">גרוש/ה</MenuItem>
          <MenuItem value="DIVORCE_WITH_KIDS">גרוש/ה עם ילדים</MenuItem>
        </Select>
      </FormGrid>


      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="residence" required>
          Residence
        </FormLabel>
        <Select
          id="residence"
          name="residence"

          value={formData.residence}
          onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר

          required
          size="small"
          displayEmpty
        >
          <MenuItem value="" disabled>Residence</MenuItem>
          <MenuItem value="WITH_PARENTS">With parents</MenuItem>
          <MenuItem value="ALONE">Alone</MenuItem>
          <MenuItem value="DORMITORY">Dormitory</MenuItem>
          <MenuItem value="BATCHELOR_APARTMENT">Singels apartment</MenuItem>
        </Select>
      </FormGrid>

      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="phon" required>
          Phon number
        </FormLabel>
        <OutlinedInput
          id="phon"
          name="phon"
          type="phon"
          placeholder=""
          autoComplete="phon"
          value={formData.phon}
          onChange={handleInputChange}
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="type_phon" required>
          Type Of Phon
        </FormLabel>
        <Select
          id="type_phon"
          name="type_phon"

          value={formData.type_phon}
          onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר   
          required
          size="small"
          displayEmpty
        >
          <MenuItem value="" disabled>Type Of Phon</MenuItem>
          <MenuItem value="כשר">כשר</MenuItem>
          <MenuItem value="תומך_כשר">תומך כשר</MenuItem>
          <MenuItem value="מכשיר_מוגן">מוגן</MenuItem>
          <MenuItem value="סמארטפון">סמארטפון</MenuItem>
          <MenuItem value="שני_טלפונים">שני טלפונים</MenuItem>
        </Select>
      </FormGrid>

      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="budget" required>
          Budget
        </FormLabel>
        <OutlinedInput
          id="budget"
          name="budget"
          type="budget"
          placeholder=""
          autoComplete=""
          value={formData.budget}
          onChange={handleInputChange}
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="height" required>
          Height
        </FormLabel>
        <OutlinedInput
          id="height"
          name="height"
          type="height"
          placeholder="Street name and number"
          autoComplete=""
          value={formData.height}
          onChange={handleInputChange}
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="city" required>
          City
        </FormLabel>
        <Select
          id="city"
          name="city"

          value={formData.city}
          onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר   
          required
          size="small"
          displayEmpty
        >
          <MenuItem value="" disabled>City</MenuItem>
          <MenuItem value="ירושלים">ירושלים</MenuItem>
          <MenuItem value="תל_אביב">תל אביב</MenuItem>
          <MenuItem value="חיפה">חיפה</MenuItem>
          <MenuItem value="בני_ברק">בני ברק</MenuItem>
          <MenuItem value="פתח_תקוה">פתח תקוה</MenuItem>
          <MenuItem value="אשדוד">אשדוד</MenuItem>
          <MenuItem value="ביתר">ביתר</MenuItem>
          <MenuItem value="רמת_גן">רמת גן</MenuItem>
        </Select>
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="country" required>
          Country
        </FormLabel>
        <Select
          id="country"
          name="country"

          value={formData.country}
          onChange={handleInputChange}  // פונקציה לעדכון הערך שנבחר   
          onBlur={handleUpdate}
          required
          size="small"
          displayEmpty
        >
          <MenuItem value="" disabled>Country</MenuItem>
          <MenuItem value="ישראל">ישראל</MenuItem>
          <MenuItem value="אנגליה">אנגליה</MenuItem>
          <MenuItem value="רוסיה">רוסיה</MenuItem>
          <MenuItem value="צרפת">צרפת</MenuItem>
          <MenuItem value="בלגיה">בלגיה</MenuItem>
          <MenuItem value="תימן">תימן</MenuItem>
          <MenuItem value="מרוקו">מרוקו</MenuItem>
        </Select>
      </FormGrid>

      {/* <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address" required>
          Address
        </FormLabel>
        <OutlinedInput
          id="address"
          name="address"
          type="address"
          placeholder="Street name and number"
          autoComplete=""
          value={formData.address} 
    onChange={handleInputChange}  
          required
          size="small"
        />
      </FormGrid> */}

      {/* <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="city" required>
          City
        </FormLabel>
        <OutlinedInput
          id="city"
          name="city"
          type="city"
          placeholder=""
          autoComplete="City"
          value={formData.city} 
    onChange={handleInputChange}  
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
          placeholder=""
          autoComplete=""
          value={formData.country} 
          onChange={handleInputChange}  
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