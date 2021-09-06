import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import Header from "./components/header/header";
import Container from "./components/container/container";
import shuffleCards from "./utils/utils";

function App() {
  // const card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="App">
      <Header />
      <Container />
    </div>
  );
}

export default App;
