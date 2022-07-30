import React from "react";
import { Select, MenuItem } from "@mui/material/";

function Dropdown({ setfiltered_data, data }) {
  const handleChange = (e) => {
    const filter_photo = data.photos.filter(
      (value) => value.heading === e.target.value
    );
    setfiltered_data(filter_photo);
  };

  return (
    <div>
      <Select label="Photos" style={{ height:"100%", width: "70%" }} onChange={handleChange}>
        {data.photos.map((value) => {
          return (
            <MenuItem value={value.heading} key={value.id}>
              {value.heading}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
}

export default Dropdown;
