import React, {useState, useEffect } from "react";
import { useFormFields} from "../lib/customHooks";
import ReactDOM from 'react-dom';
import {
  Grid,
  Card,
  makeStyles,
  Button,
} from "@material-ui/core";
import axios from 'axios';
import "./Search.css"
import SideDrawer from "./SideDrawer.js"

const gridStyles = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
  },
  media: {
    height: 300,
  },
});

const useStyles = makeStyles((theme) => ({
  searchfield: {
    "&:hover": {
      borderColor: "rgba(223,225,229,0)",
      boxShadow: "0 1px 6px rgb(32 33 36 / 28%)",
    },
    "&:focus": {
      borderColor: "rgba(223,225,229,0)",
      boxShadow: "0 1px 6px rgb(32 33 36 / 28%)",
    },
    backgroundColor: "#00000000",
    display: "flex",
    border: " 1px solid #dfe1e5",
    borderRadius: "24px",
    height: "44px",
    margin: "20px auto 20px",
    width: "400px",
    outline: "none",
    textIndent: "30px",
    textDecoration: "none",
  },
  filter: {
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
  },
  searchbtn: {
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
  textcolor:{
    color:'#375C23'
  },
  user_container:{
    padding:'5vw'
  }
}));

export default function Search() {
  const gridclass=gridStyles()
  const classes = useStyles();
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  const[user, setUser]=useFormFields({
    account_type:'',
    medical_issue:'',
    username:''
  });

const handleSubmit = e =>{
e.preventDefault()
let accountType=JSON.stringify(user.account_type)
accountType=accountType.replace(/['"]+/g, '')
console.log(accountType)

let medicalIssue=JSON.stringify(user.medical_issue)
medicalIssue=medicalIssue.replace(/['"]+/g, '')
console.log(medicalIssue)

let userName=JSON.stringify(user.username)
userName=userName.replace(/['"]+/g, '')
console.log(userName)
//add filtering specs here

if(accountType&&medicalIssue&&userName){
  axios.get(`https://mental-health-database.herokuapp.com/`)//`http://localhost:3000/users/`)   //axios function to get all filtered
  .then(res =>{
    const users=res.data
    const usersList=users.map((user)=><Grid><Card><b>{user.user_name}</b></Card></Grid>)
    ReactDOM.render(<div>{usersList}</div>,document.getElementById('list'))})}
  else if(accountType&&medicalIssue&&!userName){
    if(accountType === 'User'){
      axios.get(`http://localhost:3030/users/patients/${medicalIssue}`)   //filter account type and username
      .then(res =>{
        const users=res.data
        const usersList=users.map((user)=><Grid><Card><b>{user.user_name}</b></Card></Grid>)
        console.log(usersList)
        ReactDOM.render(<div>{usersList}</div>,document.getElementById('list'))})
    }else if(accountType === 'Specialist'){
      axios.get(`http://localhost:3030/users/special/${medicalIssue}`)
      .then(res =>{
        const users=res.data
        const usersList=users.map((user)=><Grid><Card><b>{user.user_name}</b></Card></Grid>)
        console.log(usersList)
        ReactDOM.render(<div>{usersList}</div>,document.getElementById('list'))})}}
    else if(accountType&&userName&&!medicalIssue){
      axios.get(`https://mental-health-database.herokuapp.com/users/`) //filter account type and medical issue
      .then(res =>{
        const users=res.data
        const usersList=users.map((user)=><Grid><Card><b>{user.user_name}</b></Card></Grid>)
        console.log(usersList)
        ReactDOM.render(<div>{usersList}</div>,document.getElementById('list'))})}
      else if(medicalIssue&&userName&&!accountType){
        axios.get(`https://localhost:3030/users/`) //filter medical issue and username
        .then(res =>{
          const users=res.data
          const usersList=users.map((user)=><Grid><Card><b>{user.user_name}</b></Card></Grid>)
          console.log(usersList)
          ReactDOM.render(<div>{usersList}</div>,document.getElementById('list'))})}
        else if(accountType&&!userName&&!medicalIssue){
          if(accountType === 'Specialist'){
            axios.get(`https://mental-health-database.herokuapp.com/users/all-specialist/specialist`) //filter accounttype: specialist
            .then(res =>{
              const users=res.data
              const usersList=users.map((user)=><Grid><Card><b>{user.user_name}</b></Card></Grid>)
              console.log(usersList)
              ReactDOM.render(<div>{usersList}</div>,document.getElementById('list'))})
          }else if(accountType === "User"){
            axios.get(`https://mental-health-database.herokuapp.com/users/all-patients/patient`) //filter accounttype: patient
            .then(res =>{
              const users=res.data
              const usersList=users.map((user)=><Grid><Card><b>{user.user_name}</b></Card></Grid>)
              console.log(usersList)
              ReactDOM.render(<div>{usersList}</div>,document.getElementById('list'))})}}
          else if(medicalIssue&&!accountType&&!userName){
            axios.get(`https://mental-health-database.herokuapp.com/users/specialty-users/${medicalIssue}`) //filter medical issue, have to pres twice
            .then(res =>{
              const users=res.data
              const usersList=users.map((user)=><Grid><Card><b>{user.user_name}</b></Card></Grid>)
              console.log(usersList)
              ReactDOM.render(<div>{usersList}</div>,document.getElementById('list'))})}
            else if(userName&&!medicalIssue&&!accountType){
              axios.get(`https://mental-health-database.herokuapp.com/users/username/${userName}`) //filter username
              .then(res =>{
                const users=res.data
                const usersList=users.map((user)=><Grid><Card><b>{user.user_name}</b></Card></Grid>)
                console.log(usersList)
                ReactDOM.render(<div>{usersList}</div>,document.getElementById('list'))})}
              else{
                axios.get(`http://localhost:3030/users/all-users`)   //show all if no filter selected
                .then(res =>{
                  const users=res.data
                  const usersList=users.map((user)=><Grid><Card><b>{user.user_name}</b><p>{user.password}</p></Card><br/></Grid>)
                  console.log(usersList)
                  ReactDOM.render(<div>{usersList}</div>,document.getElementById('list'))})
              }
            }
    return (
      <body>
        <SideDrawer />
        {/* Form now prints to console, now just needs to change what is displayed to the screen */}
        <form>
          <input 
            margin="small"
            size="small"
            name="username"
            id='searchField'
            defaultValue={user.username}
            placeholder="Search"
            onChange={setUser}
            className={classes.searchfield}
          />
          <Button
            type="submit"
            className={classes.searchbtn}
            variant="contained"
            size="small"
            onClick={handleSubmit}
          >
            Search
          </Button>
        </form>
        <div className='page-container'>
        <div className='filter-container'>
        <div>
          <h2 className={classes.textcolor}>Filter By :</h2>
        </div>
        <div>
          <h3 className={classes.textcolor}>Account:</h3>
          <input  type="radio" value='User' onClick={setUser} name='account_type' /><t className={classes.textcolor}>User</t><br/>
          <input type="radio" value='Specialist' onClick={setUser} name='account_type' /><t className={classes.textcolor}>Specialist</t><br/><br/>
        </div>
          <div>
            <h3 className={classes.textcolor}>Medical Issue:</h3>
          <input type="radio" value="Anxiety" onClick={setUser} name="medical_issue" /><t className={classes.textcolor}>Anxiety</t><br/>
          <input type="radio" value="Depression" onClick={setUser} name="medical_issue" /><t className={classes.textcolor}>Depression</t><br/>
          <input type="radio" value="Bipolar Disorder" onClick={setUser} name="medical_issue" /><t className={classes.textcolor}>Bipolar Disorder</t><br/>
          <input type="radio" value="Eating Disorder" onClick={setUser} name="medical_issue" /><t className={classes.textcolor}>Eating Disorder</t><br/>
          <input type="radio" value="Post-traumatic Stress Disorder" onClick={setUser} name="medical_issue" /><t className={classes.textcolor}>Post-traumatic Stress Disorder</t><br/>
          <input type="radio" value="Dissociative Disorder" onClick={setUser} name="medical_issue" /><t className={classes.textcolor}>Dissociative Disorder</t><br/>
          </div>
        {/* <div><ViewButton /></div><br/> */}
        <Button
        type='submit'
        variant='contained'
        size='small'
        onClick={handleSubmit}
        className={classes.filter}
        >Filter</Button>
        </div>
          <list id='list' className='list-container'/>
        </div>
      </body>
    );
  }
