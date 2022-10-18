import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {
  
  let totalWaves = 0;

  const wave = () => {
    totalWaves +=1;
    console.log("Yo i see you waving, so far its been:",  totalWaves, "times" )
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 Sup!
        </div>

        <div className="bio">
        Im just a choom
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
