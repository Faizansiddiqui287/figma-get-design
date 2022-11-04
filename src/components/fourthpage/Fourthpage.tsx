import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import React from 'react'

const Fourthpage = () => {
  const [value, setValue] = React.useState(4);
  return (
    <Grid container>
      <Grid item lg={2} sm={2} md={2} xs={2}></Grid>
      <Grid item lg={8} sm={8} md={8} xs={8}> 
         <Box sx={{marginTop:"50px"}}>
          <Typography sx={{fontSize:"38px",fontWeight:"bold"}}>What Jobseekar Say</Typography>
          <Typography sx={{fontSize:"15px",color:"gray",marginTop:"15px"}}>Read and understand what job seekers are saying about our</Typography>
          <Typography sx={{fontSize:"15px",color:"gray"}}>platform and then you can realise the need</Typography>
        </Box>
        <Grid container spacing={3} sx={{marginTop:"50px"}}>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                  <Box sx={{textAlign:"-webkit-center"}}>
                    <Card sx={{ maxWidth: 345, }}>
           <CardActionArea>
        <CardMedia
        sx={{width:"50px",height:"50px",}}
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqlvxC6znHwLTt--Jl00MKMeI8gcb50az3Q&usqp=CAU"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Trend Boult
          </Typography>
          <Box
      sx={{
        '& > legend': { mt: 4 },
      }}
    >
           <Rating name="read-only" value={value} readOnly />
    
    </Box>
          <Typography>Designer</Typography>

          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                    </Box>
                </Grid>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                  <Box sx={{textAlign:"-webkit-center"}}>
                    <Card sx={{ maxWidth: 345, }}>
           <CardActionArea>
        <CardMedia
        sx={{width:"50px",height:"50px",}}
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqlvxC6znHwLTt--Jl00MKMeI8gcb50az3Q&usqp=CAU"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">Mark Taylor</Typography>
          <Box
      sx={{
        '& > legend': { mt: 4 },
      }}
    >
           <Rating name="read-only" value={value} readOnly />
    
    </Box>
          <Typography>Marketar</Typography>

          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                    </Box>
                </Grid>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                  <Box sx={{textAlign:"-webkit-center"}}>
                    <Card sx={{ maxWidth: 345, }}>
           <CardActionArea>
        <CardMedia
        sx={{width:"50px",height:"50px",}}
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqlvxC6znHwLTt--Jl00MKMeI8gcb50az3Q&usqp=CAU"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Matt Henry
          </Typography>
          <Box
      sx={{
        '& > legend': { mt: 4 },
      }}
    >
           <Rating name="read-only" value={value} readOnly />
    
    </Box>
          <Typography>Developer</Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                    </Box>
                </Grid>
              </Grid>
      </Grid>
      <Grid item lg={2} sm={2} md={2} xs={2}></Grid>
    </Grid>
  )
}

export default Fourthpage;