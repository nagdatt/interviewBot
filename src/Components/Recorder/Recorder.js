import React from "react";
import useRecorder from "./useRecorder";
import Button from '@mui/material/Button';
import { ButtonGroup, Grid } from '@mui/material';

export default function Recorder() {
    const [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
    return (
      <Grid >
    <Grid display={"center"} alignContent="center" justifyContent={"center"} >
      <ButtonGroup>
      <Button variant="contained" color="success" onClick={()=>{startRecording()}} disabled={isRecording}>
       <i class="bi bi-mic"></i>
        </Button>
        <Button 
        variant="contained" color="error"
        
        onClick={()=>{stopRecording()
        }} disabled={!isRecording}>
         <i class="bi bi-mic-mute"></i>
        </Button>
      </ButtonGroup>
  </Grid>
        <p>
          <em></em>
        </p>
        <audio src={audioURL} controls  />
      

      </Grid>
    );
}
