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
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    padding: '10%',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
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
              <img className={classes.img} alt="complex" src="/assets/background.jpg" />
              <Typography gutterBottom variant="subtitle1">
                  Logo Text
                </Typography>
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

