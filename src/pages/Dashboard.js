// import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { getDataFromDataBase, sendDataToDataBase, UserCheaking } from '../config/firebasemethod';
import React, { useEffect, useState } from 'react';
import AdminpanelStu from './adminpanelStu';
import UserpanelQu from '../userpages/userpanelQu';
import AdminpanelQu from './adminpanelQu';
import AdminpanelC from './adminpanelC';
import Adminpanelcourselist from './adminpanelcourselist';
import AdminpanelCR from './adminpanelCR';
import AdminpanelCountry from './adminpanelCountry';
import ViewListIcon from '@mui/icons-material/ViewList';
import TimerIcon from '@mui/icons-material/Timer';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Dashboard() {

  const [datasend, setdatasend] = useState("");
  const [userID, setuserID] = useState("");
  const [list, setlist] = useState("");
  const navigate = useNavigate();
  // in this params we get the user id when they login
  const params = useParams();
  const GotoPages = (e) => {
    if (e == 'Registerd Students') {
      navigate('/adminpanelStu')
    }
    else if (e == 'Quiz Managment') {
      navigate('/adminpanelQu')
      alert("Working")
    }
    else {
      alert("not Working")
    }
  }


  useEffect(() => {
    UserCheaking()
      .then((result) => {
        console.log(result)
        // if this condition is true the in the below code we can asscces any data of login user we can get
        if (params.id == result) {
          setuserID(result);
          // gettododata();
        }
        else {
          navigate('/login');
        }

      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Driver Admin 
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <ListItem disablePadding>
              <ListItemButton>
              <ListItemIcon>
                 <ViewListIcon/>
              </ListItemIcon>
              <Link className='Link' to="" >Registerd Studens</Link>
              </ListItemButton>
          </ListItem>
        <ListItem disablePadding>
              <ListItemButton>
              <ListItemIcon>
                 <PlaylistAddCheckCircleIcon/>
              </ListItemIcon>
              <Link className='Link' to="adminpanelQu" >Quiz Managemnet</Link>
              </ListItemButton>
          </ListItem>
        <ListItem disablePadding>
              <ListItemButton>
              <ListItemIcon>
                 <PlaylistAddCheckCircleIcon/>
              </ListItemIcon>
              <Link className='Link' to="adminpanelC" >Add Courses</Link>
              </ListItemButton>
          </ListItem>
        <ListItem disablePadding>
              <ListItemButton>
              <ListItemIcon>
                 <ViewListIcon/>
              </ListItemIcon>
              <Link className='Link' to="adminpanelcourselist" >Available Course List</Link>
              </ListItemButton>
          </ListItem>
        <ListItem disablePadding>
              <ListItemButton>
              <ListItemIcon>
                 <TimerIcon/>
              </ListItemIcon>
              <Link className='Link' to="adminpanelCR" >Create Result </Link>
              </ListItemButton>
          </ListItem>
        <ListItem disablePadding>
              <ListItemButton>
              <ListItemIcon>
              <CurrencyExchangeIcon/>
              </ListItemIcon>
              <Link className='Link' to="adminpanelCountry" >Add Country </Link>
              </ListItemButton>
          </ListItem>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Routes>
          <Route path="" element={<AdminpanelStu />}></Route>
          <Route path="" element={<AdminpanelStu />}></Route>
        </Routes>
      </Main>
    </Box>
  );
}
