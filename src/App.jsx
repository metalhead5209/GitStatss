import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import AuthedRoute from "./pages/AuthedRoute";
import AuthedWrapper from "./pages/AuthedWrapper";


const App = () => {
  return (
    <div className="App">
      <AuthedWrapper>
      <Router>
        <Routes>
        <Route path='/' element={<AuthedRoute/>}>
            <Route path='/' element={<Home/>}/>
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      </AuthedWrapper>
    </div>
  );
};

export default App;
