import React from "react";
import "./Home.css";
import Box from "@mui/material/Box";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
export default function Sell() {
  const history = useHistory();
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
          onClick={() => history.push("/postad")}
        >
          Post your Home
        </Button>
        <br />
        <img
          src={require("../assets/citro.png")}
          alt="city"
          style={{
            width: "66%",
            position: "center",
            left: "270px",
            filter: "contrast(105%) ",
          }}
        />
      </div>
    </div>
  );
}
