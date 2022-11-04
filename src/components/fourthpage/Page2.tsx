import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Grid, Typography ,Button} from '@mui/material'
import { Box } from '@mui/system'

function Page2(){
    return(
        <Grid container  sx={{marginTop:"100px"}}>
            <Grid item lg={2} sm={2} md={2} xs={2} xl={2}></Grid>
            <Grid item lg={8} sm={12} md={12} xs={12} >
                <Box  sx={{marginTop:"50px"}}>
                    <Typography sx={{fontSize:"40px",fontWeight:'bold'}}>Read Our Blogs</Typography>
                    <Typography sx={{fontSize:"15px",color:"gray"}}>Read our regular blog about the jobs.</Typography>
                    <Typography sx={{fontSize:"15px",color:"gray"}}>News and alert of any kind of jobs  from our blogs</Typography>
                </Box>
              <Grid container spacing={3} sx={{marginTop:"50px"}}>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <Box sx={{textAlign:"-webkit-center"}}>
                <Card sx={{ maxWidth: 345,height:"auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI6iYd8OAzotITNMZO6_2HHp7bYP8Xtp5Ihw&usqp=CAU"
                    alt="green iguana"

        />
        <CardContent>
          <Typography gutterBottom variant="h6" sx={{fontWeight:"bold"}} component="div">
            Handle work metting 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          We make job finding finding in more easier for the job seelers to find the job
          </Typography>
          <Button sx={{marginTop:"20px"}}>Read More →</Button>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
                </Grid>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <Box  sx={{textAlign:"-webkit-center"}}>
                    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPIHF3m_ZGvSTZp4G5T73wRsOCgm5E76YDw&usqp=CAU" alt="green iguana"

        />
        <CardContent>
          <Typography gutterBottom variant="h6" sx={{fontWeight:"bold"}} component="div">
            How to find job easier
          </Typography>
          <Typography variant="body2" color="text.secondary">
          We make job finding finding in more easier for the job seelers to find the job
          </Typography>
          <Button sx={{marginTop:"20px"}}>Read More →</Button>
        </CardContent>
      </CardActionArea>
    </Card>
                     </Box>
                </Grid>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <Box  sx={{textAlign:"-webkit-center"}}>
                    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmIcUsGByiKxUz5sqnO6hp3XJwHv6f0pqbRA&usqp=CAU" alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" sx={{fontWeight:"bold"}} component="div">
            Servive in your job area
          </Typography>
          <Typography variant="body2" color="text.secondary">
          We make job finding finding in more easier for the job seelers to find the job
          </Typography>
          <Button sx={{marginTop:"20px"}}>Read More →</Button>
        </CardContent>
      </CardActionArea>
    </Card>
                   </Box>
                </Grid>
              </Grid>
               </Grid>
            <Grid item lg={2} sm={2} md={2} xs={2} xl={2}></Grid>
        </Grid>
    )
}
export default Page2;