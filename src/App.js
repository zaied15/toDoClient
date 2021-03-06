import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import RequireAuth from "./components/Login/RequireAuth";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }
        ></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
