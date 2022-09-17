import React from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import getOOPQ from "./../../Questions/PYTHONQues";
import askQuestion from "./../../Questions/AskQuestion";
import ButtonGroup from '@mui/material/ButtonGroup';


export default function VideoCamArea(props) {
  const [camButtonDisabled, setCamButtonDisabled] = React.useState(false);
  
  const [camCloseButtonDisabled, setCloseCamButtonDisabled] =
    React.useState(true);
  const askQues = () => {
    const obj = getOOPQ();
    askQuestion(obj.question);
    props.setAnswer(obj.answer);
  };
  const startCamera = () => {
    setCamButtonDisabled(true);
    setCloseCamButtonDisabled(false);
    var video = document.getElementById("vid");
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
      .catch((err) => console.log(err));
  };

  const closeCam = () => {
    setCloseCamButtonDisabled(true);
    setCamButtonDisabled(false);

    var videoEl = document.getElementById("vid");
    var stream = videoEl.srcObject;
    var tracks = stream.getTracks();
    tracks.forEach(function (track) {
      track.stop();
    });
    videoEl.srcObject = null;
  };
  return (
    <div>
      <Grid
        xs={12}
        style={{
          height: "400px",
          border: "2px solid black",
        }}
      >
        <video
        xs={8}

          id="vid"
          style={{
            height: "100%",

            width:"100%",
            objectFit: "cover",
          }}
        ></video>
      </Grid>
      <br />


      <Grid display="flex" alignItems={"center"} justifyContent="center">
      <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
    >
        <Button
          variant="contained"
          disabled={camButtonDisabled}
          autoPlay
          onClick={(event) => {
            startCamera();
          }}
        >
          <i class="bi bi-camera-video"></i>
        </Button>
      
        <Button
          variant="contained"
          color="secondary"
          disabled={camCloseButtonDisabled}
          
          onClick={() => {
            closeCam();
          }}
        >
<i class="bi bi-camera-video-off"></i>        </Button>

</ButtonGroup>

<ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
    >
        <Button
          variant="contained"
          color="success"
          style={{ marginLeft: "10px" }}
          onClick={() => askQues()}
        >
       <i class="bi bi-question-square"></i>{" "} 
        </Button>
        <Button
           variant="contained"
          color="secondary"
         
          onClick={() => {
            props.setAnswerVisibility(
              props.answerVisibility === "none" ? "flex" : "none"
            );
          }}
        >
            {props.answerVisibility === "none" ? <i class="bi bi-eye-slash"></i> :<i class="bi bi-eye"></i>}
        </Button>
        </ButtonGroup>
      </Grid>
     
    </div>
  );
}
