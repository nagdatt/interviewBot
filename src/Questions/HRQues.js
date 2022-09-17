import { db } from "./../firebase.config";
const array = [];
const answers = [];
db.collection("hrquestions").onSnapshot((querySnapshot) => {
  // Loop through the data and store
  // it in array to display

  querySnapshot.forEach((element) => {
    var data = element.data();
    array.push(data.Question);
    answers.push(data.Answer);
  });
});

let check = new Map();
const getOOPQ = () => {
  var item = "Questions are finished";
  var answer = "Goto home and sleep.. 🧑‍🎤🧑‍🚀";
  if (check.size == 0) {
    item = "Tell me about your self";
    answer="\
Elaborate your self using these points\n\
-Your Name\t-Collage Name\t-Previous Degree\\Collage\t-Internships (if any)\t-Elaborate internship in few words (if any)\n\
-Skills\t-Acheivements\
    "
    check.set(item, 1);
    return  {
        question: item,
        answer: answer,
      };;
  }
  if (check.size == 1) {
    item =
      "Have you done any projects? If yes, please elaborate any one out of it.";
      answer="Describe any project (best project)"

    check.set(item, 1);
    return  {
        question: item,
        answer: answer,
      };;
  }
  while (true) {
    if (check.size == arr.length + 2) {
      item = "Questions are finished";
      const obj = {
        question: item,
        answer: answer,
      };
      return obj;
    }
    const idx = Math.floor(Math.random() * arr.length);
    item = arr[idx];
    if (check.has(item)) {
      continue;
    } else {
      check.set(item, 1);
      answer=answers[idx];
      break;
    }
  }
  //arr[Math.floor(Math.random()*arr.length)]
  return {
    question: item,
    answer: answer,
  };
};

export default getOOPQ;
export const arr = array;
