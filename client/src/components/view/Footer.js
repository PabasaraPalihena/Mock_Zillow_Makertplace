import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      PMPP
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "38vh",
        height: "auto",
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          // mt: "auto",
          backgroundColor: (theme) => theme.palette.grey[300],
        }}
      >
        <Typography variant="body1">Zillow Real Estate Onlinemarket</Typography>
        <Copyright />
      </Box>
    </Box>
  );
}
