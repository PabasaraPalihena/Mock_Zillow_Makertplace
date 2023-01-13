import React from "react";
import "./Home.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
export default function Sell() {
  return (
    <div>
      <div className="sell_desc">
        <h1>Sell your home with confidence by yourself</h1>
        <h3>Zillow is making it simpler to sell your home and move forward.</h3>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              width: "57%",
            }}
          >
            <p>
              Deciding to sell your home yourself is referred to as
              for-sale-by-owner (FSBO). The FSBO process is similar to
              traditional selling, but without the help of a real estate agent.
              In this case, you’re responsible for the home prep, marketing,
              showings, and negotiations.
            </p>
          </Box>
        </Box>
        <br />
        <Button
          variant="contained"
          style={{ width: "200px", height: "50px" }}
          // onClick={h}
        >
          Post your Home
        </Button>
      </div>
    </div>
  );
}
