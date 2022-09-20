import * as React from 'react';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import { FixedSizeList } from 'react-window';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import Checkbox from '@mui/material/Checkbox';
import { getAuth } from "firebase/auth";

import askQuestion from './../../Questions/AskQuestion'
import {db} from './../../firebase.config'
export default function QuestionList(props) {
  const [arr,setArr]=React.useState([])
  React.useEffect(()=>{
    const auth = getAuth();

    const user = auth.currentUser;


    db.collection("pythonquestion").onSnapshot((querySnapshot) => {
             
      // Loop through the data and store
      // it in array to display
      const array=[]
 
      querySnapshot.forEach((element) => {
        var data = element.data();
       const userId=user?.reloadUserInfo?.localId;
        var ans=data.Answer;
      
        if(data.useranswers){
         
        ans=data.useranswers[userId]
        }
        
        array.push({"question":data.Question,"answer":ans?ans:data.Answer,"id":element.id})
          
    });
    setArr(array)
  })
  },[])

    const voice=(question,answer,id)=>{
        askQuestion(question)
        props.setAnswer(answer)
        props.setId(id)
    }
    function renderRow(props) {
      let { index, style } = props;
      
      const item=props.data[props.index]
      return (
        <div>
          <ListItem style={style} key={index} >
           <Checkbox   />
          <ListItemButton onClick={()=>voice(item?.question,item?.answer,item?.id)}>
            <ListItemText primary={item.question} />
          </ListItemButton>
          <Divider style={{
                marginLeft:"15px",
                marginRight:"15px"
              }}/>
        </ListItem>
       
        </div>
      );
    }
    
  return (
    <Box
      sx={{ width: '100%', height: 350, maxWidth: 400,  marginTop:"10px"}}
    >
        <Button variant="contained" fullWidth disableElevation>
        <i class="bi bi-card-list" style={{marginRight:20}}></i>  Questions List
        <i class="bi bi-card-list" style={{marginLeft:20}}></i> 
        </Button>
        <FixedSizeList
        height={350}
        width={"100%"}
        itemSize={70}
        itemCount={arr.length}
        overscanCount={5}
        itemData={arr}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
