import React from "react";
//import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { register } from "../services/auth";
import { useState, useEffect } from "react";
import { useFormFields } from "../lib/customHooks";
import {
  Grid,
  Paper,
  makeStyles,
  TextField,
  Button,
  Typography,
  Link,
  Collapse,
  Container,
} from "@material-ui/core";

import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
    minHeight: "500px",
    height: "70vh",
    width: "100vh",
    margin: "0 auto",
  },
  signUp: {
    "&:hover": {
      borderColor: "#375C23",
      boxShadow: "0 1px 6px #adcaec",
      backgroundColor: "#C2F0AA",
      color: "#375C23"
    },
    color: "#f6f8f9",
    background: "#375C23",
    padding: "12px 18px",
    fontSize: "14px",
    lineHeight: "16px",
    height: "auto",
    borderWidth: "0",
    borderRadius: "20px",
    left:260,
    top: 30,
    marginBottom: 50,
  },
  container: {},
}));

export default function Register({ setLoggedIn, loggedIn }) {
  const history = useHistory();

  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [user, setUser] = useFormFields({
    first_name: "",
    last_name: "",
    user_name: "",
    password: "",
    email: "",
    insurance: "",
    acct_type: "Patient",
  });

//   const handleRegister = (event) => {
//     event.preventDefault();
//     register(business);
//     history.push("/profile/home");
//     setLoggedIn(true);
//   };

  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div>
      <Container className={classes.container}>
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
          <Paper elevation={20} className={classes.paper}>
            <Grid
              container
              spacing={1}
              direction="row"
              justify="center"
              alignItems="center"
              alignContent="center"
              wrap="nowrap"
            >
              <img
                className={classes.logo}
                src="/assets/BizWiz landing logo.PNG"    /////add logo
                alt=""
              />
            </Grid>
            <form autoComplete="off">  {/*onSubmit={handleRegister}> */}
              <Grid container justify="space-around" spacing={1}>
                <Grid item>
                  <TextField
                    margin="small"
                    size="small"
                    label="First Name"
                    name="first_name"
                    defaultValue={user.first_name}
                    onChange={setUser}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    margin="small"
                    size="small"
                    label="Last Name"
                    name="last_name"
                    defaultValue={user.last_name}
                    onChange={setUser}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    margin="small"
                    size="small"
                    className={classes.inputUsername}
                    label="Username"
                    name="user_name"
                    defaultValue={user.user_name}
                    onChange={setUser}
                  />
                </Grid>

                <Grid item>
                  <TextField
                    margin="small"
                    size="small"
                    label="Password"
                    type="password"
                    name="password"
                    defaultValue={user.password}
                    onChange={setUser}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    margin="small"
                    size="small"
                    label="E-mail"
                    name="email"
                    defaultValue={user.email}
                    onChange={setUser}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    margin="small"
                    size="small"
                    label="Insurance"
                    name="insurance"
                    defaultValue={user.insurance}
                    onChange={setUser}
                  />
                </Grid>
              </Grid>
              <Button
                className={classes.signUp}
                type="submit"
                variant="contained"
              >
                Sign up
              </Button>
              <Typography 
              justify="center"
              alignItems="center"
              alignContent="center"
              variant="subtitle2">
                <Link href="/sign-in">Have an account? Sign In</Link>
              </Typography>
            </form>
          </Paper>
        </Collapse>
      </Container>
    </div>
  );
}