import React from 'react'
import Recorder from './Recorder/Recorder'
export default function InterViewer() {
  return (
  <div >
      <div
    style={{
        width: "100%",
        height: "200px",
        border: "2px solid black",
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center",
        display:"flex"
    }}
    >

InterViewer
    </div>
   <div  style={{
        width: "100%",
        height: "200px",
        display:"flex",
        alignContent:"center",
        justifyContent:"center",
       marginTop:"20px"
        
        
    }}>
   <Recorder />
   </div>
  </div>
  )
}
