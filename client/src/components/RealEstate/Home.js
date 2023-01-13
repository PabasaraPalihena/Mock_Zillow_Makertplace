import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./Home.css";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "60%",
          }}
        >
          <Typography paragraph>
            <img
              className="center"
              // src="https://media.istockphoto.com/id/503044702/photo/illuminated-sky-and-outside-of-waterfront-buiding.jpg?b=1&s=612x612&w=0&k=20&c=PPVQ-QBG0cjvpakGp2JBddm9hAv2wLmIILkRqAKV_sg="
              src="https://cdn.onekindesign.com/wp-content/uploads/2018/10/Beach-Style-Home-Design-Norman-Design-Group-01-1-Kindesign.jpg"
              height={500}
            />
          </Typography>
        </Box>
        <Box
          sx={{
            width: "30%",
            height: 500,
            backgroundColor: "background",
          }}
        >
          <div>
            <h1 className="find">
              Find the Perfect home for sale or rent with our premier real state
              website
            </h1>

            <br />
            <Button
              variant="contained"
              style={{
                marginLeft: "50px",
                borderRadius: "20px",
                width: "200px",
                height: "45px",
                backgroundColor: "#ffa000",
              }}
              className="header__button"
              onClick={() => history.push("/getads")}
            >
              Find a Home
            </Button>
          </div>
        </Box>
      </Box>
    </div>
  );
}
