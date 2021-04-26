import React from "react";
import Home from "./components/Home.js"
import AccountProfile from "./components/AccountProfile.js"
import clsx from 'clsx';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import FindInPageRoundedIcon from '@material-ui/icons/FindInPageRounded';
import EventNoteIcon from '@material-ui/icons/EventNote';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import SignUp from "./components/SignUp"
import DehazeSharpIcon from '@material-ui/icons/DehazeSharp';import {
  Button,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  Divider,
  IconButton,
  Typography,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  Container,
  TextField,
  Grid,
} from "@material-ui/core";
const drawerWidth = 240;

const TypographyStyle = withStyles({
  root: {
    color: "#375C23",
  }
})(Typography);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleAccount = (e) => {
    e.preventDefault()
  }
return(
  <div className={classes.root}>
    <CssBaseline />
    <AppBar
      position="fixed"
      style={{background:"#C2F0AA"}}
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
    <Toolbar>
        <Typography variant="h6" noWrap className={classes.title} >
        </Typography>
        <IconButton
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          className={clsx(open && classes.hide)}
        >
          <DehazeSharpIcon />
        </IconButton>
      </Toolbar>
      </AppBar>
      <main
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      <div className={classes.drawerHeader} />
      <Typography paragraph>
      Possible name : Mentality.com
      </Typography>
    </main>
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronLeftIcon style={{color:'#375C23'}}/> : <ChevronRightIcon style={{color:'#375C23'}}/>}
        </IconButton>
      </div>
      <Divider />
      <Router>
      <TypographyStyle>
      {['Home'].map((text, index) => (
          <ListItem 
          button key={text}
          component={Link} to='/'
          >
            <ListItemIcon><PersonOutlineIcon style={{color:'#375C23'}}/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {['My Account'].map((text, index) => (
          <ListItem 
          button key={text}
          component={Link} to='/my-account'
          href="/my-account"
          >
            <ListItemIcon><PersonOutlineIcon style={{color:'#375C23'}}/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {['My Notes'].map((text, index) => (
          <ListItem 
          button key={text}
          component={Link} to='/my-notes'
          >
            <ListItemIcon><EventNoteIcon style={{color:'#375C23'}}/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
       {['Saved Doctors'].map((text, index) => (
          <ListItem 
          button key={text}
          component={Link} to='/saved-doctors'
          >
            <ListItemIcon><PeopleOutlineIcon style={{color:'#375C23'}}/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
       {['Find Doctors'].map((text, index) => (
          <ListItem 
          button key={text}
          component={Link} to='/find-doctor'
          >
            <ListItemIcon><FindInPageRoundedIcon style={{color:'#375C23'}}/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      <Divider />
      <List>
      {['Sign In'].map((text, index) => (
          <ListItem 
          button key={text}
          component={Link} to='/sign-in'
          >
            <ListItemIcon><ExitToAppRoundedIcon style={{color:'#375C23'}}/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      {['Register'].map((text, index) => (
          <ListItem 
          button key={text}
          component={Link} to='/register'
          >
            <ListItemIcon><PostAddRoundedIcon style={{color:'#375C23'}}/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      </TypographyStyle>

      </Router>
      </Drawer>

      <Router>
        <Switch>
          <Route path to="/my-account" >
            <AccountProfile />
          </Route>
          <Route path to="/sign-up">
            <SignUp />
          </Route>
        </Switch>
      </Router>


    </div>
)
}


