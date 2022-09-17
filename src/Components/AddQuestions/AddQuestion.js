import React from "react";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { db } from "./../../firebase.config";
import Snackbar from '@mui/material/Snackbar';
import Autocomplete from '@mui/material/Autocomplete';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

import MuiAlert from "@mui/material/Alert";
import { useLocation } from "react-router-dom";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function AddQuestion() {
  const [question, setQuestion] = React.useState("");
  const [answer, setAnswer] = React.useState("");
    const options=["OOP","DBMS","CPP","Python","HR"]
    const [option,setOption]=React.useState("")
  
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
        console.log(user);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  const handleOnClik = () => {
    if (!option || !question || !answer) {
      if(!question || !answer)
      alert("Please enter question and answer")
      else
      alert("Please Select any one subject")
      
      return;
    }
    const collect=option==="OOP"?"oopsquestions":option==="DBMS"?"dbmsquestions":option==="CPP"?"oopsquestions"
    :option==="Python"?"pythonquestion":"hrquestions";
    db.collection(collect)
      .add({
        Question: question,
        Answer: answer,
      })
      .then((sucess) => {
        setOpen(true);
      });
  };

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid xs={8} container style={{margin:"20px"}}>
      <TextField
        id="outlined-basic"
        label="Question"
        onChange={(newVal) => {
          setQuestion(newVal.target.value);
        }}
        variant="outlined"
        style={{ width: "100%" }}
      />
      <TextField
        id="outlined-basic"
        label="Answer"
        rows={6}
        multiline
        onChange={(newVal) => {
          setAnswer(newVal.target.value);
        }}
        variant="outlined"
        style={{ width: "100%", marginTop: "20px" }}
      />
       <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      onChange={(event, newValue) => {
        console.log(newValue)

        setOption(newValue);
      }}
      style={{ width: "100%", marginTop: "20px" }}
      renderInput={(params) => <TextField {...params} label="Select Section" />}
    />
      <Button
        variant="contained"
        disabled={user?.email==="nagdatt.h.gajjam@gmail.com"?false:true}
        onClick={() => handleOnClik()}
        style={{ width: "100%", marginTop: "20px" }}
      >
        Add Question
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleAlertClose}>
        <Alert
          onClose={handleAlertClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Question Added Successfully 😍
        </Alert>
      </Snackbar>
    </Grid>
  );
}
