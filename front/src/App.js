import logo from './logo.svg';
import './App.css';
import React from "react";
import NavBar from "./context/NavBar"
import MainMenu from './components/MainMenu';

function App() {
  return (
    <NavBar>
      <MainMenu/>
    </NavBar>
  );
}

export default App;
