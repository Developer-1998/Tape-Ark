import React, { useState } from 'react';
import { AppBar, Toolbar, List, ListItem, ListItemText, InputBase, Avatar, IconButton, Typography, Paper, TextField, Button, TextareaAutosize, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';import SendIcon from '@mui/icons-material/Send';
import moment from 'moment';
import Stack from '@mui/material/Stack';
import { ButtonColor, ButtonColorGradient, PrimaryColor } from '../theme/theme';

const drawerWidth = 380;

export const Messages = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  return (
    <div style={{ display: 'flex', backgroundColor: PrimaryColor}}>
      {/* Left Drawer */}
      <div
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: { xs: 'none', sm: 'block' },
        }}
      >
        <div style={{maxHeight: '828px', border: '1px solid #C7CCD0'}}>
          {/* Search Bar */}
          <Paper
            component="form"
            sx={{
              backgroundColor: '#E9EEF4',
              padding: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              height: '60px',
              marginTop: '16px',
              marginBottom: '16px',
              width: '340px',
              borderRadius: '8px',
              marginLeft: '16px',
              border: 'none',
              opacity: 0.8
            }}
          >
            <IconButton sx={{ p: '10px' , color:'#A6AEC1'}} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase sx={{ fontFamily:'Inter',fontWeight: 400, fontSize:'12px', lineHeight:'15px', color:'#A6AEC1', ml: 1, flex: 1 }} placeholder="Search" />
          </Paper>
          {/* People List */}
          <List>
            {[{name:'Andrew Kirk',designation:'Customer Support',lastSeen:'5 mins ago'},
              {name:'Thomas Newman',designation:'Technical Lead',lastSeen:'15 mins ago'},
              {name:'Rishika Desh',designation:'Ingestion Team',lastSeen:'22 mins ago'},
              {name:'Jennifer M',designation:'Customer Support',lastSeen:'1 hr ago'},
              {name:'Tracy Connely',designation:'Billing',lastSeen:'2 hrs ago'},
              {name:'Riddik',designation:'Customer Manager',lastSeen:'Yesterday'},
              {name:'Christain',designation:'Customer Support',lastSeen:'Apr 10'},
              {name:'Joanah',designation:'Tape Ark BOT',lastSeen:'Apr 8'}].map(( person, index) => (
              <ListItem
                key={index}
                button
                onClick={() => handlePersonClick(person)}
                sx={{
                  height: '92px',
                  width: '380px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: '1px solid #EAEAEA',
                  ...(selectedPerson?.name === person.name && {
                    backgroundColor: '#C7CCD0',
                  }),
                }}
              >
                <Stack direction="row" alignItems="center">
                  <Avatar sx={{ height:'52px', width:'52px', marginRight: '10px'}} alt=' '  src="/path/to/avatar.png" />
                  <div>
                    <ListItemText
                      primary={person.name}
                      secondary={person.designation}
                      primaryTypographyProps={{
                        style: {
                          fontFamily: 'Poppins',
                          fontWeight: 400,
                          fontSize: '16px',
                          color: '#FFFFFF'
                        },
                      }}
                      secondaryTypographyProps={{
                        style: {
                          fontFamily: 'Poppins',
                          fontWeight: 400,
                          fontSize: '14px',
                          opacity: 0.8,
                          color: '#5F5F5F'
                        },
                      }}
                    />
                  </div>
                </Stack>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '14px',
                    opacity: 0.8,
                    color: '#5F5F5F'
                  }}
                >
                  {person.lastSeen} {/* moment.duration(person.lastSeen.diff(now)) */}
                </Typography>
              </ListItem>
            ))}
          </List>
        </div>
      </div>

      {/* Content Area */}
      <div style={{ flexGrow: 1,display: 'flex', flexDirection: 'column',
       ...(selectedPerson == null) && { display: 'none' } }}>
        <AppBar position="static" sx={{ backgroundColor: PrimaryColor, boxShadow: 'none', py: '12px', border: '1px solid white'}}>
          <Toolbar>
            {selectedPerson?.name && (
              <>
                <Avatar sx={{ height:'75px', width:'75px', marginRight: '16px' }} alt=' ' src="/path/to/avatar.png" />
                <Stack direction="column" alignItems="flex-start" spacing={0}>
                <Typography sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '18px',
                  color: '#FFFFFF'
                }} variant="h6">{selectedPerson?.name}</Typography>
                                <Typography sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#FFFFFF',
                  opacity: 0.8
                }} variant="h6">{selectedPerson?.designation}</Typography></Stack>
              </>
            )}
          </Toolbar>
        </AppBar>
        {/* Messages */}
        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px', backgroundColor: PrimaryColor, height: '100%'}}>
          {/* Render messages here */}

          {/* Messages which apper on the left */}
          <Stack direction="row" alignItems="flex-start" spacing={2} mb={2} mt={2}>
            <Avatar sx={{ height: '52px', width: '52px', marginRight: '10px' }} alt=' ' src="/path/to/avatar.png" />
            <Stack direction="column" alignItems="flex-start" spacing={0}>
              <Box 
                sx={{
                  maxWidth: '580px',
                  minWidth: '480px',
                }}
              >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between"  }}>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: '18px', color: '#FFFFFF', fontWeight: 500, lineHeight: '30px'}} variant="body1">{selectedPerson?.name}</Typography>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', color: '#FFFFFF', opacity: 0.6 }}>{moment().format('dddd, h:mm a')}</Typography>
              </div>
                <Box sx={{
                  backgroundColor: '#E9ECF5',
                  padding: '10px',
                  paddingTop: '20px',
                  borderRadius: '8px',
                  marginBottom: '10px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  maxWidth: '580px',
                  minWidth: '480px',
                  width: 'fit-content',
                  border: '1px'
                }}>I will need 3-4 working days to resolve this.
                </Box>
              </Box>
            </Stack>
          </Stack>

          {/* Messages which appear on the right */}
          <Stack direction="column" alignItems="flex-end" spacing={0}>

            <Box
              sx={{
                maxWidth: '580px',
                minWidth: '480px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center',justifyContent: "space-between"  }}>
                <Typography sx={{ fontSize: '18px', color: '#FFFFFF' }} variant="body1">You</Typography>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', color: '#FFFFFF', opacity: 0.6 }}>{'Now'}</Typography> {/* Display date and time here */}
              </div>
              <Box sx={{
                backgroundColor: ButtonColor,
                padding: '10px',
                paddingTop: '20px',
                borderRadius: '8px',
                marginBottom: '10px',
                maxWidth: '580px',
                minWidth: '480px',
                width: 'fit-content',
                height: '40px',
                marginLeft: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                border: '1px'
              }}>Sure, I will wait for a resolution.
              </Box>
            </Box>
          </Stack>


        {/* Typing Area */}  
        <div style={{ padding: '20px', backgroundColor: PrimaryColor}}>

        <Paper
          component="form"
          elevation={0}
          sx={{
            width:'100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '5px 10px',
            border: '1px solid #E9EEF4',
            backgroundColor: PrimaryColor,
            mt: 36
          }}
        >
          <InputBase
            placeholder="Type a message here"
            multiline
            minRows={3}
            maxRows={3}
            endAdornment={
                <InputAdornment position='end' sx={{ color: '#A6AEC1', marginTop: '60px'}} >
                                <IconButton aria-label="attachment">
              <AttachFileIcon />
            </IconButton>
            <Button
              variant="contained"
              sx={{
                background: ButtonColorGradient,
                width: '80px',
                height: '40px',
                borderRadius: '20px',
                color: 'white'              }}
            >
              <SendIcon />
            </Button>
                </InputAdornment>
            }
            sx={{ flexGrow: 1, mr: 1, border: 'none', resize: 'none', mb: 2, color:'#C7CCD0'}}
          />
        </Paper>
            </div>

        </div>

      </div>
    </div>
  );
};
