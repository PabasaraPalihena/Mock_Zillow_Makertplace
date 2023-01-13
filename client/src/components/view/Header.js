import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./Header.css";
import { useHistory } from "react-router-dom";

export default function Header({ title }) {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }
  return (
    <>
      <header>
        <div className="header__component">
          <div className="header__left">
            <div>
              <p>Real Estate online market</p>
              <p>{title}</p>
            </div>
            <div className="header__buttonGroup">
              <Button
                variant="outlined"
                className="header__button"
                onClick={handleClick}
                style={{ width: "100px" }}
              >
                Home
              </Button>
              <Button
                variant="outlined"
                className="header__button"
                // onClick={() => history.push("/sell")}
                style={{ width: "100px" }}
              >
                Sell
              </Button>
              <Button
                variant="outlined"
                className="header__button"
                // onClick={() => history.push("/addproduct")}
                style={{ width: "100px" }}
              >
                Click
              </Button>

              <Button
                variant="outlined"
                className="header__button"
                // onClick={() => history.push("/allproducts")}
                style={{ width: "100px" }}
              >
                Click
              </Button>
            </div>
          </div>
          <div className="header__right">
            <Button
              variant="contained"
              style={{
                borderRadius: "20px",
                width: "100px",
                backgroundColor: "rgb(60, 60, 60)",
              }}
              className="header__button"
            >
              Sign In
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
