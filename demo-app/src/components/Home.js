import React, { useEffect, useState } from "react";
import { Fade, Grow, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./Home.css"
import { Route } from "react-router";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: 'auto',
    maxWidth: 580,
  },
  image: {
    width: 328,
    height: 328,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxHeight: '110%',
    maxWidth: '180%',
  },

}));


export default function Home(){
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
 return(
  <div className="page-container" style={{ backgroundImage: "url(/assets/background.jpg)" }}>
      <Fade in={checked} {...(checked ? { timeout: 1000 } : {})}>
    <div>
    <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <Grid Item className={classes.image}>
              <img className={classes.img} alt="complex" src="/assets/logo.png" />
            </Grid>
          </Grid>
          <Grid item xs={12} sm container>
          </Grid>
        </Grid>
      </Paper>
      </div>
     </Fade>
  </div>
  )
}

