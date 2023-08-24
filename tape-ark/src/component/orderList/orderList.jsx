import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Button, Grid, Paper, Typography, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MuiToggleButton from "@mui/material/ToggleButton";
import { ButtonColor } from "../theme/theme";
export const OrderList = () => {
  const [alignment, setAlignment] = React.useState("web");
  const classes = useStyles();
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const orders = [1, 2, 3, 4];
  const navigate = useNavigate();
  return (
    <Box p={4} className={classes.mainContainer}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Grid container direction="row" justifyContent="flex-end">
            <Grid item className={classes.toggleContainer}>
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
        {orders &&
          orders.map((l, i) => {
            return (
              <Grid item>
                <Box>
                  <div className={classes.secondaryConatiner}>
                    <Box p={4}>
                      <Grid container direction="column" spacing={2}>
                        <Grid item>
                          <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            spacing={2}
                          >
                            <Grid item>
                              <Typography align="left">
                                <b>Amazon</b>
                              </Typography>
                              <Typography align="left">06 July 2023</Typography>
                            </Grid>
                            <Grid item>
                              <div className={classes.orderIdContainer}>
                                <Box p={1}>
                                  <Typography
                                    className={classes.orderIdHeading}
                                  >
                                    OrderId
                                  </Typography>
                                  <Typography className={classes.orderidd}>
                                    <b>TAINJ0001</b>
                                  </Typography>
                                </Box>
                              </div>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            spacing={2}
                          >
                            <Grid item>
                              <div className={classes.orderStatusContainer}>
                                <Box p={1}>
                                  <Typography
                                    align="left"
                                    className={classes.orderStatusTextHeading}
                                  >
                                    <b>Your order status</b>
                                  </Typography>
                                  <Typography
                                    align="left"
                                    className={classes.orderstatusData}
                                  >
                                    Awaiting Shipping. ETA 7 Jul 2023, 8 am - 9
                                    pm
                                  </Typography>
                                </Box>
                              </div>
                            </Grid>
                            <Grid item>
                              <Button
                                size="large"
                                fullWidth={true}
                                variant="contained"
                                style={{
                                  width: "280px",
                                  backgroundColor: ButtonColor,
                                  borderRadius: "30px",
                                  height: "60px",
                                  textTransform: "none",
                                }}
                                onClick={() => navigate("/orderTracking")}
                              >
                                View
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  </div>
                </Box>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

const ToggleButton = styled(MuiToggleButton)({
  "&.MuiToggleButton-root.Mui-selected": {
    backgroundColor: ButtonColor,
    borderRadius: "8px",
    color:'#404558',
    fontWeight:600,
    fontSize: "14px",
    border: `1px solid ${ButtonColor}`,
  },
  "&.MuiToggleButton-root": {
    color: "white",
    borderRadius: "8px",
    textTransform: "none !important",
    height: "35px",
    fontSize: "14px",
  },
});

const useStyles = makeStyles({
  mainContainer: {
    backgroundColor: "transparent",
  },
  secondaryConatiner: {
    borderRadius: "20px",
    border: "1px solid #C7C7C7",
    color: "white",
  },
  toggleContainer: {
    height: "40px",
    border: `1px solid ${ButtonColor}`,
    padding: "2px",
    borderRadius: "8px",
  },
  orderIdContainer: {
    backgroundColor: "transparent",
    border: "1px solid #A5A5A5",
  },
  orderIdHeading: {
    color: "#686868",
    fontSize: "18px",
  },
  orderIdData: {
    color: ButtonColor,
    fontWeight: 700,
  },
  orderStatusContainer: {
    border: "1px solid #A5A5A5",
    backgroundColor: "grey",
    borderRadius: "20px",
  },
  orderStatusTextHeading: {
    color: "#333333",
    fontSize: "14px",
    fontWeight: 700,
  },
  orderstatusData: {
    color: "#333333",
    fontSize: "12px",
    fontWeight: 400,
  },
  viewButton: {
    width: "280px",
    backgroundColor: ButtonColor,
    borderRadius: "30px",
    height: "60px",
    textTransform: "none",
  },
});
