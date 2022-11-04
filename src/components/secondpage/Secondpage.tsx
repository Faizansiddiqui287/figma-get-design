import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import img from './images/img.png';
import ApiIcon from '@mui/icons-material/Api';
import AppsOutageIcon from '@mui/icons-material/AppsOutage';
import LanguageIcon from '@mui/icons-material/Language';
import CodeOffIcon from '@mui/icons-material/CodeOff';

import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import './Secondpage.css';

const Secondpage = () => {
  return (
    <>
      <Grid container>
        <Grid item lg={1} md={1} sm={0} xs={0}></Grid>

        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Box sx={{ width: '100%' }}>
            <img src={img} style={{ width: '100%', backgroundColor: 'grey' }} />
          </Box>
        </Grid>
        <Grid item lg={2} md={2} sm={0} xs={0}></Grid>

        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            // height: '200px',
            // alignItems: 'center',
            padding: {
              lg: '0px 0px',
              md: '0px 0px',
              sm: '20px 60px',
              xs: '20px 60px',
            },
            width: '100%',
          }}
        >
          <Box
            sx={{
              // display: 'flex',
              // flexDirection: 'column',
              // justifyContent: 'flex-start',
              textAlign: 'left',
            }}
          >
            <Typography
              sx={{
                fontSize: '40px',
                mt: '50px',
                mb: '20px',
                fontWeight: '600',
              }}
            >
              Trusted & Popular Job Portal
            </Typography>
            <Typography sx={{ fontSize: '12px', mb: '20px' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus adipisci iste illo quisquam, amet suscipit earum aliquid
              tempore voluptatum odio quos? Iusto, quos. Hic, obcaecati.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Button
              variant="outlined"
              sx={{
                mr: '10px',
                color: 'black',
                borderRadius: '20px',
                padding: '10px 20px',
                border: '1px solid black',
              }}
            >
              Post a Job
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#ff736a',
                color: 'white',
                borderRadius: '20px',
                padding: '10px 20px',
              }}
            >
              Apply Now
            </Button>
          </Box>
        </Grid>
        <Grid item lg={1} md={1} sm={0} xs={0}></Grid>
      </Grid>
      <Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ fontSize: '50px', fontWeight: '600' }}>
            Explor By Category
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Autem ipsum explicabo fuga nihil alias ad.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            mt: '20px',
            flexWrap: 'wrap',
          }}
        >
          <Box
            sx={{
              boxShadow: '0pc 0pc 2px 1px black',
              padding: '40px 40px',
              textAlign: 'left',
              mt: '10px',
            }}
          >
            <Box>
              <Button id="icon">
                <ApiIcon />
              </Button>
            </Box>
            <Box>
              <Typography>
                Design &<br /> Development
              </Typography>
            </Box>
            <Box>
              <Typography>15K+ Post Jobs</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              boxShadow: '0pc 0pc 2px 1px black',
              padding: '40px 40px',
              textAlign: 'left',
              mt: '10px',
            }}
          >
            <Box>
              <Button id="icon">
                <AppsOutageIcon />
              </Button>
            </Box>
            <Box>
              <Typography>
                UI/UX
                <br /> Design
              </Typography>
            </Box>
            <Box>
              <Typography>14K+ Post Jobs</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              boxShadow: '0pc 0pc 2px 1px black',
              padding: '40px 40px',
              textAlign: 'left',
              mt: '10px',
            }}
          >
            <Box>
              <Button id="icon">
                <LanguageIcon />
              </Button>
            </Box>
            <Box>
              <Typography>
                Website
                <br /> Design
              </Typography>
            </Box>
            <Box>
              <Typography>13K+ Post Jobs</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              boxShadow: '0pc 0pc 2px 1px black',
              padding: '40px 40px',
              textAlign: 'left',
              mt: '10px',
            }}
          >
            <Box>
              <Button id="icon">
                <CodeOffIcon />
              </Button>
            </Box>
            <Box>
              <Typography>
                Website
                <br /> Development
              </Typography>
            </Box>
            <Box>
              <Typography>12K+ Post Jobs</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            mt: '20px',
            flexWrap: 'wrap',
          }}
        >
          <Box
            sx={{
              boxShadow: '0pc 0pc 2px 1px black',
              padding: '40px 40px',
              textAlign: 'left',
              mt: '10px',
            }}
          >
            <Box>
              <Button id="icon">
                <LocalConvenienceStoreIcon />
              </Button>
            </Box>
            <Box>
              <Typography>
                Digital &<br /> Marketing
              </Typography>
            </Box>
            <Box>
              <Typography>12K+ Post Jobs</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              boxShadow: '0pc 0pc 2px 1px black',
              padding: '40px 40px',
              textAlign: 'left',
              mt: '10px',
            }}
          >
            <Box>
              <Button id="icon">
                <MonochromePhotosIcon />
              </Button>
            </Box>
            <Box>
              <Typography>
                Digital
                <br /> Photographer
              </Typography>
            </Box>
            <Box>
              <Typography>11K+ Post Jobs</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              boxShadow: '0pc 0pc 2px 1px black',
              padding: '40px 40px',
              textAlign: 'left',
              mt: '10px',
            }}
          >
            <Box>
              <Button id="icon">
                <MovieFilterIcon />
              </Button>
            </Box>
            <Box>
              <Typography>
                Video
                <br /> Animator
              </Typography>
            </Box>
            <Box>
              <Typography>10K+ Post Jobs</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              boxShadow: '0pc 0pc 2px 1px black',
              padding: '40px 40px',
              textAlign: 'left',
              mt: '10px',
            }}
          >
            <Box>
              <Button id="icon">
                <SupportAgentIcon />
              </Button>
            </Box>
            <Box>
              <Typography>
                Customer
                <br /> Support
              </Typography>
            </Box>
            <Box>
              <Typography>9K+ Post Jobs</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: '50px', textAlign: 'center' }}>
        <Button
          className="btn"
          sx={{
            borderRadius: '20px',
            bgcolor: '#ff736a',
            color: 'white',
            fontWeight: '500',
            padding: '10px',
            mb: '20px',
          }}
        >
          See More
        </Button>
      </Box>
    </>
  );
};

export default Secondpage;
