import React from 'react';
import { useState } from 'react';
import './App.css';
import {Button} from './Components/Button';
import {HomeScreen} from './Components/HomeScreen';
import {HomeButton} from './Components/HomeButton';


function App() {

  const [components, setComponents] = useState(["Sample Component"])

/** writing ‘…components’, which copies the values of the current components array into the new one */

  function addComponent(){
    var b = [components];
    setComponents([...components, "Sample Component"])
  }


  return (
    <div>
      <Button onClick={addComponent} text="Call Component" />
      <Button onClick={addComponent} text="Home" />
      {components.map((item, i) => ( <HomeScreen text={item} /> ))}
    </div>
    
  );
}

export default App;
