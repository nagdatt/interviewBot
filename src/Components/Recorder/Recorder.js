import React from "react";
import useRecorder from "./useRecorder";
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

export default function Recorder() {
    const [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
    return (
      <div style={{
        marginTop:"20px"
      }}>
    
       <Button variant="contained" color="success" onClick={()=>{startRecording()}} disabled={isRecording}>
          start rec.
        </Button>
        <Button 
        variant="contained" color="error"
        style={{
            marginLeft:"10px"
        }}
        onClick={()=>{stopRecording()
        }} disabled={!isRecording}>
          stop rec.
        </Button>
  
        <p>
          <em></em>
        </p>
        <audio src={audioURL} controls  />
      

      </div>
    );
}
