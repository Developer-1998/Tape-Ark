import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 120;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerCollapse = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  boxShadow: "4px 0px 11px 0px #0000001A",
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const Navbar = (props) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = React.useState(null);

  const openView = (index, viewUrl) => {
    setSelectedMenuItem(index);
    // Open Route here...
    props.onViewClicked(viewUrl);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <Toolbar />
        <List>
          {[
            {
              label: "Home",
              iconUrl: "/assets/img/home.png",
              viewUrl: "/home",
            },
            {
              label: "Order",
              iconUrl: "/assets/img/order.png",
              viewUrl: "/order",
            },
            {
              label: "Team",
              iconUrl: "/assets/img/account.png",
              viewUrl: "/team",
            },
            {
              label: "Settings",
              iconUrl: "/assets/img/settings.png",
              viewUrl: "/settings",
            },
            {
              label: "Restores",
              iconUrl: "/assets/img/restore.png",
              viewUrl: "/restores",
            },
          ].map((navItem, index) => (
            <ListItem
              key={navItem.label}
              disablePadding
              sx={{
                height: open ? "85px" : "85px",
                display: "block",
                borderRadius: "4px",
                mx: 0.5,
                ...(selectedMenuItem === index && {
                  background:
                    "linear-gradient(180deg, #AD304C 0%, #8C1D36 100%)",
                }),
              }}
            >
              <ListItemButton
                onClick={() => openView(index, navItem.viewUrl)}
                sx={{
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: "center",
                    ...(selectedMenuItem === index && {
                      colorAdjust: "#FFFFFF",
                    }),
                  }}
                >
                  <img
                    width={"36px"}
                    height={"36px"}
                    alt={navItem.label}
                    src={process.env.PUBLIC_URL + navItem.iconUrl}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={navItem.label}
                  primaryTypographyProps={{
                    style: {
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "18px",
                      color: selectedMenuItem === index ? "#FFFFFF" : "#617388",
                    },
                  }}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <DrawerCollapse>
          {/* Toggle Drawer Button */}
          <IconButton
            color="inherit"
            aria-label="toggle drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            edge="start"
            sx={{ marginRight: open ? 5 : 0 }}
          >
            {open ? (
              theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )
            ) : (
              <MenuIcon />
            )}
          </IconButton>
        </DrawerCollapse>
      </Drawer>
    </>
  );
};
