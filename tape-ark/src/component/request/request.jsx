import { Grid, Paper, Box, Typography, Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ButtonColor, ButtonColorGradient } from "../theme/theme";
export const Requests = () => {
  const classes = useStyles();
  return (
    <Box>
      <Grid
        container
        direction="column"
        spacing={2}
        justifyContent="flex-start"
      >
        <Grid item>
          <div style={{border:'1px solid #C7CCD0'}}>
            <Box p={2}>
              <Grid container direction="column">
                <Grid item>
                  <Typography
                    align="left"
                    style={{
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                    }}
                  >
                    Tape List
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                  >
                    <Grid item>
                      <Grid
                        container
                        direction="column"
                        style={{ fontSize: "18px", color: "#FFFFFF" }}
                      >
                        <Grid item>
                          <Typography align="left">
                            Hello. We require your tape list to verify the tapes
                            that need to be audited and also to generate an
                            updated invoice if any. Please
                            <br /> upload:
                          </Typography>
                        </Grid>
                        <Grid item>
                          <ul>
                            <li>
                              <Typography align="left">
                                an XLS or CSV file
                              </Typography>
                            </li>
                            <li>
                              <Typography align="left">
                                Please make the file under 10mb for this
                              </Typography>
                            </li>
                            <li>
                              <Typography align="left">
                                <a href="#" style={{ color: "#FFFFFF" }}>
                                  {" "}
                                  Click Here
                                </a>{" "}
                                if you would like to see a sample document
                              </Typography>
                            </li>
                          </ul>
                        </Grid>
                      </Grid>
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
                      >
                        Upload Document
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </div>
        </Grid>
        <Grid item>
          <div style={{border:'1px solid #C7CCD0'}}>
            <Box p={2}>
              <Grid container direction="column" spacing={2} xs={12}>
                <Grid item>
                  <Typography
                    align="left"
                    style={{
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                    }}
                  >
                    Virtual Machine
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                  >
                    <Grid item xs={8}>
                      <Typography
                        align="left"
                        style={{
                          fontSize: "18px",
                          color: "#FFFFFF",
                          fontWeight: 400,
                        }}
                      >
                        Please Upload your virtual machine for us to use the
                        same environment as you are using for your tapes. You
                        can either upload a file to cloud and send us the link
                        or you can upload the VM here.
                      </Typography>
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
                      >
                        Upload Virtual Machine
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="row">
                    <Grid item>
                      <TextField
                        className={classes.input}
                        //id="outlined-basic"
                        //label="Insert Link"
                        placeholder="Insert Link"
                        variant="outlined"
                       // fullWidth={true}
                        InputProps={{
                          endAdornment: (
                            <Button
                              style={{
                                border: `1px solid ${ButtonColor}`,
                                borderRadius: "20px",
                                color: ButtonColor,
                                textTransform: "none",
                                width: "81px",
                                height:'40px'
                              }}
                              variant="outlined"
                              size='large'
                            >
                              Verify
                            </Button>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

//Stying
const useStyles = makeStyles({
  input: {
    width: "859px",
    borderRadius: "8px",
border: "1px solid #C7CCD0",
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: '#C7CCD0'
      }
    },
    "& label.Mui-focused": {
      color: "#C7CCD0",
      height:'50px',
    },
  },
});