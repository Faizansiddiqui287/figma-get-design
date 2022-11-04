import React from 'react'
import { Box, Container } from '@mui/system'
import { Button, Grid, TextField, Typography, Chip } from '@mui/material'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Header = () => {
    return (
        <>
            <Box
                sx={{
                    background: '#5c52ba',
                }}
            >
                <Container>
                    <Grid container spacing={3}>
                        <Grid item lg={1} md={1} sm={12} xs={12}
                            sx={{
                                display: "flex",
                                justifyContent: 'center',
                                alignItems: 'center',

                            }}
                        >
                            <Box
                                sx={{
                                    background: '#249edf',
                                    color: 'white',
                                    textAlign: 'center',
                                    padding: '10px',
                                    transform: "rotate(320deg)",
                                    borderRadius: '8px'
                                }}
                            >
                                <BusinessCenterIcon />
                            </Box>
                        </Grid>

                        <Grid item lg={10} md={10} sm={12} xs={12}
                            sx={{
                                textAlign: 'center',
                                mt: 10
                            }}
                        >
                            <Typography variant='h3'
                                sx={{
                                    color: 'white',
                                    fontWeight: 900
                                }}
                            >
                                Find your dream job here
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white',
                                }}
                            >
                                Find your dream job very easily here by searching the job name. We are providing high demands job for all the job seekers.
                            </Typography>
                            <Box
                                sx={{
                                    mt: 7,
                                    display: { lg: 'flex', md: 'flex', sm: 'block', xs: 'block' },
                                    width: '100%',
                                    justifyContent: 'center',
                                    // alignItems:'center'
                                }}
                            >
                                <Box
                                    sx={{
                                        background: 'white',
                                        borderRadius: '40px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <SearchIcon
                                            sx={{
                                                ml: 2
                                            }}
                                        />
                                        <TextField
                                            sx={{
                                                // border:"none"
                                                m: 1
                                            }}
                                            id="outlined-basic" label="standard" variant="standard" />
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            mr: 2,
                                            ml: 2
                                        }}
                                    >
                                        <PlaceIcon />
                                        <Typography>Location</Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex'
                                        }}
                                    >
                                        <Typography>Remotely</Typography>
                                        <ArrowDropDownIcon />
                                    </Box>

                                </Box>
                                <Button variant="contained"
                                    sx={{
                                        background: '#ff736a',
                                        borderRadius: '40px',
                                        ml: { lg: 2, md: 2, sm: 0, xs: 0 },
                                        mt: { lg: 0, md: 0, sm: 2, xs: 2 }
                                    }}
                                >Contained</Button>

                            </Box>
                        </Grid>

                        <Grid item lg={1} md={1} sm={12} xs={12}
                            sx={{
                                display: "flex",
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >

                            <Box
                                sx={{
                                    background: '#63ad82',
                                    color: 'white',
                                    textAlign: 'center',
                                    padding: '10px',
                                    transform: "rotate(20deg)",
                                    borderRadius: '8px'

                                }}
                            >
                                <PermContactCalendarIcon />
                            </Box>
                        </Grid>

                    </Grid>
                    
                    <Grid container>
                        <Grid item lg={2} md={2} sm={12} xs={12}></Grid>
                        <Grid item lg={8} md={8} sm={12} xs={12}
                        sx={{
                            display:'flex',
                            justifyContent:'center'
                        }}
                        >
                        <Box
                        sx={{
                            // textAlign: 'center',
                            mt: 3,
                            display: {lg:'flex', md:'flex', sm:'block', xs:'block'},
                            // justifyContent: 'center',
                            alignItems: 'center',
                            padding: "10px"
                        }}
                    >
                        <Typography sx={{ color: 'white' }}>Popular keyword:</Typography>
                        <Chip sx={{ color: 'white', m: 1 }} label="UI/UX Design" variant="outlined" />
                        <Chip sx={{ color: 'white', m: 1 }} label="Marketing" variant="outlined" />
                        <Chip sx={{ color: 'white', m: 1 }} label="Development" variant="outlined" />


                    </Box>
                        </Grid>
                        <Grid item lg={2} md={2} sm={12} xs={12}></Grid>

                    </Grid>
                    
                </Container>

            </Box>
        </>
    )
}

export default Header