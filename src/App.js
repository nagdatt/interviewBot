import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddQuestion from "./Components/AddQuestions/AddQuestion";
import DBMSInterview from "./Components/DBMSInterView/DBMSInterview";
import Header from "./Components/Header/Header";
import Login from "./Components/Login";
import OOPSInterview from "./Components/OOPInterview/OOPSInterview";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React from "react";
import CPPInterview from "./Components/CPPInterview/CPPInterview";
import PYTHONInterview from "./Components/PYTHONInterview/PYTHONInterview";

import HRInterview from "./Components/HRInterview/HRInterview";

function App() {
  const [user,setUser]=React.useState(null);
  React.useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  },[])
  return (
 <div>
   {
    user?<Home/>: <Login/>
   }
 </div>
  );
}
const Home=()=>{
  return(
<div className="container" >
      <Router>
      <Header/>

        {/* <Alert icon={false} severity="success" style={{ marginBottom: "20px" }}>
          <AlertTitle>
            <Link to="/">OOP </Link>
            <Link to="/java" style={{ marginLeft: "10px" }}>
              CPP
            </Link>
            <Link to="/java" style={{ marginLeft: "10px" }}>
              DBMS
            </Link>
            <Link to="/java" style={{ marginLeft: "10px" }}>
              Python
            </Link>
            <Link to="/java" style={{ marginLeft: "10px" }}>
              HR
            </Link>
            <Link to="/add" style={{ marginLeft: "10px" }}>
              ADD Q.
            </Link>
          </AlertTitle>
        </Alert> */}
        <Routes>
          
          <Route exact path="/" element={<OOPSInterview />} />
          <Route exact path="/dbms" element={<DBMSInterview />} />
          <Route exact path="/cpp" element={<CPPInterview />} />
          <Route exact path="/python" element={<PYTHONInterview />} />
          <Route exact path="/hr" element={<HRInterview/>} />

          <Route exact path="/add" element={<AddQuestion/>} />

        </Routes>

      </Router>
    </div>
  )
}
export default App;
