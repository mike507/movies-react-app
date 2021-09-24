import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sizepagesChanged } from "./sizepagesSlice";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { pageSelected } from "../pages/pageSlice";
import MenuItem from "@mui/material/MenuItem";

const SIZEPAGES = [4, 8, 12];

export const SizePages = () => {
  const dispatch = useDispatch();
  const sizepages = useSelector((state) => state.sizepages.sizepages);
  return (
    <>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120, marginLeft: "auto" }}
      >
        <InputLabel id="select-sizepages" label="SizePages">
          SizePages
        </InputLabel>
        <Select
          labelId="select-sizepages-label"
          id="select-sizepages"
          value={sizepages}
          onChange={(event) => {
            dispatch(sizepagesChanged({ sizepages: event.target.value }));
            dispatch(pageSelected({ page: 1 }));
          }}
          label="SizePages"
        >
          {SIZEPAGES.map((sizepages) => (
            <MenuItem key={sizepages} value={sizepages}>
              {sizepages}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
