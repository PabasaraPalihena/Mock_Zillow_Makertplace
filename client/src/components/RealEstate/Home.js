import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "57%",
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
            // width: "33%",
            width: "47%",
            height: 500,
            backgroundColor: "background",
            // style: {
            //   backgroundColor:
            //     "linear-gradient(to right bottom, #430089, #82ffa1)",
            // },
          }}
        >
          <div className="find">
            <h1>Find it. Tour it. Own it</h1>
            <h4>Search bar</h4>
            <br />
          </div>
        </Box>
      </Box>
    </div>
  );
}
