import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
};

const names = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getStyles(name, weekday, theme) {
  return {
    fontWeight:
      weekday.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip(props) {
  const theme = useTheme();
  const [weekday, setWeekday] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setWeekday(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  props.getWeekdays(weekday)

  //console.log(weekday);

  return (
    <div>
      <FormControl sx={{ width: "97%" }} size="small">
        <label className="text-sm mb-2">
          Work days<span className="text-danger">*</span>
        </label>
        <Select
        sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 },}}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          label="Track payment"
          value={weekday}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, weekday, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
