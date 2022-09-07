import React from 'react'
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import getOOPQ from './../../Questions/OOPQues'
import askQuestion from './../../Questions/AskQuestion'

export default function VideoCamArea() {
    const [camButtonDisabled,setCamButtonDisabled]=React.useState(false)
    const [camCloseButtonDisabled,setCloseCamButtonDisabled]=React.useState(true)
    const askQues=()=>{
        const question=getOOPQ()
        askQuestion(question)

    }
    const startCamera=()=>{
        setCamButtonDisabled(true)
        setCloseCamButtonDisabled(false)
        var video=document.getElementById("vid")
        var mediaDevices = navigator.mediaDevices;
      
        mediaDevices
        .getUserMedia({
          video: true,
          audio: false,
        })
        .then((stream) => {
  
          // Changing the source of video to current stream.
          video.srcObject = stream;
          video.addEventListener("loadedmetadata", () => {
            video.play();
          
          
  
          });
        })
        .catch((err)=>console.log(err));
    }

    const closeCam=()=>{
        setCloseCamButtonDisabled(true)
        setCamButtonDisabled(false)

        var videoEl = document.getElementById('vid');
var stream = videoEl.srcObject;
var tracks = stream.getTracks();
tracks.forEach(function(track) {
   track.stop();
});
videoEl.srcObject = null;
    }
  return (
    <div>
         <div style={{
         "width": "500px",
         "height": "400px",
         "border": "2px solid black"
       }}>
        <video id="vid" style={{
             "width": "500px",
             "height": "400px",
             "objectFit":"cover"
        }}>
            
        </video>
      </div>
      <br />
      <Grid>
      <Button  variant="contained" disabled={camButtonDisabled} autoPlay onClick={(event)=>{startCamera()}}>open Cam</Button>
      <Button  variant="contained" color="secondary" disabled={camCloseButtonDisabled}  style={{marginLeft:"10px"}} onClick={()=>{closeCam()}}>Close Cam</Button>
      <Button  variant="contained" color="success"   style={{marginLeft:"10px"}} onClick={()=>askQues()} >Ask questions</Button>

      </Grid>
    </div>
  )
}
