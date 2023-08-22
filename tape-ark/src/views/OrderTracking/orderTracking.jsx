import * as React from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { Requests } from "../../component/request/request";

export const OrderTracking = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 40,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgba(140, 29, 54, 1) 0%,rgba(140, 29, 54, 1) 50%,rgba(140, 29, 54, 1) 100%)",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
    },
  }));

  const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#fff",
    zIndex: 1,
    color: "#82839F",
    width: 80,
    height: 80,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    border: "3px solid #C7CCD0",
    ...(ownerState.active &&
      {
        // backgroundImage:
        //   "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      }),
    ...(ownerState.completed && {
      background: "rgba(140, 29, 54, 0.2)",
      color: "#8C1D36;",
    }),
  }));

  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;
    const icons = {
      1: "Shipping",
      2: "Audit",
      3: "Ingestion",
    };
    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };

  const steps = [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
  ];

  return (
    <>
      <div className="breadcrumb">
        <img src="/assets/img/cart.svg" alt="" />
        <img src="/assets/img/arrow_left.svg" alt="" />
        <small className="grey-color">Your Orders</small>
        <img src="/assets/img/arrow_left.svg" alt="" />
        <small className="grey-color">TAINJ0001</small>
      </div>
      <div className="heading">
        <h1>TAINJ0001</h1>
      </div>
      <hr />
      <div className="tab-section">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Tracking" value="1" />
              <Tab label="Details" value="2" />
              <Tab label="Request" value="3" />
              <Tab label="Messages" value="4" />
              <Tab label="Help" value="5" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className="stepper[section">
              <Stack sx={{ width: "100%" }} spacing={4}>
                <Stepper
                  alternativeLabel
                  activeStep={1}
                  connector={<ColorlibConnector />}
                >
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel
                        StepIconComponent={ColorlibStepIcon}
                      ></StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Stack>
            </div>
            <VerticalLinearStepper />
          </TabPanel>
          <TabPanel value="2">Details</TabPanel>
          <TabPanel value="3">
            <Requests />
          </TabPanel>
          <TabPanel value="4">Messages</TabPanel>
          <TabPanel value="5">Help</TabPanel>
        </TabContext>
      </div>
    </>
  );
};

const steps = [
  {
    label: "Request Recieved",
    description: ``,
    date: `26 Jul, 2023`,
    status: "completed",
  },
  {
    label: "Shipment Started",
    description: "",
    status: "inprogress",
  },
  {
    label: "Shipment Reached",
    description: ``,
    status: "disabled",
  },
  {
    label: "Boxes Delivered",
    description: ``,
    status: "disabled",
  },
  {
    label: "Tapes Picked Up",
    description: ``,
    status: "disabled",
  },
  {
    label: "Tapes Delivered",
    description: ``,
    status: "disabled",
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              StepIconComponent={
                step.status == "disabled"
                  ? DisabledStepIcon
                  : step.status == "completed"
                  ? CompletedStepIcon
                  : InprogressStepIcon
              }
            >
              <span className="verticalStepLabel">{step.label}</span>
              <br></br>
              <small>{step.date}</small>
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                {/* <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div> */}
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {/* {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )} */}
    </Box>
  );
}

function CompletedStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <>
      <div className="verticalStepperIcon_Completed">
        <CheckIcon></CheckIcon>
      </div>
    </>
    // <QontoStepIconRoot ownerState={{ active }} className={className}>
    //   {completed ? (
    //     <Check className="QontoStepIcon-completedIcon" />
    //   ) : (
    //     <div className="QontoStepIcon-circle" />
    //   )}
    // </QontoStepIconRoot>
  );
}
function InprogressStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <>
      <div className="verticalStepperIcon_Inprogress">
        <AccessTimeFilledIcon></AccessTimeFilledIcon>
      </div>
    </>
    // <QontoStepIconRoot ownerState={{ active }} className={className}>
    //   {completed ? (
    //     <Check className="QontoStepIcon-completedIcon" />
    //   ) : (
    //     <div className="QontoStepIcon-circle" />
    //   )}
    // </QontoStepIconRoot>
  );
}
function DisabledStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <>
      <div className="verticalStepperIcon_Disabled"></div>
    </>
    // <QontoStepIconRoot ownerState={{ active }} className={className}>
    //   {completed ? (
    //     <Check className="QontoStepIcon-completedIcon" />
    //   ) : (
    //     <div className="QontoStepIcon-circle" />
    //   )}
    // </QontoStepIconRoot>
  );
}
