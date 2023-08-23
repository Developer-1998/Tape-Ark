import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";
import { Button, Grid, Paper, Typography, Card } from '@mui/material';
import { useNavigate } from "react-router-dom";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import MuiToggleButton from "@mui/material/ToggleButton";
import { ButtonColor, ButtonColorGradient } from "../theme/theme";
export const OrderList = () => {
    const [alignment, setAlignment] = React.useState('web');
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const orders = [1, 2, 3, 4]
    const navigate = useNavigate();
    return (
        <Box p={4} style={{backgroundColor:"transparent"}}>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Grid container direction="row" justifyContent="space-between">
                        <Box mt={2}>
                            <Grid item>
                                <Typography style={{ color: '#617388', fontSize: '28px' }}><b>Your Orders</b></Typography>
                            </Grid>
                        </Box>
                        <Grid item style={{height:'40px', border:`1px solid ${ButtonColor}`,padding:'2px',borderRadius:'8px'}}>
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
                                <Paper elevation={2} style={{ borderRadius: '20px',backgroundColor:"transparent",border:'1px solid white' }}>
                                    <Box p={4}>
                                        <Grid container direction="column" spacing={2}>
                                            <Grid item>
                                                <Grid container direction="row" justifyContent="space-between" spacing={2}>
                                                    <Grid item>
                                                        <Typography style={{color:'white'}} align='left'><b>Amazon</b></Typography>
                                                        <Typography style={{color:'white'}} align='left'>06 July 2023</Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Card style={{ backgroundColor:"transparent",border:'1px solid white' }}>
                                                            <Box p={1}>
                                                                <Typography>OrderId</Typography>
                                                                <Typography style={{ color: ButtonColor  }}>
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
                                                        <Card style={{ border: "1px solid #A5A5A5", backgroundColor: "grey", borderRadius: '20px' }}>
                                                            <Box p={1}>
                                                                <Typography  align='left'><b>Your order status</b></Typography>
                                                                <Typography  align='left'>Lorem ipsum dolor sit </Typography>
                                                            </Box>
                                                        </Card>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button size="large" fullWidth={true} variant="contained" style={{ width: '280px', backgroundColor: ButtonColor, borderRadius: '30px', height: '60px', textTransform: "none" }} onClick={() => navigate("/orderTracking")}>View</Button>
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
        backgroundColor: ButtonColor,
        borderRadius: "8px",
        fontSize: "14px",
        border: `1px solid ${ButtonColor}`
    },
    "&.MuiToggleButton-root": {
        color: "white",
        borderRadius: "8px",
        textTransform: "none !important",
        height: "35px",
        fontSize: "14px",
       },
});