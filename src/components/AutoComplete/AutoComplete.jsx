import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchBar({data}) {
  return (

      <Autocomplete
        options={data.map((option) => option.name)}
        renderInput={(params) => <TextField {...params} label="Search" />}
      />
     

  );
}

