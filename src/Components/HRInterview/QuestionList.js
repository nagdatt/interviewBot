import * as React from 'react';
import Box from '@mui/material/Box';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import Checkbox from '@mui/material/Checkbox';

import askQuestion from './../../Questions/AskQuestion'
import {db} from './../../firebase.config'
export default function QuestionList(props) {
  const [arr,setArr]=React.useState([])
  React.useEffect(()=>{
    

    db.collection("hrquestions").onSnapshot((querySnapshot) => {
             
      // Loop through the data and store
      // it in array to display
      const array=[]
      querySnapshot.forEach(element => {
        var data = element.data();
        array.push({"question":data.Question,"answer":data.Answer})
          
    });
    setArr(array)
  })
  },[])
    const voice=(question,answer)=>{
        askQuestion(question)
        props.setAnswer(answer)
    }
    
  return (
    <Box
      sx={{ width: '100%', height: 350, maxWidth: 400,  marginTop:"10px"}}
    >
        <b 
        style={{
            marginLeft:"130px",
            padding:"10px",
            borderRadius:"20px",
            background:"#000FFF",

            color:"white"
          

        }}
        >
        Questions List
        </b>
         <List
      sx={{
        width: '100%',
        maxWidth: 400,
        bgcolor: 'background.paper',
        overflow: 'auto',
        maxHeight: 350,
        marginTop:"20px"
      }}
    >
      
       
            {arr.map((item) => (
            
             <div>
              
                 <ListItem key={item?.question}>
                 <Checkbox   />
                        <ListItemButton onClick={()=>voice(item?.question,item?.answer)}>
                       
                <ListItemText primary={item?.question} />
                </ListItemButton>
              </ListItem>
              <Divider style={{
                marginLeft:"15px",
                marginRight:"15px"
              }}/>
             </div>
            ))}
        
      
    </List>
    </Box>
  );
}
