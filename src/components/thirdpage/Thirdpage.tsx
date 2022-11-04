import React from 'react';
import { Box, Typography, Button, Grid, Card,Avatar,CardHeader, CardContent, CardMedia, Select, MenuItem, FormHelperText, FormControl, InputLabel } from '@mui/material'

const Thirdpage = () => {
  return (
    <>
        <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: '#f4f4f7'
        }}>
        
        <Grid
          container
          spacing={3}
          sx={{
            marginTop: "30px"
          

          }}
        >
           <Box sx={{width:"100%", height:"auto"}}>
          <Typography variant="h3" align="center" sx={{ fontWeight: "bold" }}>Explorer Featured Jobs</Typography>
          <Typography variant="body2" align="center" sx={{marginTop:"10px"}}>explorer all the jobs by category and find your job that you badly need</Typography>
        </Box>
           <Grid item xs={12} sm={6} md={4} lg={4} >
              <Card  sx={{height:"auto", width:"auto", marginLeft:10, marginRight:5, background:'white'}} >
                <CardContent>
                      <Typography variant="body2" component="p" sx={{color:"black", fontWeight:"BOLD",fontSize:"15px", mt:"20px"}}>Website Developer in Dropbox</Typography><br/>
                      <Typography variant="body2" sx={{color:"black", fontFamily:"sans-serif"}} gutterBottom>
                      New York </Typography>
                <CardHeader avatar={<Avatar alt="Remy Sharp" src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/dropbox-512.png" />} title={<b >DropBox</b>} subheader={"5 Days ago"} />
                </CardContent>
              </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} >
              <Card  sx={{height:"auto", width:"auto", marginLeft:10, marginRight:5, background:'white'}} >
                <CardContent>
                      <Typography variant="body2" component="p" sx={{color:"black", fontWeight:"BOLD",fontSize:"15px", mt:"20px"}}>Backend Developer for Intel</Typography><br/>
                      <Typography variant="body2" sx={{color:"black", fontFamily:"sans-serif"}} gutterBottom>
                      New York </Typography>
                <CardHeader avatar={<Avatar alt="Remy Sharp" src="https://www.pngimages.in/uploads/png-thumb/Intel_Transparent_Image.png" />} title={<b >Intel</b>} subheader={"5 Days ago"} />
                </CardContent>
              </Card>
            </Grid><Grid item xs={12} sm={6} md={4} lg={4} >
              <Card  sx={{height:"auto", width:"auto", marginLeft:10, marginRight:5, background:'white'}} >
                <CardContent>
                      <Typography variant="body2" component="p" sx={{color:"black", fontWeight:"BOLD",fontSize:"15px", mt:"20px"}}>Digital Marketing manager in Pepsi</Typography><br/>
                      <Typography variant="body2" sx={{color:"black", fontFamily:"sans-serif"}} gutterBottom>
                      New York </Typography>
                <CardHeader avatar={<Avatar alt="Remy Sharp" src="https://www.freepnglogos.com/uploads/pepsi-png-logo/pepsi-logo-pepsi-symbol-meaning-history-png-logo-3.png" />} title={<b >Pepsi</b>} subheader={"5 Days ago"} />
                </CardContent>
              </Card>
            </Grid><Grid item xs={12} sm={6} md={4} lg={4} >
              <Card  sx={{height:"auto", width:"auto", marginLeft:10, marginRight:5, background:'white'}} >
                <CardContent>
                      <Typography variant="body2" component="p" sx={{color:"black", fontWeight:"BOLD",fontSize:"15px", mt:"20px"}}>Frontend Developer for Google</Typography><br/>
                      <Typography variant="body2" sx={{color:"black", fontFamily:"sans-serif"}} gutterBottom>
                      New York </Typography>
                <CardHeader avatar={<Avatar alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" />} title={<b >Google</b>} subheader={"5 Days ago"} />
                </CardContent>
              </Card>
            </Grid><Grid item xs={12} sm={6} md={4} lg={4} >
              <Card  sx={{height:"auto", width:"auto", marginLeft:10, marginRight:5, background:'white'}} >
                <CardContent>
                      <Typography variant="body2" component="p" sx={{color:"black", fontWeight:"BOLD",fontSize:"15px", mt:"20px"}}>UI/UX designer for Wordpress</Typography><br/>
                      <Typography variant="body2" sx={{color:"black", fontFamily:"sans-serif"}} gutterBottom>
                      New York </Typography>
                <CardHeader avatar={<Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png" />} title={<b >Apple</b>} subheader={"5 Days ago"} />
                </CardContent>
              </Card>
            </Grid><Grid item xs={12} sm={6} md={4} lg={4} >
              <Card  sx={{height:"auto", width:"auto", marginLeft:10, marginRight:5, background:'white'}} >
                <CardContent>
                      <Typography variant="body2" component="p" sx={{color:"black", fontWeight:"BOLD",fontSize:"15px", mt:"20px"}}>Marketing intern for Instagram app</Typography><br/>
                      <Typography variant="body2" sx={{color:"black", fontFamily:"sans-serif"}} gutterBottom>
                      New York</Typography>
                <CardHeader avatar={<Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" />} title={<b >Instagram</b>} subheader={"5 Days ago"} />
                </CardContent>
              </Card>
            </Grid>
        </Grid>
        <Typography align='center'>
    <Button
      color='primary'
      size='large'
      type='submit'
      variant='contained'
      sx={{marginTop:"30px", backgroundColor: '#ff736a', borderRadius:"30px"}}
     >
      See More
    </Button>
  </Typography>

      </Box>
      <Box
      sx={{
        width: "100%",
        height: "100%",
          backgroundColor: '#4141a5',
        }}>
        <Grid
          container
          spacing={3}
          sx={{
            marginTop: "30px",

          }}
        >
        <Grid item xs={12} sm={6} md={4} lg={4} >
          <Box sx={{ color: "white" }}>
            <Typography  align="center" variant="h3" sx={{ color:"white", fontWeight: "BOLD" }}>4M</Typography><br />
            <Typography  align="center" variant="body2" sx={{color:"white"}}>4 million daily active user</Typography><br/>
          </Box>
           </Grid>
           <Grid item xs={12} sm={6} md={4} lg={4} >
          <Box sx={{ color: "white" }}>
            <Typography  align="center" variant="h3" sx={{ color:"white", fontWeight: "BOLD" }}>12K</Typography><br />
            <Typography  align="center" variant="body2" sx={{color:"white"}}>Over 12k open job position</Typography><br/>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} >
          <Box>
            <Typography  align="center" variant="h3" sx={{ color: "white", fontWeight: "BOLD" }}>20M</Typography><br />
            <Typography  align="center" variant="body2" sx={{color:"white"}}>Over 20 million stories shared</Typography><br/>
          </Box>
        </Grid>
        </Grid>
        </Box>
    </>
  )
}

export default Thirdpage