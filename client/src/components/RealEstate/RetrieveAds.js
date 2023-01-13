import React, { useEffect, useState } from "react";
import Axios from "axios";
import Card from "../Common/MediaCard";
import "./ViewEstate.css";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material";

//search bar
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.2),
  },

  width: "65%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const API = process.env.REACT_APP_API;

export default function RetrieveAds() {
  const [ads, setads] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");
  useEffect(() => {
    Axios.get(`${API}api/v1/realestate/`)
      .then((res) => {
        setads(res.data.data);
        ads.map((ads) => {});
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setSearchedValue(e.target.value)}
            />
          </Search>
        </div>
        <div className="Estate_component">
          {ads
            .filter(
              (row) =>
                // note that I've incorporated the searchedVal length check here
                !searchedValue.length ||
                row.type
                  .toString()
                  .toLowerCase()
                  .includes(searchedValue.toString().toLowerCase())
            )
            .map((ad) => {
              return (
                <Card
                  key={ad._id.toString()}
                  ad={ad}
                  btn1="update"
                  btn2="delete"
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
