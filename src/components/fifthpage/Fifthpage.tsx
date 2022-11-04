import React from "react";
import Box from "@mui/material/Box";
import { Button, Grid, Typography } from "@mui/material";
import mobile from "./mobile.png";
import "./Fifthpage.css";
import CircleIcon from '@mui/icons-material/Circle';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Fifthpage = () => {
  return (
    <Box>
      <Grid container spacing={1}
      sx={{
        padding:'2rem'
      }}>
        <Grid item lg={4} md={4} sm={2} xs={2}>
          {/* <CircleIcon/> */}
        </Grid>
        <Grid item lg={4} md={4} sm={8} xs={8}>
          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: "600",
            }}
          >
            {" "}
            Our Pricing
          </Typography>
          <Typography
            sx={{
              fontSize: "1.2rem",
              color: "grey",
            }}
          >
            Checkpout our pricing and make a decision for getting started your
            plan for your job finding
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} sm={2} xs={2}>
          {/* <FiberManualRecordIcon/> */}
        </Grid>

        <Grid
          container
          spacing={1}
          sx={{
            display: "flex",
            margin: "auto",
            justifyContent:'center',
            padding:'2rem'
          }}
        >
          <Grid
            item
            lg={3}
            md={4}
            sm={6}
            xs={12}
            sx={{
              border: "0.2px solid lightgrey",
              borderRadius: "1rem",
              margin:'1rem'
            }}
          >
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: "600",
              }}
            >
              {" "}
              Starter
            </Typography>
            <Typography
              sx={{
                fontSize: "1.2rem",
                color: "grey",
              }}
            >
              {" "}
              1 month trail
            </Typography>
            <hr
              style={{
                margin: "2rem 7rem",
              }}
            ></hr>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "3rem",
              }}
            >
              <Box
                sx={{
                  fontSize: "x-large",
                }}
              >
                $
              </Box>
              29
            </Typography>
            <Typography
              sx={{
                fontSize: "1.2rem",
                color: "grey",
              }}
            >
              per month
            </Typography>
            <Button
              sx={{
                color: "black",
                border: "0.12px solid black",
                borderRadius: "2rem",
                padding: "0.5rem 2rem",
                margin: "2rem",
              }}
            >
              Get Started
            </Button>
          </Grid>
          <Grid
            item
            lg={3}
            md={4}
            sm={6}
            xs={12}
            sx={{
              border: "0.2px solid lightgrey",
              borderRadius: "1rem",
              backgroundColor: "#6C4AB6",
              color: "white",
              margin:'1rem'
            }}
          >
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: "600",
              }}
            >
              {" "}
              Starter
            </Typography>
            <Typography
              sx={{
                fontSize: "1.2rem",
              }}
            >
              {" "}
              1 month trail
            </Typography>
            <hr
              style={{
                margin: "2rem 7rem",
              }}
            ></hr>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "3rem",
              }}
            >
              <Box
                sx={{
                  fontSize: "x-large",
                }}
              >
                $
              </Box>
              29
            </Typography>
            <Typography
              sx={{
                fontSize: "1.2rem",
              }}
            >
              per month
            </Typography>
            <Button
              sx={{
                color: "white",
                borderRadius: "2rem",
                padding: "0.5rem 2rem",
                margin: "2rem",
                backgroundColor: "#E97777",
              }}
            >
              Get Started
            </Button>
          </Grid>
          <Grid
            item
            lg={3}
            md={4}
            sm={6}
            xs={12}
            sx={{
              border: "0.2px solid lightgrey",
              borderRadius: "1rem",
              margin:'1rem',
             
            }}
          >
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: "600",
              }}
            >
              {" "}
              Starter
            </Typography>
            <Typography
              sx={{
                fontSize: "1.2rem",
                color: "grey",
              }}
            >
              {" "}
              1 month trail
            </Typography>
            <hr
              style={{
                margin: "2rem 7rem",
              }}
            ></hr>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "3rem",
              }}
            >
              <Box
                sx={{
                  fontSize: "x-large",
                }}
              >
                $
              </Box>
              29
            </Typography>
            <Typography
              sx={{
                fontSize: "1.2rem",
                color: "grey",
              }}
            >
              per month
            </Typography>
            <Button
              sx={{
                color: "black",
                border: "0.12px solid black",
                borderRadius: "2rem",
                padding: "0.5rem 2rem",
                margin: "2rem",
              }}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Box>
        <Grid container spacing={1}
        sx={{
          margin:'2rem 0rem',
          alignItems:'center',
          
        }}>
          <Grid item lg={1} md={1} sm={1} xs={1}>
           
          </Grid>
          <Grid item lg={4} md={4} sm={10} xs={10}>
            <img style={{ width:'300px'}} src={mobile} alt="mobileImage"/>
          </Grid>
          <Grid item lg={1} md={1} sm={1} xs={1}>
           
          </Grid>
          <Grid item lg={1} md={1} sm={1} xs={1}>
           
           </Grid>
          <Grid item lg={4} md={4} sm={10} xs={10} 
          sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'start',
            padding:'3rem'
          }}
          >
            <Typography
            sx={{
              fontSize:'2rem',
              fontWeight:'600',
              marginBottom:'1rem',
              textAlign:'initial'

            }}>Download Our Mobile Job App</Typography>
            <Typography
              sx={{
                fontSize:'1.2rem',
                color:'grey',
                textAlign:'start'
              }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </Typography>
            <Box sx={{
              display:'flex'
            }}>
            <Button sx={{
                color: "black",
                border: "0.12px solid black",
                borderRadius: "2rem",
                padding: "0.5rem 1rem",
                margin: "1rem",
              }}>Google Play</Button>
            <Button
            sx={{
              color: "black",
              border: "0.12px solid black",
              borderRadius: "2rem",
              padding: "0.5rem 1rem",
              margin: "1rem",
            }}>App Store</Button>
            </Box>
           
          </Grid>
          <Grid item lg={1} md={1} sm={1} xs={1}>
           
           </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Fifthpage;
