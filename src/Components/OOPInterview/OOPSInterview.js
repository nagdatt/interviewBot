import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import VideoCamArea from "./VideoCamArea";
import { Grid } from "@mui/material";
import QuestionList from "./QuestionList";
import InterViewer from "./../InterViewer";
export default function OOPSInterview() {
  const [code,setCode]=React.useState("class MyClass{\n\tpublic static void main(string args[]){\n\n\t\t //start coding here\n\t}\n}")
  const onCodeChnage=(newCode)=>{
    setCode(newCode)
    console.log(newCode)
  }
  return (
   <div>
     <Grid container>
      <Grid style={{ marginRight: "15px" }}>
        <VideoCamArea />
      </Grid>
      <Grid style={{ marginRight: "15px" }}>
        <InterViewer />
      </Grid>
      <Grid style={{ marginLeft: "15px" }}>
        <QuestionList />
      </Grid>
    </Grid>
    <h2>Code Editor: Java/Cpp</h2>
    <AceEditor
    style={{
      width:"600px",
      minWidth:"600px",
      marginTop:"10px"
    }}
    mode="java"
    value={code}
    fontSize={15}
    onChange={onCodeChnage}
    theme="github"
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
    setOptions={{
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true
    }}
  />
   </div>
  );
}
