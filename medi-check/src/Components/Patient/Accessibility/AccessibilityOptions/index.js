import ControlledSwitchTwo from "../../../../MUIcomponents/ControlledSwitchTwo";
// import Slider from "@mui/material/Slider";
// import Box from "@mui/material/Box";
// import { useState } from "react";
import "./menu.css";

export default function AccessibilityOptions({ setDarkMode }) {
  //   const [entry, SetEntry] = useState({ value: 0 });
  //   const marks = [
  //     {
  //       value: 0,
  //       label: "Default",
  //     },

  //     {
  //       value: 50,
  //       label: "Colourblind 2",
  //     },

  //     {
  //       value: 100,
  //       label: "Colourblind 3",
  //     },
  //   ];

  //   function handleSlider(e) {
  //     SetEntry({ ...entry, value: e.target.value });
  //   }
  return (
    <div className="access-menu">
      <h4>
        Dark Mode{" "}
        <ControlledSwitchTwo setDarkMode={setDarkMode}></ControlledSwitchTwo>
      </h4>
      {/* <h4>
        Font Size <ControlledSwitchTwo></ControlledSwitchTwo>
      </h4> */}
      {/* <h4>
        Colourblind mode
        <Box sx={{ width: 200 }}>
          <Slider
            aria-label="Restricted values"
            defaultValue={0}
            step={null}
            marks={marks}
            getAriaValueText={marks.label}
            onChange={handleSlider}
          />
        </Box> */}
      {/* </h4> */}
    </div>
  );
}
