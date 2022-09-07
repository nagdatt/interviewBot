import * as React from 'react';
import Box from '@mui/material/Box';

import {arr} from './../../Questions/OOPQues'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import askQuestion from './../../Questions/AskQuestion'
export default function QuestionList() {
    const voice=(question)=>{
        askQuestion(question)
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
                 <ListItem>
                        <ListItemButton onClick={()=>voice(item)}>

                <ListItemText primary={item} />
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
