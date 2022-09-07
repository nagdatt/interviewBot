import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DBMSInterview from "./Components/DBMSInterView/DBMSInterview";
import OOPSInterview from "./Components/OOPInterview/OOPSInterview";
function App() {
  return (
    <div className="container" style={{ margin: "20px" }}>
      <Router>
        <Alert icon={false} severity="success" style={{ marginBottom: "20px" }}>
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
          </AlertTitle>
        </Alert>
        <Routes>
          <Route exact path="/" element={<OOPSInterview />} />
          <Route exact path="/java" element={<DBMSInterview />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
