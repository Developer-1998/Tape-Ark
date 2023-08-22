import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";
import { Button, Grid, Paper, Typography, Card } from '@mui/material';
import { Outlet, Link, useNavigate } from "react-router-dom";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import MuiToggleButton from "@mui/material/ToggleButton";
export const OrderList = () => {
    const [alignment, setAlignment] = React.useState('web');
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const orders = [1, 2, 3, 4]
    const navigate = useNavigate();
    return (
        <Box p={4}>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Grid container direction="row" justifyContent="space-between">
                        <Box mt={2}>
                            <Grid item>
                                <Typography style={{ color: '#617388', fontSize: '28px' }}><b>Your Orders</b></Typography>
                            </Grid>
                        </Box>
                        <Grid item>
                            <ToggleButtonGroup
                                color="primary"
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                aria-label="Platform"
                            >
                                <ToggleButton value="web">This month</ToggleButton>
                                <ToggleButton value="android">Last month</ToggleButton>
                                <ToggleButton value="ios">This Year</ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                    </Grid>
                </Grid>
                {orders && orders.map((l, i) => {
                    return (
                        <Grid item>
                            <Box>
                                <Paper elevation={2} style={{ borderRadius: '20px' }}>
                                    <Box p={4}>
                                        <Grid container direction="column" spacing={2}>
                                            <Grid item>
                                                <Grid container direction="row" justifyContent="space-between" spacing={2}>
                                                    <Grid item>
                                                        <Typography align='left' style={{fontSize:'22px',fontWeight:700,color:'#686868'}}>Amazon</Typography>
                                                        <Typography align='left' style={{fontWeight:400,fontSize:'16px',color:'#686868'}}>06 July 2023</Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Card style={{ border: "1px solid #A5A5A5" , width:'116px'}}>
                                                            <Box p={1}>
                                                                <Typography style={{fontSize:'18px',fontWeight:'400',color:'#686868'}}>OrderId</Typography>
                                                                <Typography style={{fontSize:'18px',fontWeight:700, color: '#AD304C' }}>
                                                                <b>TAINJ0001</b>
                                                                </Typography>
                                                            </Box>
                                                        </Card>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Grid container direction="row" justifyContent="space-between" spacing={2}>
                                                    <Grid item>
                                                        <Card style={{ border: "1px solid #A5A5A5", backgroundColor: "grey", borderRadius: '20px',maxWidth:'431px' }}>
                                                            <Box p={1}>
                                                                <Typography align='left' style={{fontSize:'14px',color:'#333333',fontWeight:700}}>Your order status</Typography>
                                                                <Typography align='left' style={{fontWeight:400,fontSize:'12px',color:'#333333'}}>Awaiting Shipping. ETA 7 Jul 2023, 8 am - 9 pm</Typography>
                                                            </Box>
                                                        </Card>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button size="large" fullWidth={true} variant="contained" style={{ width: '280px', backgroundColor: "#AD304C", borderRadius: '30px', height: '60px', textTransform: "none" }} onClick={() => navigate("/orderTracking")}>View</Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

const ToggleButton = styled(MuiToggleButton)({
    "&.MuiToggleButton-root.Mui-selected": {
        //  color: "#8C1D36",
        // border: "1px solid #8C1D36",
        backgroundColor: "#FFFFFF",
        borderRadius: "8px",
        fontSize: "14px",
    },
    "&.MuiToggleButton-root": {
        color: "#7B809A",
        borderRadius: "8px",
        textTransform: "none !important",
        height: "35px",
        fontSize: "14px",
        backgroundColor: "#E1E8F0",
    },
});