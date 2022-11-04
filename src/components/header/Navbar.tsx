import { Grid, Typography } from "@mui/material";
import React from "react";
import Header from "./Header";
import first from "./NavbarImage/first.png";
import logo from "./NavbarImage/logo.png";

const Navbar = () => {
  return (
    <>
      <div style={{ backgroundColor: "#5C52BA", position: "sticky" }}>
        <Grid
          container
          style={{
            display: "flex",
            height: "100px",
            justifyContent: "space-evenly",
            backgroundColor: "#5C52BA",
          }}
        >
          <Grid
            item
            style={{
              textAlign: "center",
              alignItems: "flex-end",
              justifyItems: "flex-start",
            }}
            lg={3}
            md={3}
            sm={3}
            xs={3}
          >
            <img
              style={{ width: "20%", marginTop: "30px" }}
              src={logo}
              alt="im"
            />
          </Grid>
          <Grid
            container
            lg={5}
            md={5}
            sm={5}
            xs={5}
            style={{
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              justifyContent: "space-evenly",
              color: "white",
            }}
          >
            <Grid item>Home</Grid>
            <Grid item>Category</Grid>
            <Grid item>Post A Job</Grid>
            <Grid item>About</Grid>
            <Grid item>Contact</Grid>
          </Grid>
          <Grid
            container
            lg={3}
            md={3}
            sm={3}
            xs={3}
            style={{
              textAlign: "center",
              alignContent: "center",
              display: "flex",
            }}
          >
            <div style={{ height: "35px", width: "80px" }}>
              <Typography style={{ marginTop: "5px", color: "white" }}>
                Sign In
              </Typography>
            </div>
            <div
              style={{
                color: "#5C52BA",
                borderRadius: "30px",
                height: "35px",
                width: "80px",
                backgroundColor: "white",
                textAlign: "center",
              }}
            >
              <Typography style={{ marginTop: "5px" }}>SignUp</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
      <Header/>
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <img
            style={{ width: "100%", marginTop: "-5px" }}
            src={first}
            alt="Im"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Navbar;
