import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          borderRadius: "25em",
          backgroundColor: "#EFF4F6",
          color: "black",
          fontFamily: "Inter, sans-serif;",
          fontSize: "1.1em",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#EFF4F6",
          },
          paddingTop: "-1em",
          paddingBottom: "-1em",
        }}
      >
        First name
      </Button>
    </Stack>
  );
}
