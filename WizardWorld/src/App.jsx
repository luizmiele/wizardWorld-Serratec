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
