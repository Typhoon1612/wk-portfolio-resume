import { useState } from "react";
import "./App.css";
import WaterButton from "./components/WaterButton.tsx";
import Navbar from "./sections/Navbar.tsx";
import Body from "./sections/Body.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Body />
    </>
  );
}

export default App;
