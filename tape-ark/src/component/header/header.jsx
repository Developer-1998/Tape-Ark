import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search'
import { InputBase } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

const drawerWidth = 120;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));


export const Header = ()=> {

return (
    <>
        <AppBar position="fixed" sx={{ width: '100%', backgroundColor: '#FFFFFF' }}>
            <Toolbar sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
                <div className='col-md-2'>
                    <img width={'36px'}
                        height={'36px'}
                        alt="tapeark"
                        src={process.env.PUBLIC_URL + '/assets/img/tapeark_logo.png'} />
                </div>
                <div className='col-md-10'>
                    {/* Seach bar */}
                    <InputBase
                        type="text"
                        placeholder="Search..."
                        startAdornment={
                            <InputAdornment position="start" sx={{ color: '#A6AEC1' }} >
                                <SearchIcon sx={{ marginRight: '4px' }} />
                            </InputAdornment>
                        }
                        sx={{
                            fontFamily: 'Inter',
                            fontSize: '16px',
                            fontWeight: '400',
                            lineHeight: '15px',
                            letterSpacing: '0em',
                            textAlign: 'left',
                            width: '241px',
                            height: '41px',
                            backgroundColor: '#E9EEF4',
                            borderRadius: '20px',
                            paddingLeft: '20px',
                            border: 'none',
                            outline: 'none',
                        }}

                    />
                    {/* Notification Icon */}
                    <IconButton sx={{ paddingLeft: '12px' }} aria-label="notifications">
                        <NotificationsOutlinedIcon />
                    </IconButton>
                    {/* Avatar */}
                    <Button>
                        <Avatar alt="User Avatar" src={'/assets/dummyprofile.png'} sx={{ width: 32, height: 32 }}></Avatar>
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    </>
)
}
