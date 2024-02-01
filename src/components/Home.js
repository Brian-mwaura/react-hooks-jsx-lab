import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  return (
    <div id='home'>
      <h1 style={{ color: 'firebrick' }}>
        {`Your name is ${name} and you are a Web Developer from ${city}`}
      </h1>
    </div>
  );
}

export default Home;