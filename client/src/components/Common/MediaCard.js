import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Axios from "axios";
import "../RealEstate/ViewEstate.css";
const API = process.env.REACT_APP_API;

export default function MediaCard({ ad, btn1, btn2 }) {
  const history = useHistory();
  const [ads, setads] = useState([]);
  const updateAd = () => {
    history.push({ pathname: "/updatead", ad });
    console.log(ad._id);
  };

  //delete products
  const deleteAd = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`${API}api/v1/realestate/${id}`).then((res) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          // refresh();
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        });
      }
    });
  };
  return (
    <Card sx={{ maxWidth: 300, minWidth: 190 }}>
      <CardMedia
        component="img"
        height="200"
        width="200"
        image={ad.sampleImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          <p>
            {ad.streetAddress} | {ad.city} | Zip code:{ad.zip}
          </p>
          <p>Features: {ad.features}</p>
        </Typography>
        <Typography
          variant="body2"
          color="#ff7961"
          style={{ textAlign: "left" }}
        >
          {"$" + ad.price}
        </Typography>

        <Typography
          variant="body4"
          color="#64dd17"
          style={{ textAlign: "left" }}
        >
          {ad.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => updateAd()}
          style={{ color: "green" }}
        >
          {btn1}
        </Button>
        <Button size="small" onClick={() => deleteAd(ad._id)}>
          {btn2}
        </Button>
      </CardActions>
    </Card>
  );
}
