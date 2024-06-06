import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Gryffindor from "./pages/Gryffindor";
import Slytherin from "./pages/Slytherin";
import Ravenclaw from "./pages/Ravenclaw";
import Hufflepuff from "./pages/Hufflepuff";
import styles from "./App.module.css";

const App = () => {
  return (
    <Router>
      <div className={styles.app}> {}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/gryffindor" element={<Gryffindor />} />
          <Route path="/slytherin" element={<Slytherin />} />
          <Route path="/ravenclaw" element={<Ravenclaw />} />
          <Route path="/hufflepuff" element={<Hufflepuff />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import Login from './Components/LoginForm/Login'
import Wizarding_World_Logo from './assets/Images/Wizarding_World_Logo.png'


function App() {
  return (
      <div className='principal'>
        <div>
          <a className='model' href="https://www.wizardingworld.com/" target="_blank">
          <img className='img' src={Wizarding_World_Logo} alt="Wizarding World" />
          </a>
        <Login />
        </div>
      </div>
  )
}

export default App;
