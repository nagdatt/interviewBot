import { db } from "./../firebase.config";
import { getAuth } from "firebase/auth";

const array = [];
const answers = [];
const ids=[];
db.collection("oopsquestions").onSnapshot((querySnapshot) => {
  // Loop through the data and store
  // it in array to display
  const auth = getAuth();

    const user = auth.currentUser;
  querySnapshot.forEach((element) => {
    const userId=user?.reloadUserInfo?.localId;
    var data = element.data();
    array.push(data.Question);
    var ans=data.Answer;
      
    if(data.useranswers){
     
    ans=data.useranswers[userId]
    }
    console.log(data.Question,ans?ans:data.Answer)
    answers.push(ans?ans:data.Answer);
    ids.push(element.id);
  });
});

let check = new Map();
const getOOPQ = () => {
  var item = "Questions are finished";
  var answer = "Goto home and sleep.. 🧑‍🎤🧑‍🚀";
  var id=null;
  if (check.size == 0) {
    item = array[0];
    answer=answers[0]
    id=ids[0]
    check.set(item, 1);
    return  {
        question: item,
        answer: answer,
        id:id
      };;
  }
  if (check.size == 1) {
    item = array[1];
    answer=answers[1]
    id=ids[1]

    check.set(item, 1);
    return  {
        question: item,
        answer: answer,
        id:id,
      };;
  }
  while (true) {
    if (check.size == array.length ) {
      item = "Questions are finished";
      const obj = {
        question: item,
        answer: answer,
        id:id
      };
      return obj;
    }
    const idx = Math.floor(Math.random() * array.length);
    item = array[idx];
    if (check.has(item)) {
      continue;
    } else {
      check.set(item, 1);
      answer=answers[idx];
      id=ids[idx]
      break;
    }
  }
  //arr[Math.floor(Math.random()*arr.length)]
  return {
    question: item,
    answer: answer,
    id:id
    
  };
};

export default getOOPQ;
export const arr = array;

