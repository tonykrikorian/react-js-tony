import React from "react";
import "./App.css";
import Movies from "./Components/Movies/movies";
import RetirarColacion from "./Components/RetirarColacion/retirarColacion";
import Counters from "./Components/Counters/counters";

function App() {
  return (
    <main role="main" className="container">
      <Counters />
    </main>
  );
}

export default App;
