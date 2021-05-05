import React, {useState, useEffect } from "react";
import { useFormFields} from "../lib/customHooks";
import {
  makeStyles,
  Box,
  Button,
  Grid,
  TextField,
  Card,
  TextareaAutosize,
  Grow
} from "@material-ui/core";
import ReactDOM from 'react-dom'

const businessStyles=makeStyles((theme)=>({
  businessStyle:{
    color: "white"
  },
}));

const buttonStyles = makeStyles((theme) => ({
  submitButton: {
    "&:hover": {
      borderColor: "#adcaec",
      boxShadow: "0 1px 6px #adcaec",
      backgroundColor: "#12417b",
      color: "white",
    },
    color: "#f6f8f9",
    background: "#2c63a6",
    padding: "12px 18px",
    fontSize: "14px",
    lineHeight: "16px",
    height: "auto",
    borderWidth: "0",
    borderRadius: "30px",
  },
}));

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
}


//   const handleChange = (event) =>{
//     console.log(event.target.value);
//     setInput(event.target.value);
//     console.log(event.target.value);
//   }

  //for filtering by name
//   const nameFilter = (event) =>{
//     event.preventDefault();
//     console.log(event.target.input.value);
//     try{
//       axios.get(`http://biz-wiz.herokuapp.com/business/find/name/${event.target.input.value}`)
//       .then(res => {
//         const businesses = res.data;
//           const businessList=businesses.map((business)=><Grid><Card style={{backgroundColor:'#3168b0'}}>{business.business_name}<p> </p>{business.business_type}</Card></Grid>)
//           console.log(businesses.length)
//           if(businesses.length>0){
//             ReactDOM.render(
//             <div>{businessList}<MapContainer /></div>,
//             document.getElementById('list')
//           )}
//           else{
//             ReactDOM.render(<div>Match Could Not Be Found</div>,document.getElementById('list'))
//           }
//         //setBusinessState(res.data);
//         //console.log(business);
//       })
//     }catch(err){
//       console.log(err.message)
//     }
//   }

  //for filtering
//   const handleSubmit=event=>{
//     event.preventDefault()
//     let businessType=JSON.stringify(business.business_type)
//     businessType=businessType.replace(/['"]+/g, '')

//     let businessLocation=JSON.stringify(business.location)
//     businessLocation=businessLocation.replace(/['"]+/g, '')

//filter by location and type
//     if(businessLocation&&businessType){                                             
//       axios.get(`http://biz-wiz.herokuapp.com/business/category/`+businessType)
//       .then(res =>{
//         let sortByState=[]
//         const businesses = res.data;
//         for(let i=0; i<businesses.length; i++){
//           if(businesses[i].state==businessLocation){
//             sortByState.push(businesses[i].business_type);
//           }
//         }
//         console.log(sortByState)
//         let businessList=[]
//         if(sortByState.length==0){
//           ReactDOM.render(<div>Match Could Not Be Found</div>,document.getElementById('list'))
//         }
//         else{
//           let businessList=sortByState.map((business)=><Grid><Card>{business}</Card></Grid>)
//           ReactDOM.render(<div>{businessList}<MapContainer /></div>,document.getElementById('list'))}})}

// //filter by type alone
//     else{
//       if(!businessLocation && businessType){                                    
//         axios.get('https://biz-wiz.herokuapp.com/business/category/'+businessType)
//         .then(res =>{
//           const businesses = res.data;
//           const businessList=businesses.map((business)=><Grid><Card style={{backgroundColor:'#3168b0'}}>{business.business_name}<p> </p>{business.business_type}</Card></Grid>)
//           console.log(businesses.length)
//           if(businesses.length>0){
//             ReactDOM.render(
//             <div>{businessList}<MapContainer /></div>,
//             document.getElementById('list')
//           )}
//           else{
//             ReactDOM.render(<div>Match Could Not Be Found</div>,document.getElementById('list'))}})}

//   //output if no filter is selected
//     else{
//         if(!businessLocation&&!businessType){
//             axios.get(`http://biz-wiz.herokuapp.com/business/all`)
//               .then(res =>{
//                 const businesses = res.data;
//                 console.log(businesses)
//                 const businessList=businesses.map((business)=><Grid><Card style={{backgroundColor:'#3168b0'}}>{business.business_name}<p> </p>{business.business_type}</Card></Grid>)
//                 ReactDOM.render(
//                   <div>{businessList}<MapContainer /></div>,
//                   document.getElementById('list'))})}

// //filter by state
//         else{
//           axios.get(`http://biz-wiz.herokuapp.com/business/all`)
//           .then(res =>{
//             let sortByState=[]
//             const businesses = res.data;
//             for(let i=0; i<businesses.length; i++){
//               if(businesses[i].state==businessLocation){
//                 sortByState.push(businesses[i].business_type)
//               }
//             }
//             console.log(sortByState)
//             if(sortByState.length==0){
//               ReactDOM.render(<div>Match Could Not Be Found</div>,document.getElementById('list'))
//             }
//             else{
//               let businessList=sortByState.map((business)=><Grid><Card>{business}</Card></Grid>)
//               ReactDOM.render(<div>{businessList}<MapContainer /></div>,document.getElementById('list'))}})}}}};

    return (
      <body>
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
          <filter>Filter By :</filter>
        </div>
        <div>
          <filterby>Account</filterby><br/>
          <input type="radio" value='User' onClick={setUser} name='account_type' /> User<br/>
          <input type="radio" value='Specialist' onClick={setUser} name='account_type' /> Specialist<br/>
        </div>
          <div>
            <filterby>Medical Issue</filterby><br/>
          <input type="radio" value="Anxiety" onClick={setUser} name="medical_issue" />Anxiety<br/>
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
