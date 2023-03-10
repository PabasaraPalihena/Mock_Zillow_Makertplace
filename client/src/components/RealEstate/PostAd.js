import React from "react";
import Axios from "axios";
import "./RealEstate.css";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  TextField,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useHistory } from "react-router";

export default function PostAd() {
  const [streetAddress, setstreetAddress] = useState("");
  const [city, setcity] = useState("");
  const [zip, setzip] = useState("");
  const [bCategory, setbCategory] = useState("");
  const [type, settype] = useState("");
  const [price, setprice] = useState("");
  const [features, setfeatures] = useState("");
  const [otherfacts, setotherfacts] = useState("");
  const [sampleImage, setsampleImage] = useState("");

  const API = process.env.REACT_APP_API;
  const history = useHistory();

  //using axios send Ads details to api
  const sendAdsToAPI = (e) => {
    Axios.post(`${API}api/v1/realestate`, {
      streetAddress,
      city,
      zip,
      bCategory,
      type,
      price,
      features,
      otherfacts,
      sampleImage,
    }).then((res) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      //   history.push("/sell");
    });
  };
  return (
    // data form
    <div className="res_component">
      <div className="form_frame">
        <div className="Estate_details">
          <div className="Estate_details__title">
            <h1>Post your Home</h1>
            <div>
              <br />

              <div className="Estate_details__input">
                <p>Street Address</p>

                <FormControl fullWidth>
                  <TextField
                    id="outlined-basic"
                    className="Estate_txt"
                    label="Street Address"
                    variant="outlined"
                    value={streetAddress}
                    onChange={(e) => setstreetAddress(e.target.value)}
                  />
                </FormControl>
              </div>

              <div className="Estate_details__input">
                <p>City</p>

                <FormControl fullWidth>
                  <TextField
                    id="outlined-basic"
                    className="Estate_txt"
                    label="City"
                    variant="outlined"
                    value={city}
                    onChange={(e) => setcity(e.target.value)}
                  />
                </FormControl>
              </div>

              <div className="Estate_details__input">
                <p>Zip</p>

                <FormControl fullWidth>
                  <TextField
                    id="outlined-basic"
                    className="Estate_txt"
                    label="Zip"
                    variant="outlined"
                    value={zip}
                    onChange={(e) => setzip(e.target.value)}
                  />
                </FormControl>
              </div>

              <div className="Estate_details__input">
                <p>Category</p>

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={bCategory}
                    label="Category"
                    onChange={(event) => {
                      setbCategory(event.target.value);
                    }}
                    style={{ width: "360px" }}
                  >
                    <MenuItem value={1}>Houses</MenuItem>
                    <MenuItem value={2}>villas</MenuItem>
                    <MenuItem value={3}>Apartments</MenuItem>
                    <MenuItem value={4}>Lands</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="Estate_details__input">
                <p>Type</p>

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    label="Type"
                    onChange={(event) => {
                      settype(event.target.value);
                    }}
                    style={{ width: "360px" }}
                  >
                    <MenuItem value={"Sale"}>Sales</MenuItem>
                    <MenuItem value={"Rent"}>Rent</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="Estate_details__input">
                <p>Price ($)</p>

                <FormControl fullWidth>
                  <TextField
                    id="outlined-basic"
                    className="Estate_txt"
                    label="Price"
                    variant="outlined"
                    value={price}
                    onChange={(e) => setprice(e.target.value)}
                  />
                </FormControl>
              </div>

              <div className="Estate_details__input">
                <p>Features</p>

                <FormControl fullWidth>
                  <TextField
                    id="outlined-basic"
                    className="Estate_txt"
                    label="Features"
                    variant="outlined"
                    value={features}
                    onChange={(e) => setfeatures(e.target.value)}
                  />
                </FormControl>
              </div>

              <div className="Estate_details__input">
                <p>Upload image</p>

                <br />
                <br />

                <input
                  id="contained-button-file"
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    console.log(event.target.files[0].name);
                    // Get a reference to the file
                    const file = event.target.files[0];
                    // Encode the file using the FileReader API
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      // Logs data:<type>;base64,wL2dvYWwgbW9yZ...
                      setsampleImage(reader.result);
                      console.log(reader.result);
                    };
                    reader.readAsDataURL(file);
                  }}
                />
              </div>
              <div className="res_details__input">
                <FormControl fullWidth>
                  <Button
                    variant="contained"
                    style={{
                      width: "400px",
                      height: "40px",
                      margin: "20px 0px 0px 100px",
                    }}
                    onClick={sendAdsToAPI}
                  >
                    Post
                  </Button>
                  <br />
                </FormControl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
