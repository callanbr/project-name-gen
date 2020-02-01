import React, {useState} from 'react';

import nouns from "./components/nouns";
import adjectives from './components/adjectives';


const generateHackerName = () => {
    const adjective  = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun       = nouns[Math.floor(Math.random() * nouns.length)];
    const hackerName = (`${adjective} ${noun}`);
    return hackerName;
}


function App(props) {


    return (
        <div className="App">
            Your new group name is... <br/>
            <h2>{generateHackerName()}</h2>
                <p>
                    <a href="https://github.com/callanbr/ProjectNameGen">GitHub</a>
                </p>
        </div>
    );
  }
  
  export default App;