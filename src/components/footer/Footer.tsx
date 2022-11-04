import React from 'react';
import { Box, } from '@mui/system';
import CircleIcon from '@mui/icons-material/Circle';
import { Typography,Container ,Button} from '@mui/material';
import './Footer.css';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import ElectricBoltRoundedIcon from '@mui/icons-material/ElectricBoltRounded';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import './Footer.css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
  return (
 <>
 <Box sx={{width:'100%', minHeight:"35vh",backgroundColor:"#5c52ba"}}>

  <Box sx={{display:'flex',justifyContent:'space-around',padding:'5em 0em',flexWrap:'wrap'}}>
  <Box>
    <CircleIcon sx={{fontSize:'35px',color:'#e4a342',}}/>
    </Box>
    <Box sx={{textAlign:'center'}}>
      <Typography sx={{color:'#ffffff',fontSize:'3em',fontWeight:'bold'}}>Subscribe Our Newsletter</Typography>
      <Typography sx={{color:'#ffffff',fontSize:'1em'}}>Subscribe our newsletter for further updates</Typography>
 <Box sx={{textAlign:'center'}}>
 <input type='text' placeholder='Enter your Emial address' id='inputid'/>
 <Button id='btnsubscribe' sx={{color:"white"}}>Subsrcibe</Button>
 </Box>
    </Box>
    <Box>
   
    <CircleIcon sx={{fontSize:'18px',color:"#249edf",paddingTop:{lg:'4em',md:"3em",sm:'2em',xs:'13m'}}}/>

    </Box>
  </Box>
 
  </Box>

   
   {/* start footer */}
   <Box sx={{backgroundColor:'#1b1837',width:'100%',minHeight:'35vh',color:'white'}}>
<Box sx={{padding:{lg:'3em 7em 2em 13em',md:"3em 7em 2em 13em",sm:"3em 5em 2em 5em",xs:"3em 7em 2em 3em"}}}>
      <Grid container>
        <Grid item  lg={3} md={4} sm={6} xs={12} spacing={2}>
        <Typography sx={{fontSize:'2em',fontWeight:'bold'}}>Work<span style={{color:'#5c52ba'}}>Up</span></Typography>
     
         
       
         <Box sx={{display:'flex'}}>
        <Typography style={{marginTop:'1.5em',backgroundColor: '#ff736a', height: 30, width: 30, display:'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 30,margin:'0.5em'}}>
        <FacebookRoundedIcon sx={{color:'#ffff',fontSize:'25px'}} />
                </Typography>
                <Typography style={{marginTop:'1.5em',backgroundColor: '#ff736a', height: 30, width: 30, display:'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 30,margin:'0.5em'}}>
        <TwitterIcon sx={{color:'#ffff',fontSize:'25px'}} />
                </Typography>
                <Typography style={{marginTop:'1.5em',backgroundColor: '#ff736a', height: 30, width: 30, display:'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 30,margin:'0.5em'}}>
        <LinkedInIcon sx={{color:'#ffff',fontSize:'25px',borderRadius:"1em"}} />
                </Typography>
            
                </Box>
                <Box sx={{margin:'1em 0em'}}>
                <Typography>hellobansil@gmail.com</Typography>
                <Typography>+880 335 234 785</Typography>
                </Box>

                
        </Grid>
       
        <Grid item  lg={3} md={4} sm={6} xs={12} spacing={2}>
          <Typography sx={{fontSize:"1em",fontWeight:'bold'}}>Company</Typography>
          <Typography sx={{fontSize:"1em",paddingTop:'1em'}}>Carrier</Typography>
          <Typography sx={{fontSize:"1em"}}>About Us</Typography>
          <Typography sx={{fontSize:"1em"}}>Blog</Typography>
          <Typography sx={{fontSize:"1em"}}>Press Info</Typography>

          <Typography sx={{fontSize:"1em"}}>Features</Typography>

          </Grid>
          <Grid item  lg={3} md={4} sm={6} xs={12} spacing={2}>
          <Typography sx={{fontSize:"1em",fontWeight:'bold'}}>Features</Typography>
          <Typography sx={{fontSize:"1em",paddingTop:'1em'}}>Post a job</Typography>
          <Typography sx={{fontSize:"1em"}}>Apply now</Typography>
          <Typography sx={{fontSize:"1em"}}>Find a job</Typography>
          <Typography sx={{fontSize:"1em"}}>Client Stories</Typography>

          <Typography sx={{fontSize:"1em"}}>Gallery</Typography>

          </Grid>



          <Grid item  lg={3} md={4} sm={6} xs={12} spacing={2}>
          <Typography sx={{fontSize:"1em",fontWeight:'bold'}}>Teams</Typography>
          <Typography sx={{fontSize:"1em",paddingTop:'1em'}}>Privacy Policy</Typography>
          <Typography sx={{fontSize:"1em"}}>Terms & Condition </Typography>
          <Typography sx={{fontSize:"1em"}}>Copyright Policy</Typography>
          <Typography sx={{fontSize:"1em"}}>Security</Typography>

          <Typography sx={{fontSize:"1em"}}>Fees & charge</Typography>

          </Grid>



        </Grid>

       
       



        </Box>
        </Box>

 </>
  )
}

export default Footer