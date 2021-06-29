import { makeStyles, Button } from "@material-ui/core";
import "./Home.css"
import SideDrawer from "./SideDrawer"
import {
  Grid,
} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import ReactDOM from 'react-dom';
import { AuthContext } from '../context/auth-context'
import React from "react";
import { useFormFields } from "../lib/customHooks";

const useStyles = makeStyles((theme) => ({
  img: {
    margin: 'auto',
    display: 'block',
    maxHeight: '110%',
    maxWidth: '180%',
  },
  welcome: {
    paddingLeft:'10vw',
    margin:'11vw 10px'
  },
  userInfo: { 
    paddingLeft:'10vw',
    margin:'-11vw 10px'
  },
  userIcon: {
    paddingLeft:'10vw',
    margin:'-9vw 10px'
  },
  EditAccountInfodiv: {
    paddingLeft:'30vw',
    margin: '-25vw 1px'
  },
  editbtn: {
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
    top: 20,
    marginBottom: 50,
    left:'46vw',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: '1vw',
    maxWidth: 580,
    paddingTop:'3vw',
    paddingBottom:'2vw',
    paddingLeft:'9vw'
  },
  image: {
    width: 328,
    height: 328,
  },
  notebtn: {
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
    left:'10vw',
    top: 30,
    marginBottom: 50,
  },
  note_container: {
    margin:'50vw 40px'
  },
  page_padding: {
    paddingTop:'3vw'
  }
}));

let notes:string[]
export default function AccountProfile(){
  const { user, token } = React.useContext(AuthContext)
  console.log(token)
  const classes = useStyles();
  console.log(user)
  const [note, setNote] = useFormFields({
    content:""
})
  const submitNote = (e: React.FormEvent) =>{
    e.preventDefault()
    let noted=JSON.stringify(note.content)
    noted=noted.replace(/['"]+/g, '')
    notes.push(noted)
    console.log(notes)
    ReactDOM.render(
      <div >{notes}</div>,document.getElementById('notes')
    )
}
 return(
    <div>
    <SideDrawer />
            <img className={classes.userIcon}src= "/assets/userIcon.jpg"/>
            <h1 className={classes.welcome}>{user ? `${user.user_name}'s Page` : "User Not Found"}</h1><br />
            <h3 className={classes.userInfo}>Related Mental Health concern: {user.medical_issue}</h3>
            <div className={classes.EditAccountInfodiv}><Button className={classes.editbtn}>Edit Account Info</Button></div>
          <div className={classes.note_container}>
          <Paper className={classes.paper}>
          <Grid container spacing={2}>

            <form>
          <Grid item>
            <textarea name="content" defaultValue={note.content} onChange={setNote} rows={7} cols={50} placeholder='Please write a note about how you are feeling, what you wish to discuss with your specialist, or anything on your mind.'></textarea>
          </Grid>
          <Grid item xs={12} sm container>
          </Grid>
          <Button type='submit' onClick={submitNote} className={classes.notebtn}>Save Note</Button>
          </form>
          </Grid>
          </Paper>
          <div className={classes.page_padding}><div className='page-container'>
            <Grid item id='notes'></Grid>
      </div></div>
          </div>
      </div>
  )
}

