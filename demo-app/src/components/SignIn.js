// import { Button, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { login } from "../services/auth.js";
import AccountProfile from "./AccountProfile.js"
import SideDrawer from "./SideDrawer.js"
import SideDrawer2 from "./SideDrawer2.js"
import { useFormFields } from "../lib/customHooks";
import {
  Grid,
  Paper,
  makeStyles,
  TextField,
  Button,
  InputAdornment,
  Typography,
  Link,
  Collapse,
} from "@material-ui/core";
import { AccountCircle, LockRounded } from "@material-ui/icons";
import { useState, useEffect } from "react";


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
    minHeight: "500px",
    maxHeight: "70vh",
    width: 380,
    margin: "20px auto",
  },
  inputField: {
    display: "flex",
    flexDirection: "column",
  },
  signIn: {
    "&:hover": {
      borderColor: "#375C23",
      boxShadow: "0 1px 6px #375C23",
      backgroundColor: '#375C23',
    },
    color: "#f6f8f9",
    background: '#375C23',
    padding: "12px 18px",
    fontSize: "14px",
    lineHeight: "16px",
    height: "auto",
    borderWidth: "0",
    borderRadius: "20px",
    top: 20,
    marginBottom: 40,
  },
  signUp: {
    alignContent: "center",
    marginLeft: 70,
  },
  signInIcons: {
    paddingBottom: "14px",
    color: "#375C23",
  },
}));
function SignIn() {
  const [businessLogin, setBusinessLogin] = useFormFields({
    user_name: "",
    password: "",
  });


  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

    return (
      <div>
        <Grid>
          <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <Paper elevation={10} className={classes.paper}>
              <div className={classes.inputField}>
                <Grid
                  container
                  spacing={1}
                  direction="row"
                  alignItems="center"
                  alignContent="center"
                  wrap="nowrap"
                >
                  <img
                    className={classes.logo}
                    src="/assets/BizWiz landing logo.PNG"
                    alt=""
                  />
                </Grid>
                <TextField

                  margin="normal"
                  label="Username"
                  placeholder="Enter Username"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        className={classes.signInIcons}
                        position="start"
                      >
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  margin="normal"
                  label="Password"
                  type="password"
                  placeholder="Enter Password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        className={classes.signInIcons}
                        position="start"
                      >
                        <LockRounded />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  className={classes.signIn}
                  type="submit"
                  variant="contained"
                >
                  Sign In
                </Button>
                <Typography variant="subtitle2" className={classes.signUp}>
                  Don't have an account? <Link href="/register">Sign Up</Link>
                </Typography>
              </div>
            </Paper>
          </Collapse>
        </Grid>
      </div>
    );
  }


export default SignIn;