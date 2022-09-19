import { getAuth, onAuthStateChanged } from "firebase/auth";

const getUser=()=>{
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {
         
          return (user);
       
    
        } else {
          return null;
        }
      });
     
}

const initialState=getUser()
 const updateUser=(state=initialState,action)=>{
    switch(action.type){
        case "GET":return state;

    }
}
export default updateUser;