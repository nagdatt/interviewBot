import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import VideoCamArea from "./VideoCamArea";
import { Grid } from "@mui/material";
import QuestionList from "./QuestionList";
import TextField from "@mui/material/TextField";
import Fab from '@mui/material/Fab';
import InterViewer from "./../InterViewer";
import InputAdornment from "@mui/material/InputAdornment";
import Tooltip from '@mui/material/Tooltip';
// const [code,setCode]=React.useState("class MyClass{\n\tpublic static void main(string args[]){\n\n\t\t //start coding here\n\t}\n}")
// const onCodeChnage=(newCode)=>{
//   setCode(newCode)
// }
export default function HRInterview() {
  const [answer, setAnswer] = React.useState("");
  const [question,setQuestion]=React.useState("");

  const [answerVisibility,setAnswerVisibility]=React.useState("none")
 
  
 
  return (
   <div style={{ margin: "20px" }}>
     <Grid container spacing={1}>
      <Grid xs={6} md={5} style={{ padding: "20px" }}>
        <VideoCamArea setAnswerVisibility={setAnswerVisibility} answerVisibility={answerVisibility} setQuestion={setQuestion} setAnswer={setAnswer}/>
      </Grid>
      <Grid  xs={6} md={3} style={{ padding: "20px" }}>
        <InterViewer />
      </Grid>
      <Grid xs={12} md={4} style={{ padding: "20px" }}>
        <QuestionList setAnswer={setAnswer} />
      </Grid>
      
    </Grid>
   
    <TextField
        id="outlined-basic"
        label="Answer"
        value={answer}
        InputProps={
          {
            endAdornment:
              (  <InputAdornment position="end"> 
               <Tooltip title="Save">
                <Fab    variant="extended" color='inherit' display="flex" >
                <i class="bi bi-sd-card-fill"></i>
                    </Fab> 
                    </Tooltip>
                    </InputAdornment>
                    )
              
          }
        }
        rows={6}
        multiline
        onChange={(e)=>{
          setAnswer(e.target.value)
        }
        
        }
        variant="outlined"
        style={{ width: "100%", marginTop: "20px",display:answerVisibility }}
      />
      
   {/* */}
  
   </div>
  );
}
